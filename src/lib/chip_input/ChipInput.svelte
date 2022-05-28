<script lang="typescript">
  import { SVG } from '../../assets/svgs';
  import Chip from './Chip.svelte';
  import { createEventDispatcher, onMount } from 'svelte';
  const dispatch = createEventDispatcher();
  let active = false;
  let float = false;
  // default classes
  export let id = '';
  export let name = '';
  export let label = '';
  export let placeholder = '';
  export let value = '';
  export let hint = '';
  export let type = 'text';
  export let min = 0;
  export let max = 10000000;
  export let step = 1;
  export let readonly = false;
  export let colors = ['comet', 'primary', 'cadetblue']; //bg, focus, blur
  export let width = 'w-full';
  export let items = ['Item One'  ];
  export let variant = 'outlined'; //|"standard" | "normal"
  export let startIcon = false;
  export let endIcon = false;
  export let validators = [];
  export let onInput = null;
  export let onFocus = null;
  export let onBlur = null;
  export let onStartIconClicked = null;
  export let onEndIconClicked = null;
  // use these if you want to take control
  export const wrapperClass = 'mb-5';
  export const inputClass = ``;
  export const labelClass = '';
  export const hintClass = 'text-red-600';
  export const iconsClass = '';
  export const leadingIconClass = active
    ? ` text-${colors[1]} `
    : ` text-${colors[2]} `;
  export const trailingIconClass = active
    ? ` text-${colors[1]} `
    : ` text-${colors[2]} `;
  $: {
    /*  run validators*/
    validators.forEach(v => {
      console.log(v);
    });
  }

  let h, top;
  $: {
    top = Math.trunc(h / 8) - 2;
    console.log('height', h, top);
  }
  let variantStyle;
  $: {
    variantStyle =
      variant === 'outlined'
        ? `border-solid rounded ${active ? ' border-2 ' : ' border '}`
        : variant === 'standard'
        ? `border-t-0 border-l-0 border-r-0 border-b bg-${colors[0]} 
             ${active ? ' border-b-2 ' : ' border-b '} ${
            h < 49 ? ' pt-2 ' : ''
          }`
        : `border-solid rounded bg-${colors[0]}  ${
            active ? ' border-2 ' : ' border '
          }`;
  }
</script>

<!-- -->
<div class=" {width} {wrapperClass}">
  {#if variant === 'normal'}
    <label
      for="{id}"
      class="pl-1 text-xs select-none text-{active ? colors[1] : colors[2]}"
    >
      {label}
    </label>
  {/if}
  <div bind:clientHeight="{h}"
    class="{variantStyle} text-{colors[2]}
   {active ? `border-${colors[1]}` : variant === 'normal' ? ` border-transparent` : ` border-${colors[2]}`}"
  >
    {#if startIcon}
      <span
        class="absolute select-none top-{top} left-1 {active ? `text-${colors[1]}` : `text-${colors[2]}`}
        {iconsClass}
        {leadingIconClass}"
        on:click="{() => {
          dispatch('iconClicked', { icon: 'first' });
          if (onStartIconClicked) onStartIconClicked();
        }}"
      >
        <slot name="startIcon">
          <!--Add your icon here -->
        </slot>
      </span>
    {/if}
    {#if variant !== 'normal'}
      <label
        for="{id}"
        class=" select-none leading-none absolute top-{top} text-sm {startIcon ? 'left-8' : 'left-1'}
        inline-block w-auto m-0 px-2 py-0 origin-center transition duration-300
        bg-{colors[0]} bg-transparent {float ? `transform translate-x-0 -translate-y-${variant === 'outlined' ? top + 2 : top - 1} scale-90 ` : ''}
        {active ? `text-${colors[1]}` : `text-${colors[2]}`}
        {labelClass}"
      >
        {label}
      </label>
    {/if}
    <div  class="flex flex-wrap items-center mt-2 ml-2">
      {#each items as i}
        <Chip classNames="mr-2 mb-2">{i}</Chip>
      {/each}
      <input
        {id}
        {name}
        {min}
        {max}
        {step}
        {type}
        {readonly}
        autocomplete="off"
        placeholder="{variant === 'normal' ? placeholder : ''}"
        on:blur="{() => {
          active = false;
          float = items !== [];
          dispatch('blur');
          if (onBlur) onBlur();
        }}"
        on:input="{e => {
          value = e.target.value;
          dispatch('input');
          if (onInput) onInput();
        }}"
        on:focus="{() => {
          active = true;
          float = true;
          dispatch('focus');
          if (onFocus) onFocus();
        }}"
        class=" block h-6 {startIcon ? 'pl-10' : 'px-4'}
        {endIcon ? 'pr-10' : 'px-4'} m-0 w-auto leading-none transition
        duration-300 ease-in-out bg-transparent outline-none border-none {inputClass}"
      />
    </div>

    {#if endIcon}
      <span
        class="absolute select-none top-{top} right-2 {active ? `text-${colors[1]}` : `text-${colors[2]}`}
        {iconsClass}
        {trailingIconClass}"
        on:click="{() => {
          dispatch('iconClicked', { icon: 'last' });
          if (onEndIconClicked) onEndIconClicked();
        }}"
      >
        <slot name="endIcon">
          <!--Add your icon here -->
        </slot>
      </span>
    {/if}
  </div>
  {#if hint !== ''}
    <div class="block mx-3 py-1 text-xs select-none truncate {hintClass}">
      <p>{hint}</p>
    </div>
  {/if}
</div>
