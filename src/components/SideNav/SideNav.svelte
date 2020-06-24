<script>
  import { logo } from '../../assets/logo.ts';
  import { Menu } from './menu';
  import { SVG, icon_name } from '../../assets/svgs.ts';
</script>

<!-- Side Menu -->
<div class="absolute top-0 left-0 flex flex-col w-64 h-screen bg-haiti">
  <div class="py-8 px4">
    <slot name="header">
      <div class="flex items-center justify-between pr-4 cursor-pointer">
        <span>
          {@html logo}
        </span>
        <div class="px-2 text-lg font-semibold font-mons text-cararra">
          Idel-Sekondi
        </div>
        <div>
          <span
            class="relative cursor-pointer select-none feather-icon"
            id="toggleMenu"
          >
            {@html SVG('disc', 'stroke-current text-primary w-5 h-5')}
          </span>
        </div>
      </div>
    </slot>
  </div>

  {#each Menu as g, i}
    <div class="menu-group">
      {g.group}
      <div class="menu-items">
        <div class="menu-sub-items"></div>
      </div>
    </div>
  {/each}

</div>

<div class="px-10 ml-64 bg-transparent ">
  <div class="">
    <div class="justify-between px-2 py-3 rounded-md border-primary bg-haiti">
      <div class="flex align-middle inlne">
        {@html SVG('bell', 'text-cadetblue')}
        {@html SVG('check_square', 'text-cadetblue')}
        {@html SVG('check_square', 'text-cadetblue')}
        {@html SVG('check_square', 'text-cadetblue')}
      </div>
    </div>
  </div>
</div>
