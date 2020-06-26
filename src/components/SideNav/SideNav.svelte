<script>
  import AppBar from '../AppBar/AppBar.svelte';
  import MenuItem from './MenuItem.svelte';
  import MenuHeader from './MenuHeader.svelte';
  import MenuList from './/MenuList.svelte';
  import { SVG } from '../../assets/svgs.ts';
  import { logo } from '../../assets/logo.ts';
  import { Menu } from './menu.ts';
  import { MENU_WIDTH, MARGIN_LEFT, MINI_MENU } from '../../main_store.ts';
  let open = true;
  let hovering = false;
</script>

<div
  class="side-menu bg-haiti h-full flex flex-col w-{$MENU_WIDTH} fixed z-30 {open ? 'block shadow-2xl' : 'hidden'}
  lg:flex sm:block"
  on:mouseover="{e => {
    hovering = true;
    if ($MINI_MENU) MENU_WIDTH.set('75');
  }}"
>
  <slot name="menu-list">
    <MenuHeader on:toggle="{e => (open = e.detail)}" />
    <MenuList />
  </slot>
</div>
<slot name="overlay">
  <div
    class="fixed inset-0 z-20 bg-black lg:bg-opacity-0 bg-opacity-25 cursor-pointer overlay {open ? 'block' : 'hidden'}
    lg:{$MINI_MENU && hovering ? 'block' : 'hidden'} w-full max-h-full "
    on:click="{() => {
      open = !open;
      hovering = false;
      if ($MINI_MENU) MENU_WIDTH.set('20');
    }}"  on:mousemove="{() => {
      open = !open;
      hovering = false;
      if ($MINI_MENU) MENU_WIDTH.set('20');
    }}"
  ></div>
</slot>

<div class="px-4 pt-1 lg:px-6 main-content lg:ml-{$MARGIN_LEFT}">
  <slot name="app-bar">
    <AppBar on:toggle="{() => (open = !open)}" />
  </slot>

  <slot />
</div>
