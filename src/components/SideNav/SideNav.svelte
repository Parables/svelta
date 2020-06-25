<script>
  import { logo } from '../../assets/logo.ts';
  import { Menu } from './menu';
  import { SVG, icon_name } from '../../assets/svgs.ts';
  import MenuItem from './MenuItem.svelte';
  import AppBar from '../AppBar/AppBar.svelte';

  let pinned = true;
  let hovering = false;
  let w = 'w-68';
  let fullWidth = w === 'w-68';

  $: {
    if (pinned || hovering) w = 'w-68';
    else w = 'w-20';
    fullWidth = w === 'w-68';
  }
</script>

<!-- Side Menu -->
<div
  class="absolute top-0 left-0 flex flex-col h-screen bg-haiti {w}
  "
  on:mouseover="{() => (hovering = true)}"
  on:mouseout="{() => (hovering = false)}"
>
  <div class="pt-8 pb-4 px4">
    <slot name="header">
      <div
        class="flex items-center justify-between pr-4 cursor-pointer"
        on:click="{() => {}}"
      >
        <span>
          {@html logo}
        </span>
        {#if w === 'w-68'}
          <div
            class="px-2 text-lg font-semibold select-none font-mons text-cararra"
          >
            Idel-Sekondi
          </div>
          <div>
            <span
              class="relative cursor-pointer select-none feather-icon"
              id="toggleMenu"
              on:click="{() => (pinned = !pinned)}"
            >
              {@html SVG('disc', 'stroke-current text-cararra w-5 h-5')}
            </span>
          </div>
        {/if}
      </div>
    </slot>
  </div>

  <div class="overflow-y-auto">
    <!-- Menu Group Headers -->
    {#each Menu as g, i}
      {#if fullWidth}
        <div class=" menu-group text-cadetblue">
          <span
            class="block mt-8 mb-3 ml-6 text-xs font-medium leading-5 tracking-tight uppercase select-none"
          >
            {g.group}
          </span>
        </div>
      {/if}

      <div class="menu-items">
        {#each g.routes as r, i}
          <!-- Menu Items -->
          <MenuItem type="parent" route="{r}" full="{fullWidth}" />
          {#if fullWidth && r.subRoutes}
            {#each r.subRoutes as s, j}
              <!-- Menu SubRoutes -->
              <MenuItem type="child" route="{s}" full="{fullWidth}" />
            {/each}
          {/if}
        {/each}
      </div>
    {/each}

  </div>

</div>
<!-- Router View -->
<div class="px-6 bg-transparent {w === 'w-68' ? 'ml-68' : 'ml-20'}">
  <AppBar />
</div>
