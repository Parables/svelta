<script lang="typescript">
  type menu_type = 'parent' | 'child';
  import { SVG, icon_name } from '../../assets/svgs';
  export let route;
  export let full = false;
  export let type: menu_type = 'parent';
  export let location = 'Programmes All Books';
  let color = 'bg-comet';
  $: {
    if (location.toLowerCase().includes(route.name.toLowerCase())) {
      if (type === 'parent') color = 'bg-comet';
      else color = 'bg-primary';
    } else color = 'bg-transparent';
  }
</script>

<div
  class="flex align-middle justify-between p-2 mb-2 mr-4 ml-2 cursor-pointer
  outline-none rounded-md select-none {color}"
>
  <div>
    <span>
      {@html SVG(type === 'parent' ? route.icon : 'circle', `text-cadetblue inline-flex ${type === 'parent' ? 'w-5 h-5' : 'w-3 h-3 ml-3 '}  `)}
    </span>
    {#if full}
      <span
        class="{type === 'parent' && full ? 'pl-2' : 'pl-3'} text-base
        font-normal leading-3 text-cadetblue"
      >
        {route.name}
      </span>
    {/if}
  </div>
  {#if full}
    <div class="">
      <span>
        {@html SVG('chevron_right', `text-cadetblue inline-flex w-5 h-5 ${full && route.subRoutes ? 'visible' : 'invisible'}`)}
      </span>
    </div>
  {/if}
</div>
