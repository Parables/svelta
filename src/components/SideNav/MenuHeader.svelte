<script>
  import { SVG } from '../../assets/svgs.ts';
  import { logo } from '../../assets/logo.ts';
  import { createEventDispatcher } from 'svelte';
  let dispatch = createEventDispatcher();
  export let open = false;
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
      <div
        class="px-2 text-lg font-semibold select-none font-mons text-cararra"
      >
        <slot name="logo-name">Idel-Sekondi</slot>
      </div>
      <div>
        <slot name="menu-toggle">
        <span class="hidden cursor-default lg:w-5 lg:h-5 lg:inline-flex"></span>
          <span
            class="cursor-pointer select-none lg:hidden"
            id="toggleMenu"
            on:click="{() => {
              open = false;
              dispatch('toggle', false);
            }}"
          >
            {@html SVG('close', 'stroke-current text-cararra w-5 h-5')}
          </span>
        </slot>
      </div>
    </div>
  </slot>
</div>
