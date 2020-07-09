<script>
  import { createEventDispatcher } from 'svelte';
  let dispatch = createEventDispatcher();
  export let value = false;
  export let variant = 'inner'; //'outer'
  export let withText = true;
</script>

<div
  class=" inline-flex items-center rounded-full w-12
  {variant === 'inner' ? 'h-5' : 'h-3'}
  {value ? 'bg-success' : 'bg-comet'}"
  on:click
  on:click="{() => {
    value = !value;
    dispatch('toggle', value);
  }}"
>
  {#if withText}
  <span class="px-1 text-xs leading-normal lowercase align-text-top select-none text-cararra">on</span>
  <span class="px-1 text-xs leading-normal lowercase align-text-top select-none text-cararra">off</span>
  {/if}
  <span
    class="absolute w-5 h-5 border rounded-full {value ? 'border-success' : 'border-comet'}
    bg-cararra transform transition-all duration-300 ease-linear {value ? 'translate-x-7' : 'translate-x-0'}"
  ></span>
</div>
