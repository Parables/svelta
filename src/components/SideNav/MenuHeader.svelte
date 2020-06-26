<script>
  import { SVG } from '../../assets/svgs.ts';
  import { logo } from '../../assets/logo.ts';
  import {
    APP_WIDTH,
    TOGGLE_ICON,
    MENU_WIDTH,
    MARGIN_LEFT,
    MINI_MENU
  } from '../../main_store.ts';
  import { createEventDispatcher } from 'svelte';
  let dispatch = createEventDispatcher();
  export let open = false;
  $: {
    if ($APP_WIDTH >= 1024)
      if ($MINI_MENU) TOGGLE_ICON.set('circle');
      else TOGGLE_ICON.set('disc');
    else TOGGLE_ICON.set('close');
  }
</script>

<div class="pt-10 pb-4 px4">
  <slot name="header">
    <div
      class="flex items-center justify-between pr-4 cursor-pointer"
      on:click="{() => {}}"
    >
      <slot name="logo">
        <span>
          {@html logo}
        </span>
      </slot>
      {#if $MENU_WIDTH === '75'}
        <div
          class="px-2 text-lg font-semibold select-none font-mons text-cararra"
        >
          <slot name="logo-name">Idel-Sekondi</slot>
        </div>
        <div>
          <slot name="menu-toggle">
            <span
              class="cursor-pointer select-none "
              id="toggleMenu"
              on:click="{() => {
                if ($APP_WIDTH >= 1024) {
                  if ($MARGIN_LEFT === '75') {
                    MARGIN_LEFT.set('20');
                    MINI_MENU.set(true);
                  } else {
                    MARGIN_LEFT.set('75');
                    MINI_MENU.set(false);
                  }
                } else {
                  MENU_WIDTH.set('75');
                  MARGIN_LEFT.set('20');
                  MINI_MENU.set(false);
                  open = false;
                  dispatch('toggle', false);
                }
              }}"
            >
              {@html SVG($TOGGLE_ICON, 'stroke-current hover:text-primary text-cararra w-5 h-5')}
            </span>
          </slot>
        </div>
      {/if}
    </div>
  </slot>
</div>
