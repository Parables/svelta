<script>
  import { SVG, icon_name } from '../../assets/svgs';
  import { MENU_WIDTH } from '../../main_store';
  import { createEventDispatcher } from 'svelte';
  let dispatch = createEventDispatcher();
  export let route;
  export let type; //'parent' | 'child'
  export let location = '';
  let color;
  let full;
  let expand;
  let hovering;
  $: {
    if (location.toLowerCase().includes(route.name.toLowerCase())) {
      if (type === 'parent') color = 'bg-comet ';
      else color = 'bg-primary';
    } else color = 'bg-transparent hover:bg-comet';
  }
  $: {
    full = $MENU_WIDTH === '70';
  }
</script>

<div title="{route.title}"
  class="{type === 'parent' ? 'menu-item' : 'menu-sub-item'} block select-none"
>
  <span
    class="flex items-center justify-between menu p-2 mb-2 mx-4 cursor-pointer
    outline-none rounded-md select-none {color}"
    on:mousemove="{() => (hovering = true)}"
    on:mouseout="{() => (hovering = false)}"
    on:click="{() => {
      expand = !expand;
      dispatch('click');
    }}"
  >
    <span
      class="icon--route-name flex flex-1 items-center select-none transform {hovering ? 'translate-x-2' : 'translate-x-0'}
      transition-all duration-300 ease-linear"
    >
      <span class=" icon">
        {@html SVG(type === 'parent' ? route.icon : 'circle', `text-cadetblue ${type === 'parent' ? 'w-5 h-5' : 'w-3 h-3'}  `)}
      </span>
      {#if full}
        <span
          class="flex-1 pl-2 font-normal select-none route-name text-cadetblue "
        >
          {route.name}
        </span>
      {/if}
    </span>
    {#if full}
      <span class="expand-icon">
        {@html SVG('chevron_right', ` text-cadetblue w-5 h-5  transform  ${expand ? 'rotate-90' : ''} ${full && route.subRoutes ? 'visible' : 'invisible'}  transition-all duration-300 ease-linear`)}
      </span>
    {/if}
  </span>

  <div
    class=" menu-sub-items select-none {expand && full ? 'block ' : 'hidden'}
    transition-display duration-300 ease-linear"
  >
    <slot />
  </div>
</div>
