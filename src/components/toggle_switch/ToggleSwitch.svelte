<script>
  import { createEventDispatcher } from 'svelte'
  let dispatch = createEventDispatcher()
  export let checked = false;
  export let variant = 'outer'; //inner''
  export let withText = false
</script>

{#if variant === 'inner'}
  <div
    class="relative inline-flex {withText? 'w-auto': 'w-12'} h-7 border-transparent rounded-full {checked ? 'bg-success' : 'bg-comet'}"
    on:click  on:click="{() => {
       checked = !checked 
       dispatch('toggle', checked)
    }}">

     {#if withText}
     <div class="flex items-center justify-between px-2 py-0 m-0 ">
         <slot>
           <span class="p-0 mr-2 text-xs leading-normal lowercase align-text-top select-none text-cararra">on</span>
           <span class="p-0 m-0 text-xs leading-normal lowercase align-text-top select-none text-cararra">off</span>
        </slot>
     </div>
     {/if}
    <div
      class="absolute w-7 h-7 border rounded-full {checked ? 'border-success' : 'border-comet'}
      bg-cararra transform transition-all duration-300 ease-linear {checked ?'translate-x-full' : 'translate-x-0'}"
    ></div>
  </div>
  {:else}
  <div class="relative inline-block " on:click
   on:click="{() => {
    checked = !checked 
    dispatch('toggle', checked)
  }}" >
    <div
      class="absolute top-2 {withText? 'w-auto': 'w-12'} h-5 border-transparent rounded-full {checked ? 'bg-success' : 'bg-comet'}"
    >
    {#if withText}
    <div class="box-content flex items-center justify-between px-2 py-0 m-0">
       <slot>
           <span class="p-0 mr-2 text-xs leading-normal lowercase align-text-top select-none text-cararra">on</span>
           <span class="p-0 m-0 text-xs leading-normal lowercase align-text-top select-none text-cararra">off</span>
        </slot>
      </div>
    {/if}
  </div>
    <div
      class="absolute top-1 w-7 h-7 border rounded-full {checked ? 'border-success' : 'border-comet'}
      bg-cararra transform transition-all duration-300 ease-linear {checked ? 'translate-x-full' : 'translate-x-0'}"
    ></div>
  </div>
{/if}
