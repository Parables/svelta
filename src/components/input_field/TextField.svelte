<script>
  import { formatDate } from './DateFormatter';
  import { SVG } from '../../assets/svgs';
  import { fly } from 'svelte/transition';
  import { onMount, tick, createEventDispatcher } from 'svelte';
  import Calendar from '../calendar/Calendar.svelte';
  let dispatch = createEventDispatcher();
  // externals
  export let id = 'textField';
  export let name = 'textField';
  export let label = 'Label';
  export let type = 'text'; //  typeahead| number | date
  export let value = '';
  export let items = [];
  export let multiple = true;
  export let selected = [];
  export let filteredItems = [];
  export let placeholder = '';
  export let hint = '';
  export let passwordChar = '•';
  export let min = 0;
  export let max = 10000000;
  export let step = 1;
  export let width = 'w-20p';
  export let height = 'h-10';
  export let margin = 'mb-4';
  export let readonly = false;
  export let variant = 'outlined'; // material  default |
  export let datePattern = 'do MMMM, yyyy';
  export let startIcon = false;
  export let endIcon = false;
  // internals
  export let active = false;
  export let dropdown = false;
  export let float = false;

  let variantClasses = '';
  let wrapperColors = '';
  let inputColors = '';
  let labelColors = '';
  let labelClass = '';

  let colors = {
    activeText: 'text-primary',
    inactiveText: 'text-cadetblue',
    activeLabel: 'text-primary',
    inactiveLabel: 'text-cadetblue',
    activeBorder: 'border-primary',
    inactiveBorder: 'border-cadetblue',
    activeBg: variant === 'outlined' ? 'bg-haiti' : 'bg-comet',
    inactiveBg: variant === 'outlined' ? 'bg-haiti' : 'bg-comet',
    hover: variant === 'outlined' ? 'bg-comet' : 'bg-haiti',
  };

  // internal counter
  let currentIndex = 0;
  let widget = null;
  let fullHeight, labelHeight, iconWidth, labelTop, xy;

  // add focus and blur evvents listeners
  onMount(() => {
    value = '';
    widget.addEventListener('focus', onFocus, true);
    widget.addEventListener('blur', onBlur, true);
  });

  // extract colors
  $: {
    inputColors = active ? `${colors.activeText}` : `${colors.inactiveText}`;
    wrapperColors = active
      ? `${colors.activeBorder} ${colors.activeBg} ${colors.activeText}`
      : `${colors.inactiveBorder} ${colors.inactiveBg} ${colors.inactiveText}`;
    labelColors = active
      ? `${colors.activeLabel} ${colors.activeBg} `
      : `${colors.inactiveLabel} ${colors.inactiveBg} `;
  }

  $: {
    variantClasses =
      variant === 'default'
        ? `border border-haiti rounded`
        : variant === 'material'
        ? `border-0 ${dropdown ? ' border-b-2 ' : ' border-b '}`
        : `rounded ${
            dropdown
              ? type === 'typeahead'
                ? 'border-2 border-b-0'
                : ' border-2 '
              : ' border '
          }`;
  }

  $: {
    // find the midHeight by subtracting midFullHeight - midLabelHeight
    labelTop = fullHeight / 2 - labelHeight / 2;
    xy = float
      ? `-${startIcon ? iconWidth - 6 : 0}px,-${
          variant === 'outlined' ? labelTop + 8 : labelTop
        }px`
      : ``;
  }

  $: {
    labelClass = float
      ? `text-xs ${variant === 'material' ? 'bg-opacity-0' : 'bg-opacity-100'}`
      : ``;
  }

  function onFocus() {
    active = true;
    float = true;
    if (type === 'typeahead') filterItems();
    if (type === 'date') toggleDropDown();
  }

  function onBlur() {
    active = false;
    dropdown = false;
    float = value !== '';
  }

  function onInput(e) {
    type === 'typeahead'
      ? filterItems()
      : type === 'password'
      ? parseValue()
      : null;
  }

  function parseValue() {
    let temp = value;
    switch (type) {
      case 'password':
        value = value.replace(/./g, passwordChar);
        break;
      case 'date':
        value = selected
          .map((d) => {
            let s = `${d}`.split('/');
            return formatDate(s[2], s[1], s[0], datePattern);
          })
          .join(', ');
        break;
    }
  }

  function filterItems(open = true) {
    currentIndex = 0;
    if (value.length < 1 || value === '') {
      filteredItems = items.slice();
    } else {
      filteredItems = items.filter((i) => {
        if (typeof items[0] === 'object')
          return (
            strLowerCase(i.value).includes(strLowerCase(value)) ||
            strLowerCase(i.label).includes(strLowerCase(value)) ||
            strLowerCase(i.id).includes(strLowerCase(value))
          );
        else return strLowerCase(i).includes(strLowerCase(value));
      });
    }
    if (open) dropdown = filteredItems.length > 0;
  }

  function strLowerCase(val) {
    if (val) return val.toString().trim().toLowerCase();
  }

  function onKeyDown(event) {
    const keyName = event.key;
    if (keyName === 'ArrowUp') {
      if (currentIndex > 0) {
        --currentIndex;
        if (dropdown) scrollDropDown(false);
        onItemSelected(currentIndex, false);
      }
    } else if (keyName === 'ArrowDown') {
      if (currentIndex < filteredItems.length - 1) {
        ++currentIndex;
        if (dropdown) scrollDropDown(true);
        onItemSelected(currentIndex, false);
      }
    } else if (keyName === 'Enter') {
      if (dropdown) onItemSelected(currentIndex);
    } else if (keyName === 'Escape' && dropdown) dropdown = false;
  }

  function scrollDropDown(scrollDown = false) {
    let id = filteredItems[currentIndex].id
      ? filteredItems[currentIndex].id
      : currentIndex;
    let listItem = document.getElementById(id);
    let dropdownDiv = document.getElementById('dropdown');
    if (scrollDown) dropdownDiv.scrollTop += listItem.clientHeight;
    else dropdownDiv.scrollTop -= listItem.clientHeight;
  }

  function onItemSelected(index, close = true) {
    let itm = filteredItems[index];
    value = typeof itm === 'object' ? (itm.label ? itm.label : itm.value) : itm;
    selected = itm;
    if (close) dropdown = false;
  }

  function toggleDropDown() {
    dropdown = !dropdown;
  }

  function onDateSelected(e) {
    if (e.detail.isSelected) {
      selected = multiple
        ? addDate(e.detail.date)
        : (selected = [e.detail.date]);
    } else {
      selected = multiple ? removeDate(e.detail.date) : (selected = []);
    }
    parseValue();
    if (!multiple) dropdown = false;
  }

  function addDate(item) {
    let index = selected.findIndex((x) => x.includes(item));
    return index == -1 ? [...selected, item] : selected.slice();
  }

  function removeDate(item) {
    let index = selected.findIndex((x) => x.includes(item));
    return index > -1
      ? selected.slice(0, index).concat(selected.slice(index + 1))
      : selected.slice();
  }
