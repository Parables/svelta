<script>
  import { SVG } from '../../assets/svgs.ts';

  export let classNames = 'bg-comet mr-1';
  export let size = 'h-10 w-10';
  export let image = '';
  export let imageClass=''
  export let text = '';
  export let textClass='mx-auto uppercase'
  export let icon = 'staff';
  export let iconClass='w-5 h-5 '
</script>

<div
  class="inline-flex items-center justify-around
  border-0  rounded-full select-none bg-transparent font-semibold
  text-cadetblue {classNames}
  {size}"
>
  <slot>
    {#if image !== ''}
      <img src="" alt="boy" class="{imageClass}" />
    {:else if text !== ''}
    <span class="{textClass}">
        {text}
    </span>
    {:else}
        {@html SVG(icon, iconClass)}
    {/if}
  </slot>
</div>
