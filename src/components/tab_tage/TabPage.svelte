<script>
  import { fly, fade } from 'svelte/transition';
  export let tabs = [
    'Profile',
    'Fee Payments',
    'Books Given',
    'Academic Results',
  ];
  let active = 0
</script>

<div class="block overflow-x-auto">
  <div class="inline-flex">
    {#each tabs as t, i}
      <div class="px-4 py-2 text-sm border-b-2  transition-all duration-300 ease-linear {active===i?'border-primary':' border-transparent'} text-cadetblue" 
      on:click="{()=>active=i}"
      >
        {t}
      </div>  
     
    {/each}
  </div>
 <div transition:fade>
    <slot>YOur content goes here</slot>
  </div>
</div>
