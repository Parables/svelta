<style>
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus {
    border: 1px solid #5a67d8;
    -webkit-text-fill-color: #5a67d8;
    -webkit-box-shadow: 0 0 0px 1000px white inset;
    box-shadow: 0 0 0px 1000px white inset;
    transition: background-color 5000s ease-in-out 0s;
  }
</style>

<script lang="typescript">
  import { createEventDispatcher } from 'svelte';
  let dispatch = createEventDispatcher();
  import { SVG, icon_name } from '../../assets/svgs';
  import { FavIcon } from './icons';
  export let search = '';
  export let currentUser = 'Emmanuel Botchey';
  export let status = 'Service';
  export let favoriteIcons: Array<FavIcon> = [
    { name: 'message' },
    { name: 'check_square' },
    {
      name: 'mail',
      callback: () => {
        console.log('checking mail');
      }
    },
    { name: 'star', classNames: 'text-warning focus:fill-current' }
  ];
  let searching = false;
</script>

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
        on:input="{() => dispatch('search')}"
        on:focus="{() => dispatch('focus')}"
      />
    </div>
    <div>
      <span
        class="inline"
        on:click="{() => {
          searching = false;
          dispatch('dismiss');
        }}"
      >
        {@html SVG('close', 'text-cadetblue w-6 h-6 hover:text-primary')}
      </span>
    </div>
  {:else}
    <div class="inline-flex items-center align-middle">
      <span on:click="{() => dispatch('toggle')}">
        {@html SVG('menu', 'text-cadetblue w-6 h-6 hover:text-primary')}
      </span>
      <slot name="favoriteIcons">
        {#each favoriteIcons as icon}
          <span on:click="{() => icon.callback()}">
            {@html SVG(icon.name, `text-cadetblue w-6 h-6 hover:text-primary ${icon.classNames}`)}
          </span>
        {/each}
      </slot>

    </div>
    <div class="inline-flex items-center align-middle ">
      <span
        on:click="{() => {
          searching = true;
          dispatch('show');
        }}"
      >
        {@html SVG('search', 'text-cadetblue w-6 h-6 hover:text-primary ')}
      </span>
      {@html SVG('bell', 'text-cadetblue w-6 h-6 hover:text-primary ')}
      <div class="flex flex-col mx-2">
        <span
          class="text-sm font-semibold leading-5 select-none text-cadetblue"
        >
          {currentUser}
        </span>
        <span
          class="text-xs font-normal leading-3 tracking-tighter text-right select-none text-cadetblue"
        >
          {status}
        </span>
      </div>
    </div>
  {/if}
</div>
