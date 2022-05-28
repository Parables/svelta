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

<slot>
  <div
    class="flex items-center justify-between pt-3 pb-1 cursor-pointer select-none menu-header"
    on:click="{() => {}}"
  >
    <slot name="logo">
      <span class="logo">
        {@html logo}
      </span>
    </slot>
    {#if $MENU_WIDTH === '70'}
      <span
        class="px-2 text-lg font-semibold select-none logo-name font-mons text-cararra"
      >
        <slot name="logo-name">Idel-Sekondi</slot>
      </span>
      <slot name="menu-toggle ">
        <span
          class="mr-3 cursor-pointer select-none menu-toggle"
          on:click="{() => {
            if ($APP_WIDTH >= 1024) {
              if ($MARGIN_LEFT === '70') {
                MARGIN_LEFT.set('20');
                MINI_MENU.set(true);
              } else {
                MARGIN_LEFT.set('70');
                MINI_MENU.set(false);
              }
            } else {
              MENU_WIDTH.set('70');
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
    {/if}
  </div>
</slot>
