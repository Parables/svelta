<script>
  import Chip from './Chip.svelte';
  import alasql from 'alasql';
  import { fromJS, updateIn } from 'immutable';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  // TODO: Check options for duplicates
  export let options = [];
  export let id = '';
  export let name = '';
  export let label = 'Your label';
  export let placeholder = '';
  export let selectedItems = [];
  export let color = 'primary';
  export let inactiveColor = 'gray-400';
  export let wrapperClass = '';
  export let labelClass = '';
  export let inputClass = '';
  export let error = '';
  export let validators = [];
  export let callback = null;

  let active = false;
  let isShowing = false;
  let hovering = false;
  let arrowUpDown = false;
  let highligthedOption = {};
  let input = '';
  let lastIndex = 0;
  const tempHolder = placeholder;
  let filteredOptions = [];
  let dropOptions = ["Item One", "Item Two"];
  let defaultLabelStyle =
    'top: 0.75em; left: 0.75em; transition: transform 0.25s, opacity 0.25s, padding 0.25s ease-in-out; transform-origin: 0 0;';
  let floatingState =
    'z-index: 2500; transform: translate(0, -2em) scale(0.9);';
  let defaultLabelClass =
    'bg-white text-gray-600 select-none   leading-none  absolute block p-6 w-auto m-0';
  let normalLabelClass = ' z-1500 bg-white ';
  let floatingLabelClass = 'z-2500  px-1 pt-3 pb-0 text-sm';
  let defaultInputClass =
    ' m-0  px-6  py-4  h-20 w-full  transition   duration-300 ease-in-out overflow-y-auto block z-2000 leading-none relative outline-none bg-white border border-solid rounded-md  ';

  function addSelectedItem(value) {
    try {
      let count = alasql(
        'VALUE OF SELECT  COUNT(title) FROM ? WHERE title LIKE ? ',
        [selectedItems, `%${value.title}%`]
      );
      if (count === 0) {
         dispatch('item-added', {
            _id: value._id,
            title: value.title
          });
        selectedItems = [...selectedItems, value];
      }
      blurInput();
    } catch (error) {
      console.log(`Adding selected option failed... Error: ${error}`);
    }
  }

  function removeChip(event) {
    try {
      const title = event.target.innerText;
      for (var index = 0; index < selectedItems.length; index++) {
        if (selectedItems[index].title === title) {
          dispatch('item-removed', {
            _id: selectedItems[index]._id,
            title: selectedItems[index].title
          });
          selectedItems = [
            ...selectedItems.slice(0, index),
            ...selectedItems.slice(index + 1)
          ];
        }
      }
    } catch (error) {
      console.log(`Removing selected item failed... Error: ${error}`);
    }
  }

  function handleFocus(data) {
    try {
      let div = document.getElementById(data.id);
      div.focus();
      div.contentEditable = true;
      div.innerText.trim;
      input = '';
      active = true;
      isShowing =
        elementExists('drop-down-wrapper') && filteredOptions.length > 0;
    } catch (error) {
      console.log(`Setting focus on input failed... Error: ${error}`);
    }
  }

  function inputHandler(event) {
    try {
      active = true;
      const keyName = event.key;
      if (keyName === 'Enter') {
        if (arrowUpDown) addSelectedItem(highligthedOption);
        else addSelectedItem(dropOptions[0]);
      } else if (keyName === 'ArrowUp') {
        arrowUpDown = true;
        event.stopPropagation();
        event.preventDefault();
        let children = document.getElementById('drop-down-wrapper').children;
        for (let i = lastIndex - 1; i >= 0; i--) {
          highligthedOption = dropOptions[i];
          const child = children[i];
          const prevChild = i > 4 ? children[5] : children[i + 1];
          child.classList.add('bg-blue-200');
          prevChild.classList.remove('bg-blue-200');
          if (i > 0) lastIndex--;
          break;
        }
      } else if (keyName === 'ArrowDown') {
        arrowUpDown = true;
        let children = document.getElementById('drop-down-wrapper').children;
        for (let i = lastIndex; i < children.length; i++) {
          if (i < children.length - 1) lastIndex++;
          const child = children[i];
          highligthedOption = dropOptions[i];
          const prevChild = children[i - 1];
          child.classList.add('bg-blue-200');
          prevChild.classList.remove('bg-blue-200');
          break;
        }
      } else if (keyName === 'Escape') {
        blurInput();
      }
    } catch (error) {
      console.log(`Keydown Handler on input failed... Error: ${error}`);
    }
  }

  // Sets the placeholder
  $: {
    if (!active) placeholder = label;
    else placeholder = tempHolder;
  }

  //Show the placeholder
  $: {
    if (
      !active &&
      selectedItems.length < 1 &&
      (input === ',' || input === '')
    ) {
      input = placeholder;
    } else if (
      active &&
      (input.includes(label) ||
        input.includes(placeholder) ||
        input.includes(tempHolder))
    ) {
      input = input.replace(label, '');
      input = input.replace(tempHolder, '');
    }
  }

  $: {
    /*  run validators*/
    validators.forEach(v => {
      console.log(v);
    });
  }

  //Fliter options for drop down
  $: {
    try {
      if (active) {
        filteredOptions = [];
        options.forEach(option => {
          var count = alasql(
            'VALUE OF SELECT COUNT(title) FROM ? WHERE title === ? ',
            [selectedItems, option.title]
          );
          if (count === 0) filteredOptions = [...filteredOptions, option];
        });
      }
      if (input === '') dropOptions = filteredOptions;
      else
        dropOptions = alasql('SELECT _id, title  FROM ? WHERE title LIKE ? ', [
          filteredOptions,
          `%${input}%`
        ]);
    } catch (error) {
      console.log(`Filtering options failed... Error: ${error}`);
    }
  }

  function elementExists(id) {
    try {
      let e = document.getElementById(id);
      return e !== null;
    } catch (err) {
      console.log(`elementExists failed... Error: ${error}`);
    }
  }

  function blurInput() {
    let div = document.getElementById(id);
    div.blur();
    div.contentEditable = false;
    active = hovering = arrowUpDown = false;
    highligthedOption = {};
  }
