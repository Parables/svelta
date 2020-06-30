<script>
  import { SVG } from '../../assets/svgs.ts';
  export let id;
  export let classNames;
</script>

<span
  on:click
  {id}
  class="inline-flex items-center justify-between py-1 pl-2 rounded-md
  cursor-pointer text-white bg-primary text-sm font-medium truncate select-none {classNames}"
>
  <span {id} class="">
    <slot />
  </span>
  <span>
    {@html SVG('close', 'w-4 h-4 m-0 ')}
  </span>
</span>
