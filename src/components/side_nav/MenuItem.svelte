<script>
  import { SVG, icon_name } from '../../assets/svgs';
  import { MENU_WIDTH, ACTIVE_PATH } from '../../main_store';
  import { location, push } from 'svelte-spa-router';
  import { createEventDispatcher } from 'svelte';
  let dispatch = createEventDispatcher();
  export let route;
  export let path;
  export let type; //'parent' | 'child'
  let full;
  let expand;
  let hovering;
  $: {
    full = $MENU_WIDTH === '70';
  }
  let active =
    type === 'parent' && route.subRoutes
      ? 'bg-comet shadow-none'
      : 'bg-primary shadow-primary';
  let inactive = `bg-transparent`;
  let color = inactive;
  let parentColor = 'bg-comet';
  $: {
    if (route.path === '/') color = $location.length === 1 ? active : inactive;
    else color = $location === path ? active : inactive;
  }
</script>

<div
  title="{route.title}"
  class="{type === 'parent' ? 'menu-item' : 'menu-sub-item'} block select-none"
>
  <span
    class=" flex items-center justify-between p-2 mx-4 mb-2 rounded-md outline-none cursor-pointer select-none menu {route.subRoutes && $location.includes(path) ? parentColor : inactive}
    {color} "
    on:mousemove="{() => (hovering = true)}"
    on:mouseout="{() => (hovering = false)}"
    on:click="{() => {
      push(path);
      dispatch('click', route.route);
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
      <span class="expand-icon"  
      on:click="{() => {
        expand = !expand
        dispatch('expand', expand);
      }}">
        {@html SVG('chevron_right', ` text-cadetblue w-5 h-5  transform  ${expand? 'rotate-90' : ''} ${full && route.subRoutes ? 'visible' : 'invisible'}  transition-all duration-300 ease-linear`)}
      </span>
    {/if}
  </span>

  <div
    class=" menu-sub-items select-none {expand && full ? 'block ' : 'hidden'}
    transition-all duration-700 ease-linear"
  >
    <slot />
  </div>
</div>
