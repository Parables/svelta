<script>
  import AppBar from './components/AppBar/AppBar.svelte';
  import MenuItem from './components/SideNav/MenuItem.svelte';
  import { SVG } from './assets/svgs.ts';
  import { logo } from './assets/logo.ts';
  import { Menu } from './components/SideNav/menu.ts';
  let open = false;
</script>

<div class="side-menu bg-haiti  h-screen flex flex-col w-75 fixed z-30 {open? 'block':'hidden'}">

  <div class="pt-8 pb-4 px4">
    <slot name="header">
      <div
        class="flex items-center justify-between pr-4 cursor-pointer"
        on:click="{() => {}}"
      >
        <span>
          {@html logo}
        </span>
        <div
          class="px-2 text-lg font-semibold select-none font-mons text-cararra"
        >
          Idel-Sekondi
        </div>
        <div>
          <span
            class="relative cursor-pointer select-none feather-icon"
            id="toggleMenu"
            on:click="{() => (open = false)}"
          >
            {@html SVG('disc', 'stroke-current text-cararra w-5 h-5')}
          </span>
        </div>
      </div>
    </slot>
  </div>

  <div class="overflow-y-auto">
    <!-- Menu Group Headers -->
    {#each Menu as g, i}
      <div class=" menu-group text-cadetblue">
        <span
          class="block mt-8 mb-3 ml-6 text-xs font-medium leading-5 tracking-tight uppercase select-none"
        >
          {g.group}
        </span>
      </div>

      <div class="menu-items">
        {#each g.routes as r, i}
          <!-- Menu Items -->
          <MenuItem type="parent" route="{r}" full="{true}" />
          {#if r.subRoutes}
            {#each r.subRoutes as s, j}
              <!-- Menu SubRoutes -->
              <MenuItem type="child" route="{s}" full="{true}" />
            {/each}
          {/if}
        {/each}
      </div>
    {/each}

  </div>

</div>

<div
  class="fixed inset-0 z-20 w-screen h-screen bg-black bg-opacity-25
  cursor-pointer overlay {open ? 'block' : 'hidden'}
  "
  on:click="{() => (open = !open)}"
></div>

<div class="px-6 pt-1 main-content">
  <AppBar on:toggle="{() => (open = !open)}" />
</div>
