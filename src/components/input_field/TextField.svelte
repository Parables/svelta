<script lang="typescript">
  import { SVG } from '../../assets/svgs';
  import { createEventDispatcher, onMount } from 'svelte';
  const dispatch = createEventDispatcher();
  let float = false;
  // default classes
  export let active = false;
  export let id = '';
  export let name = '';
  export let label = '';
  export let placeholder = '';
  export let value = '';
  export let hint = '';
  export let type = 'text';
  export let min=0;
  export let max=10000000;
  export let step=1;
  export let readonly = false
  export let colors = ['comet', 'primary', 'cadetblue']; //bg, focus, blur
  export let width = 'w-full';
  export let height = 'h-8';
  export let variant = 'default'; //|"material" | "outlined"
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

  let fullHeight, labelHeight, iconHeight, iconWidth, labelTop, iconTop, xy;
  $: {
    // find the midHeight by subtracting midFullHeight - midLabelHeight
    labelTop = Math.trunc(fullHeight / 2)-Math.trunc(labelHeight / 2) ;
      iconTop = Math.trunc(fullHeight / 2)-Math.trunc(iconHeight / 2);
   //-8 for the internal mx-2 of SVG and the left-1 of the SVG span element,
   // +8 for the border-2. Adjust per your preference
    xy = active? `-${startIcon ? Math.trunc(iconWidth-8): 0}px,-${variant==='outlined'?labelTop+8: labelTop}px`:`` 
  console.log('height', fullHeight, labelHeight, iconHeight, labelTop, iconTop);
  }

  let variantStyle;
  $: {
    variantStyle =
      variant === 'outlined'
        ? `border-solid rounded ${active ? ' border-2 ' : ' border '}`
        : variant === 'material'
        ? `border-t-0 border-l-0 border-r-0 border-b bg-${colors[0]} 
           ${active ? ' border-b-2 ' : ' border-b '}`
        : `border-solid rounded bg-${colors[0]}  ${
            active ? ' border-2 ' : ' border '
          }`;
  }
</script>

<div class=" {width} {wrapperClass}">
  {#if variant==='default'}
  <label for="{id}" class="pl-1 text-xs select-none text-{active? colors[1] :colors[2]}">{label}</label>
{/if}
  <div
    bind:clientHeight="{fullHeight}"
    class="{variantStyle}
    {active ? `text-${colors[1]} border-${colors[1]}` : variant==='default'? `text-${colors[2]} border-transparent`: `text-${colors[2]} border-${colors[2]}`}"
  >
    {#if startIcon}
      <span bind:clientHeight="{iconHeight}" bind:clientWidth="{iconWidth}" style="top:{iconTop};"
        class="absolute select-none left-1 {active ? `text-${colors[1]}` : `text-${colors[2]}`}
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
    {#if variant !== 'default'}
     <label bind:clientHeight="{labelHeight}"
        for="{id}" style="top:{labelTop};  {float? ` transform: translate(${xy}); `:''}"
        class=" select-none leading-none absolute text-sm {startIcon ? 'left-8' : 'left-1'}
        inline-block w-auto m-0 px-1 py-0 origin-center transition duration-300
        bg-{colors[0]} bg-transparent scale-90
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
      {readonly}
      autocomplete="off"
      placeholder="{variant === 'default' ? placeholder : ''}"
      on:blur
      on:blur="{() => {
        active = false;
        float = value !== '';
        if (onBlur) onBlur();
      }}"
      on:input
      on:input="{(e) => {
        value = e.target.value
        if (onInput) onInput();
      }}"
      on:focus
      on:focus="{() => {
        active = true;
        float = true;
        if (onFocus) onFocus();
      }}"
      class=" block w-full {height}
      {startIcon ? 'pl-10' : 'px-4'}
      {endIcon ? 'pr-10' : 'px-4'} m-0 leading-none transition duration-300
      ease-in-out bg-transparent outline-none border-none {inputClass}"
    />

    {#if endIcon}
      <span bind:clientHeight="{iconHeight}" style="top:{iconTop};"
        class="absolute select-none right-2 {active ? `text-${colors[1]}` : `text-${colors[2]}`}
        {iconsClass}
        {trailingIconClass}"
        on:click
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
