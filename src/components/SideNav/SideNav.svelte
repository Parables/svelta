<script>
  import { logo } from '../../assets/logo.ts';
  import { Menu } from './menu';
  import { SVG, icon_name } from '../../assets/svgs.ts';
</script>

<!-- Side Menu -->
<div class="absolute top-0 left-0 flex flex-col h-screen w-68 bg-haiti">
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
            {@html SVG('disc', 'stroke-current text-cararra w-5 h-5')}
          </span>
        </div>
      </div>
    </slot>
  </div>

  <div class="overflow-y-auto">
    {#each Menu as g, i}
      <div class=" menu-group text-cadetblue">
        <span
          class="block mt-8 mb-3 ml-6 text-xs font-medium leading-5 uppercase select-none"
        >
          {g.group}
        </span>
        <div class="menu-items">
          {#each g.routes as r, i}
            <div
              class="flex align-middle justify-between py-2 mb-2 cursor-pointer outline-none select-none {r.subRoutes ? 'px-2 py-2 ml-2 mr-4 rounded-md bg-comet' : 'ml-4'}"
            >

              <div>
                <span>
                  {@html SVG(r.icon, 'text-cadetblue inline-flex w-5 h-5 ')}
                </span>
                <span
                  class="pl-2 text-base font-normal leading-3 text-cadetblue"
                >
                  {r.name}
                </span>
              </div>
              {#if r.subRoutes}
                <div>
                  <span>
                    {@html SVG('chevron_right', 'text-cadetblue inline-flex w-5 h-5 ')}
                  </span>
                </div>
              {/if}
            </div>
            {@debug r}
            {#if r.subRoutes}
              {#each r.subRoutes as s, j}
                <div class="menu-sub-items">
                  <div
                    class="flex align-middle py-2 mb-2 cursor-pointer outline-none select-none  {s.name === 'All Books' ? 'px-2 py-2 ml-2 mr-4  rounded-md bg-primary' : 'ml-4'}"
                  >

                    <div>
                      <span>
                        {@html SVG('circle', 'text-cadetblue inline-flex w-3 h-3 ml-3 ')}
                      </span>
                      <span
                        class="pl-3 text-base font-normal leading-3 text-cadetblue"
                      >
                        {s.name}
                      </span>
                    </div>
                  </div>

                </div>
              {/each}
            {/if}
          {/each}
        </div>
      </div>
    {/each}

  </div>

</div>

<div class="px-10 bg-transparent ml-68 ">
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