</script>

<div id="wrapper" class="relative flex my-2 {wrapperClass} ">
  <div
    on:click="{handleFocus({ id })}"
    class="
    {defaultInputClass}
    {active ? 'border-primary' : 'border-gray-400'}
    {inputClass}"
  >
    {#each selectedItems as item}
      <slot>
        <Chip id="{item._id}" on:click="{removeChip}">{item.title}</Chip>
      </slot>
    {/each}
    <!-- Editable div -->
    <div
      {id}
      {name}
      contenteditable="true"
      class="inline-flex {active ? '' : 'pt-4'} pr-8 outline-none text-{inactiveColor}
      focus:text-{color}"
      bind:innerHTML="{input}"
      on:focus="{() => (active = true)}"
      on:blur="{() => {
        if (!hovering && (!isShowing || input === '')) blurInput();
      }}"
      on:keydown="{event => inputHandler(event)}"
      on:input="{() => {
        if (callback !== null) callback();
      }}"
    ></div>
  </div>

  <label
    for="{id}"
    class="{defaultLabelClass}
    {active ? floatingLabelClass : normalLabelClass}
    {labelClass}
    "
    style="{defaultLabelStyle}
    {active ? floatingState : normalLabelClass}"
  >
    {active ? label : placeholder}
  </label>
  {#if error !== ''}
    <div class="block">
      <p class="py-1 text-xs text-center text-red-600 ">{error}</p>
    </div>
  {/if}

  <!-- Adding drop down list -->
  {#if active && dropOptions.length > 0}
    <div
      id="drop-down-wrapper"
      class="absolute inset-x-0 block h-32 overflow-y-auto bg-white border shadow-md mt-21 border-b-solid rounded-b-md z-2500 "
    >
      {#each dropOptions as item, index (item._id)}
        <p
          id="{item._id}"
          class="px-4 py-2 font-sans text-sm font-normal hover:bg-gray-200 focus:bg-primary"
          on:click="{() => {
            addSelectedItem({ _id: item._id, title: item.title });
          }}"
          on:mouseover="{() => (hovering = true)}"
        >
          {item.title}
        </p>
      {/each}

    </div>
  {/if}
</div>
