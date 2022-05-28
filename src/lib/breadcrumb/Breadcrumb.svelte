<script>
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import { location, push, pop } from 'svelte-spa-router';
  import { SVG } from '../../assets/svgs.ts';
  import { CRUMBS } from '../../main_store.ts';
  export let getCrumbs;
  export let paths = [];

  function titleCase(str) {
    if (str !== '')
      return str
        .toLowerCase()
        .split(' ')
        .map(function(word) {
          return word.replace(word[0], word[0].toUpperCase());
        })
        .join(' ');
  }

  function getPaths() {
    try {
      return $CRUMBS[$location].split('/');
    } catch (e) {
      let a = $location.split('/');
      if ($location !== '/' && a.length > 2) {
        let b = a
          .slice(0, a.length - 2)
          .join('/')
          .toLowerCase();
        let c = $CRUMBS[`${b}/params`].split('/');
        let d = c.slice(-1)[0].split(',');
        if ($location.search('false') === -1 && $location.search('true') === -1)
          return `${b}/${d[2]}`.split('/');
        else if ($location.search('false') > -1)
          return `${b}/${d[1]}`.split('/');
        else if ($location.search('true') > -1)
          return `${b}/${d[0]}`.split('/');
      }
    }
  }

  $: {
    console.log($CRUMBS[$location]);
    paths = getCrumbs ? getCrumbs() : getPaths();
  }

  function jumpTo(index) {
    let path = '';
    if (index === 0) path = '/';
    else
      for (let i = 0; i < index; i++) {
        path += '/' + paths[i + 1];
      }
    push(path);
  }
</script>

{#if paths.length === 0}
  {@html SVG('home', 'w-5 h-5 py-3 cursor-pointer inline-flex text-primary')}
{:else}
  <div class="flex py-3 align-middle">
    <slot name="current-route">
      <h2
        class="inline-flex p-0 px-2 mr-2 text-xl font-normal leading-6 border border-t-0 border-b-0 border-l-0 border-r-0 select-none lg:border-r text-cararra border-cararra "
      >
        {paths[paths.length - 1]}
      </h2>
    </slot>
    <div transition:fade class="items-center justify-start hidden md:flex">
      {#each paths as p, i}
        {#if i === 0}
          <slot name="home-icon">
            <span
              on:click="{() => {
                jumpTo(0);
              }}"
            >
              {@html SVG('home', 'w-5 h-5 cursor-pointer inline-flex text-primary')}
            </span>
          </slot>
        {/if}

        {#if i > 0 && i < paths.length}
          <slot name="separator">
            {@html SVG('chevrons_right', 'w-4 h-4 inline-flex text-cararra  cursor-default')}
          </slot>
        {/if}
        <slot name="crumbs">
          <span
            transition:fade
            on:click="{() => {
              if (i !== paths.length - 1) jumpTo(i);
            }}"
            class="text-sm text px-1 select-none {i < paths.length - 1 ? 'text-primary cursor-pointer' : 'text-cararra cursor-default'}"
          >
            {#if p !== ''}{titleCase(p)}{/if}
          </span>
        </slot>
      {/each}
    </div>
  </div>
{/if}
