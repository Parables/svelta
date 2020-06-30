<script>
  import { Menu } from './menu.ts';
  import { SVG } from '../../assets/svgs.ts';
  import { MENU_WIDTH, ACTIVE_PATH } from '../../main_store.ts';
  import MenuItem from './MenuItem.svelte';  
</script>

<div class="block overflow-y-auto select-none menu-body text-cadetblue ">
  <!-- Menu Group Headers -->
  {#each Menu as g, h}
    <div class="block select-none menu-group ">
      {#if $MENU_WIDTH === '70'}
        <span
          class="block mt-8 mb-3 ml-6 text-xs font-medium leading-5 tracking-tight uppercase select-none group-name "
        >
          {g.group}
        </span>
      {/if}
      {#each g.routes as r, i}
        <MenuItem
          type="parent"
          route="{r}" path="{r.path}"
        >
          {#if $MENU_WIDTH === '70' && r.subRoutes}
            {#each r.subRoutes as s, j}
              <MenuItem
                type="child"
                route="{s}" path="{`${r.path}${s.path}`}"
              />
            {/each}
          {/if}
        </MenuItem>
      {/each}
    </div>
  {/each}
</div>

{#if $MENU_WIDTH === '70'}
  <div
    class="flex flex-col items-center content-center pt-4 pb-8 mx-auto text-xs text-center menu-footer text-cadetblue"
  >
    <div>
      Made with
      {@html SVG('heart', 'w-4 h-4 inline-flex')}
      by
    </div>
    <div>
      <a href="https://github.com/Parables" class="mx-2 no-underline ">
        Parables Boltnoel &copy; {new Date().getFullYear()}
      </a>
    </div>
  </div>
{/if}
