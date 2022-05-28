<script lang="typescript">
  import { SVG } from '../../assets/svgs';
  import { createEventDispatcher, onMount } from 'svelte';
  import TextField from './TextField.svelte';
  const dispatch = createEventDispatcher();
  let active = false;
  let dropdown = false;
  // default classes
  export let id = '';
  export let name = '';
  export let label = '';
  export let placeholder = '';
  export let value = '';
  export let hint = 'hfhhjj';
  export let type = 'text';
  export let min = 0;
  export let max = 1;
  export let step = 1;
  export let readonly = false;
  export let colors = ['comet', 'primary', 'cadetblue']; //bg, focus, blur
  export let width = 'w-full';
  export let height = 'h-8';
  export let variant = 'default'; //|"material" | "outlined"
  export let startIcon = false;
  export let endIcon = true;
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

  let fullHeight, fullWidth;
</script>

<div bind:clientWidth="{fullWidth}" class=" {width} {wrapperClass}" on:click="{()=> console.log("I have focus")}">
 <div bind:clientHeight="{fullHeight}">
 <TextField
    bind:active
    bind:value
    {id}
    {name}
    {label}
    {placeholder}
    {readonly}
    {height}
    {startIcon}
    {endIcon}
    {onInput}
    {onStartIconClicked}
    {onEndIconClicked}
    {inputClass}
{labelClass}
{hintClass}
{iconsClass}
{leadingIconClass}
{trailingIconClass}
  > <span slot="endIcon" on:click="{()=>console.log("all sails down")}">{@html SVG('chevron_right', 'w-5 h-5 transform rotate-90 text-cadettblue')}</span></TextField>
</div>
  <div
    id="drop-down-wrapper"
    style="width:{fullWidth}; top:{fullHeight-4};"
    class="absolute block max-h-32 overflow-y-auto shadow-md bg-{colors[0]}
    {active ? 'border-2' : ''} border-t-0 {active ? `text-${colors[1]} border-${colors[1]}` : variant === 'default' ? `text-${colors[2]} border-transparent` : `text-${colors[2]} border-${colors[2]}`}"
  >
    {#if active}
      {#each Array(10) as a, i}
        <p on:click="{()=> console.log("Seleted item ", i)}">No items</p>
      {/each}
    {/if}
  </div>
</div>
