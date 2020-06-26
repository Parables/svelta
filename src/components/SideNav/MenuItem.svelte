<script lang="typescript">
  type menu_type = 'parent' | 'child';
  import { SVG, icon_name } from '../../assets/svgs';
  import { MENU_WIDTH } from '../../main_store';
  export let route;
  export let type: menu_type;
  export let location = 'Programmes All Books';
  let color;
  $: {
    if (location.toLowerCase().includes(route.name.toLowerCase())) {
      if (type === 'parent') color = 'bg-comet ';
      else color = 'bg-primary';
    } else color = 'bg-transparent';
  }
  let full: boolean;
  $: {
    full = $MENU_WIDTH === '75';
  }
  let hovering:boolean
</script>

<div on:mousemove="{()=> hovering= true}" on:mouseout="{()=> hovering= false}"
  class="inline-flex items-center justify-between p-2 mb-2 cursor-pointer ml-4
  mr-4  outline-none rounded-md select-none transition-all
  duration-300 ease-in-out {color}"
>
  <div class="items-center transform {hovering?'translate-x-2 transition-all duration-300 ease-linear':'translate-x-0 transition-all duration-300 ease-linear'} " id="menu-item">
    <span>
      {@html SVG(type === 'parent' ? route.icon : 'circle', `text-cadetblue ${type === 'parent' ? 'w-5 h-5' : 'w-3 h-3'} inline-flex `)}
    </span>
    {#if full}
      <span
        class="inline-flex font-normal transition-all duration-300 ease-in-out text-cadetblue"
      >
        {route.name}
      </span>
    {/if}
  </div>
  {#if full}
    <span>
      {@html SVG('chevron_right', `inline-flex text-cadetblue w-5 h-5 ${full && route.subRoutes ? 'visible' : 'invisible'}`)}
    </span>
  {/if}
</div>