</script>

<!-- wrapper div -->
<div
  bind:this="{widget}"
  bind:clientHeight="{fullHeight}"
  on:keydown|stopPropagation="{onKeyDown}"
  class="{width}
  {margin}"
>
  {#if variant === 'default'}
    <label
      for="{id}"
      class="block text-sm select-none px-1 transition duration-300 {active ? 'text-primary' : 'text-cadetblue'}"
    >
      {label}
    </label>
  {/if}

  <div
    id="textField"
    class="relative inline-flex w-full {variantClasses}
    {wrapperColors}"
    on:focus="{onFocus}"
    on:blur="{onBlur}"
  >
    <!-- inner div -->
    <div class="inline-flex items-center w-full">
      <!-- left icon -->
      {#if startIcon}
        <span
          bind:clientWidth="{iconWidth}"
          on:click
          class="inline-flex items-center h-full px-2 cursor-pointer"
        >
          <slot name="startIcon">
            {@html SVG('home', 'w-4 h-4')}
          </slot>
        </span>
      {/if}

      <!-- input and label div -->
      <div class="relative inline-flex items-center w-full">
        <input
          {id}
          {name}
          {min}
          {max}
          {step}
          {readonly}
          placeholder="{variant === 'default' ? placeholder : ''}"
          autocomplete="off"
          type="text"
          bind:value
          on:input="{onInput}"
          class="{inputColors}
          {height} w-full flex-1 select-text bg-transparent leading-none
          border-none outline-none px-2"
        />

        {#if variant !== 'default'}
          <label
            bind:clientHeight="{labelHeight}"
            for="{id}"
            style="{float ? ` transform: translate(${xy}); ` : ''}"
            class="absolute select-none px-1 mx-2 transition duration-300 {labelColors}
            {labelClass}"
          >
            {label}
          </label>
        {/if}
      </div>
      <!-- right icon -->
      {#if endIcon || type === 'typeahead' || type === 'date'}
        <span class="inline-flex items-center h-full px-2 cursor-pointer">
          <slot name="endIcon">
            {@html SVG('chevron_right', `w-5 h-5 transition duration-300 transform ${dropdown ? 'rotate-90' : '-rotate-90'} `)}
          </slot>
        </span>
      {/if}
      {#if hint !== ''}
        <p class="py-1 mx-3 text-xs truncate select-none ">{hint}</p>
      {/if}
    </div>
    <!-- dropdown -->
    {#if dropdown}
      <div
        in:fly="{{ y: -10, duration: 200 }}"
        out:fly="{{ y: 0, duration: 200 }}"
        style="{type === 'date' ? 'top: 120%;' : 'top:95%;'}
        {variant === 'outlined' ? 'left: -2px; right: -2px;' : 'left:0px; right:0px;'}
        {type === 'date' ? 'right:auto;' : ''}"
        class="absolute text-sm truncate z-10 {variant === 'default' ? 'border-0 border-haiti rounded' : variant === 'material' ? 'border-0' : type === 'date' ? ' border-2 rounded' : ' border-2 border-t-0 rounded'}
        pb-1 pt-2 {wrapperColors} cursor-pointer pr-1"
      >
        <!-- typeahead options -->
        {#if type === 'typeahead'}
          <div
            class="w-full overflow-x-hidden overflow-y-auto max-h-50"
            id="dropdown"
          >
            {#each filteredItems as f, i (i)}
              <slot>
                <p
                  id="{f.id ? f.id : i}"
                  on:mousedown="{onItemSelected(i)}"
                  class="truncate hover:{colors.hover} pl-4 {currentIndex === i ? colors.hover : ''}"
                >
                  {f}
                </p>
              </slot>
            {/each}
          </div>
        {:else if type === 'date'}
          <Calendar on:dateselected="{onDateSelected}" />
        {/if}

      </div>
    {/if}
  </div>

</div>

<!--  onSelected={(e)=>parseValue(type,e.details.value)} -->
<!--   on:click|stopPropagation|preventDefault="{() => {
            active = active ? false : true;
            float = active ? true : value === '' ? false : true;
            if (type === 'typeahead') filterItems(false);
            toggleDropDown();
          }}" -->
