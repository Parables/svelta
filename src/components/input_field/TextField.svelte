<script lang="typescript">
  import { SVG } from '../../assets/svgs';
  import { createEventDispatcher, onMount } from 'svelte';
  const dispatch = createEventDispatcher();
  let active = false;
  let float = false;
  // default classes
  export let id = '';
  export let name = '';
  export let label = '';
  export let value = '';
  export let hint = '';
  export let type = 'text';
  export let min=0;
  export let max=10000000;
  export let step=1;
  export let colors = ['haiti', 'primary', 'cadetblue']; //bg, focus, blur
  export let width = 'w-full';
  export let height = 'h-10';
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
           ${active ? ' border-b-2 ' : ' border-b '} ${h < 49 ? ' pt-2 ' : ''}`
        : `border-solid rounded bg-${colors[0]}  ${
            active ? ' border-2 ' : ' border '
          }`;
  }
</script>

<div class=" {width} {wrapperClass}">
  <div
    bind:clientHeight="{h}"
    class="{variantStyle}
    {active ? `text-${colors[1]} border-${colors[1]}` : `text-${colors[2]} border-${colors[2]}`}"
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
    <input
      {id}
      {name}
      {min}
      {max}
      {step}
      {type}
      autocomplete="off"
      placeholder="{variant === 'normal' ? label : ''}"
      on:blur="{() => {
        active = false;
        float = value !== '';
        dispatch('blur');
        if (onBlur) onBlur();
      }}"
      on:input="{(e) => {
        value = e.target.value
        dispatch('input');
        if (onInput) onInput();
      }}"
      on:focus="{() => {
        active = true;
        float = true;
        dispatch('focus');
        if (onFocus) onFocus();
      }}"
      class=" block w-full {height}
      {startIcon ? 'pl-10' : 'px-4'}
      {endIcon ? 'pr-10' : 'px-4'} m-0 leading-none transition duration-300
      ease-in-out bg-transparent outline-none border-none {inputClass}"
    />

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
