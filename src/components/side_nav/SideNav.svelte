<script>
  import AppBar from '../app_bar/AppBar.svelte';
  import MenuItem from './MenuItem.svelte';
  import MenuHeader from './MenuHeader.svelte';
  import MenuList from './MenuList.svelte';
  import { Menu } from './menu.ts';
  import { SVG } from '../../assets/svgs.ts';
  import { logo } from '../../assets/logo.ts';
  import {
    APP_WIDTH,
    MENU_WIDTH,
    MARGIN_LEFT,
    MINI_MENU
  } from '../../main_store.ts';
  import PageOne from '../pages/PageOne.svelte';
  export let open = true;
  export let position = 'static';

  let hovering = false;
  let height;
  let classNames;
  let marginTop;
  $: {
    classNames =
      position === 'static'
        ? 'px-3 lg:px-5 relative'
        : position === 'sticky'
        ? `fixed block inset-x-0 lg:ml-${$MARGIN_LEFT} bg-haiti px-2 lg:px-2 `
        : `fixed block inset-x-0  lg:ml-${$MARGIN_LEFT}  lg:left-5 bg-haiti mx-3 lg:mx-5 mt-3 rounded-md`;
  }
  $: {
    marginTop =
      position === 'static'
        ? ''
        : position === 'sticky'
        ? `mt-${height / 4 + 2}`
        : `mt-${height / 4 + 5}`;
  }
</script>

<div
  class="side-menu bg-haiti h-full flex flex-col w-{$MENU_WIDTH} fixed z-30 {open ? 'block shadow-2xl' : 'hidden lg:flex'}
  transition-all duration-300 ease-in-out "
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
    class="fixed inset-0 z-20 bg-black lg:bg-opacity-0 bg-opacity-25
    cursor-pointer overlay {open ? 'block' : 'hidden'} lg:{$MINI_MENU && hovering ? 'block' : 'hidden'}
    w-full max-h-full transition-all duration-300 ease-in-out"
    on:click="{() => {
      open = !open;
      hovering = false;
      if ($MINI_MENU) MENU_WIDTH.set('20');
    }}"
    on:mousemove="{() => {
      open = !open;
      hovering = false;
      if ($MINI_MENU) MENU_WIDTH.set('20');
    }}"
  ></div>
</slot>

<div
  class=" relative flex flex-col main-content lg:ml-{$MARGIN_LEFT}
  transition-all duration-300 ease-in-out"
>
  <slot>
    <div bind:clientHeight="{height}" class="{classNames}  transition-all duration-300 ease-in-out ">
      <slot name="app-bar">
        <AppBar on:toggle="{() => (open = !open)}" />
      </slot>
    </div>

    <div class="px-4 lg:px-6 {marginTop}  transition-all duration-300 ease-in-out ">
      <slot name="content">
        <PageOne on:positionChanged="{e => (position = e.detail)}" />
      </slot>
    </div>

  </slot>
</div>
