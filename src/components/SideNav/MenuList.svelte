<script>
  import { Menu } from './menu.ts';
  import { SVG } from '../../assets/svgs.ts';
  import { MENU_WIDTH } from '../../main_store.ts';
  import MenuItem from './MenuItem.svelte';
</script>

<div class="overflow-y-auto ">
  <!-- Menu Group Headers -->
  {#each Menu as g, i}
    {#if $MENU_WIDTH === '75'}
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
        <MenuItem type="parent" route="{r}" full="{$MENU_WIDTH === '75'}" />
        {#if $MENU_WIDTH === '75' && r.subRoutes}
          {#each r.subRoutes as s, j}
            <!-- Menu SubRoutes -->
            <MenuItem type="child" route="{s}" full="{$MENU_WIDTH === '75'}" />
          {/each}
        {/if}
      {/each}
    </div>
  {/each}
  {#if $MENU_WIDTH === '75'}
    <div
      class="flex flex-col items-center content-center pt-4 pb-8 mx-auto text-xs text-center text-cadetblue "
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
</div>
