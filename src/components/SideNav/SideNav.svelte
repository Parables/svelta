<script>
  import AppBar from '../AppBar/AppBar.svelte';
  import MenuItem from './MenuItem.svelte';
  import MenuHeader from './MenuHeader.svelte';
  import MenuList from './/MenuList.svelte';
  import { SVG } from '../../assets/svgs.ts';
  import { logo } from '../../assets/logo.ts';
  import { Menu } from './menu.ts';
  let open = true;
</script>

<div
  class="side-menu bg-haiti h-full flex flex-col w-75 fixed z-30 {open ? 'block' : 'hidden'}
  lg:flex"
>
<slot name="menu-list">
  <MenuHeader on:toggle="{e => (open = e.detail)}" />
  <MenuList />
</slot>
</div>
<slot name="overlay">
<div
  class="fixed inset-0 z-20 bg-black bg-opacity-25 cursor-pointer overlay {open ? 'block' : 'hidden'}
  lg:hidden max-w-screen-sm max-h-full "
  on:click="{() => (open = !open)}"
></div>
</slot>

<div class="px-4 pt-1 lg:px-6 main-content lg:ml-75">
  <slot name="app-bar">
  <AppBar on:toggle="{() => (open = !open)}" />
  </slot>

  <slot></slot>
</div>
