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

<script>
  import { createEventDispatcher } from 'svelte';
  let dispatch = createEventDispatcher();
  import { push, pop } from 'svelte-spa-router';
  import { fly, fade } from 'svelte/transition';
  import { TOGGLE_ICON, MARGIN_LEFT } from '../../main_store';
  import { SVG, icon_name } from '../../assets/svgs';
  import { FavIcon } from './icons';
  import Avartar from '../avartar/Avartar.svelte';
  export let search = '';
  export let currentUser = 'Emmanuel';
  export let status = 'Service';
  export let favoriteIcons = [
    // Array<FavIcon>
    {
      name: 'message',
      callback: () => {
        push('/books/id/false');
      }
    },
    { name: 'check_square' },
    {
      name: 'mail',
      callback: () => {
        push('/books/id/true');
      }
    },
    { name: 'star', classNames: 'text-warning focus:fill-current' }
  ];
  let searching = false;
</script>

<!-- App Bar -->
<div class="flex justify-between px-2 py-3">
  {#if searching}
    <div class="flex items-center w-full" in:fly="{{ x: 20, duration: 500 }}">
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
          class="flex-1 w-full h-10 bg-transparent border-0 outline-none text-cadetblue"
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
    </div>
  {:else}
    <div
      class="inline-flex items-center align-middle"
      in:fly="{{ x: -20, duration: 500 }}"
    >
      <span class="lg:hidden" on:click="{() => dispatch('toggle')}">
        {@html SVG('menu', 'text-cadetblue w-6 h-6 hover:text-primary')}
      </span>
      <span class="hidden lg:inline-flex">
        <slot name="favoriteIcons">
          {#each favoriteIcons as icon}
            <span on:click="{() => icon.callback()}">
              {@html SVG(icon.name, `text-cadetblue w-6 h-6 hover:text-primary ${icon.classNames}`)}
            </span>
          {/each}
        </slot>
      </span>

    </div>
    <div
      class="inline-flex items-center align-middle "
      in:fly="{{ x: 20, duration: 500 }}"
    >
      <span
        on:click="{() => {
          searching = true;
          dispatch('show');
        }}"
      >
        {@html SVG('search', 'text-cadetblue w-6 h-6 hover:text-primary ')}
      </span>
      <span class="hidden lg:block">
        {@html SVG('bell', 'text-cadetblue w-6 h-6 hover:text-primary ')}
      </span>
      <div class="flex-col hidden mx-2 lg:flex ">
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
      <Avartar />
    </div>
  {/if}
</div>
