<script lang="typescript">
  import { FormOption } from './form_options';
  import { writable } from 'svelte/store';
import TextField from '../input_field/TextField.svelte';
import AppBar from '../app_bar/AppBar.svelte';
import Breadcrumb from '../breadcrumb/Breadcrumb.svelte';
  export let options: FormOption;

  $: {
    console.log('FormOptions', options);
  }
</script>
<div class="flex flex-col w-full px-10p">
{#each options.sections as section}
<p>{section.title}</p>
<div class="inline-flex justify-between w-80p">
{#each section.fields as f}
{#if f.type==='text'}
<TextField {...f}/>
{/if}
{/each}
</div>
{/each}
</div>
