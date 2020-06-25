<script>
  import { logo } from '../../assets/logo.ts';
  import { Menu } from './menu';
  import { SVG, icon_name } from '../../assets/svgs.ts';

  let pinned = true;
  let hovering = false;
  let w = 'w-68';
  let search = '';
  let searching = false;

  $: {
    if (pinned || hovering) w = 'w-68';
    else w = 'w-20';
  }
</script>

<!-- Side Menu -->
<div
  class="absolute top-0 left-0 flex flex-col h-screen bg-haiti {w}
  "
  on:mouseover="{() => (hovering = true)}"
  on:mouseout="{() => (hovering = false)}"
>
  <div class="pt-8 pb-4 px4">
    <slot name="header">
      <div class="flex items-center justify-between pr-4 cursor-pointer">
        <span>
          {@html logo}
        </span>
        {#if w === 'w-68'}
          <div class="px-2 text-lg font-semibold font-mons text-cararra">
            Idel-Sekondi
          </div>
          <div>
            <span
              class="relative cursor-pointer select-none feather-icon"
              id="toggleMenu"
              on:click="{() => (pinned = !pinned)}"
            >
              {@html SVG('disc', 'stroke-current text-cararra w-5 h-5')}
            </span>
          </div>
        {/if}
      </div>
    </slot>
  </div>

  <div class="overflow-y-auto">
    {#each Menu as g, i}
      {#if w === 'w-68'}
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
          <div
            class="flex align-middle justify-between py-2 mb-2 cursor-pointer
            outline-none select-none {r.subRoutes ? 'px-2 py-2 ml-2 mr-4 rounded-md bg-comet' : 'ml-4'}"
          >

            <div>
              <span>
                {@html SVG(r.icon, 'text-cadetblue inline-flex w-5 h-5 ')}
              </span>
              {#if w === 'w-68'}
                <span
                  class="pl-2 text-base font-normal leading-3 text-cadetblue"
                >
                  {r.name}
                </span>
              {/if}
            </div>

            {#if w === 'w-68' && r.subRoutes}
              <div class="">
                <span>
                  {@html SVG('chevron_right', 'text-cadetblue inline-flex w-5 h-5 ')}
                </span>
              </div>
            {/if}
          </div>
          {#if w === 'w-68' && r.subRoutes}
            {#each r.subRoutes as s, j}
              <div class="menu-sub-items">
                <div
                  class="flex align-middle py-2 mb-2 cursor-pointer outline-none
                  select-none {s.name === 'All Books' ? 'px-2 py-2 ml-2 mr-4  rounded-md bg-primary' : 'ml-4'}"
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
    {/each}

  </div>

</div>

<div class="px-6 bg-transparent {w === 'w-68' ? 'ml-68' : 'ml-20'}">
  <!-- App Bar -->
  <div class="flex justify-between p-4 mt-4 rounded-md border-primary bg-haiti">
    {#if searching}
      <div class="flex items-center flex-1 ">
        <span class="inline">
          {@html SVG('search', 'text-cadetblue w-6 h-6  ')}
        </span>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search for..."
          bind:value="{search}"
          class="flex-1 w-full h-8 bg-transparent border-0 outline-none text-cadetblue"
        />
      </div>
      <div>
        <span class="inline" on:click="{() => (searching = false)}">
          {@html SVG('close', 'text-cadetblue w-6 h-6 hover:text-primary')}
        </span>
      </div>
    {:else}
      <div class="inline-flex items-center align-middle">
        {@html SVG('message', 'text-cadetblue w-6 h-6 hover:text-primary ')}
        {@html SVG('check_square', 'text-cadetblue w-6 h-6 hover:text-primary ')}
        {@html SVG('mail', 'text-cadetblue w-6 h-6 hover:text-primary ')}
        {@html SVG('star', 'text-warning w-6 h-6 focus:fill-current')}
      </div>
      <div class="inline-flex items-center align-middle ">
        <span on:click="{() => (searching = true)}">
          {@html SVG('search', 'text-cadetblue w-6 h-6 hover:text-primary ')}
        </span>
        {@html SVG('bell', 'text-cadetblue w-6 h-6 hover:text-primary ')}
        <div class="flex flex-col mx-2">
          <span
            class="text-sm font-semibold leading-5 select-none text-cadetblue"
          >
            Timothy Oyewu
          </span>
          <span
            class="text-xs font-normal leading-3 tracking-tighter text-right select-none text-cadetblue"
          >
            Coordinator
          </span>
        </div>
      </div>
    {/if}
  </div>
</div>
