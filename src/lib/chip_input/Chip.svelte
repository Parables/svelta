<script>
  import { SVG } from '../../assets/svgs.ts';
  import Avartar from '../avartar/Avartar.svelte';
  export let id;
  export let classNames = '';
  export let dismissable = true;
</script>

<div
  on:click
  {id}
  class="inline-flex justify-evenly items-center rounded cursor-pointer text-cadetblue bg-haiti
  text-sm truncate select-none {classNames}"
>
  <slot name="start">
    <!-- <Avartar size='w-6 h-6' iconClass='w-10 h-10' /> -->
  </slot>

  <span {id} class="pl-2">
    <slot />
  </span>

  {#if dismissable}
    <slot name="end">
      <span class="p-0 m-0">
        {@html SVG('close', 'w-4 h-4')}
      </span>
    </slot>
  {/if}
</div>
