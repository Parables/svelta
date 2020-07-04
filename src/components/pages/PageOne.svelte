<script lang="typescript">
  import { createEventDispatcher } from 'svelte';
  let dispatch = createEventDispatcher();
  import { APPBAR_POSITION } from '../../main_store';
  import FormBuilder from '../form_builder/FormBuilder.svelte';
  import { options } from './FormOne';
  let position;
  $: {
    APPBAR_POSITION.set(position);
  }
</script>

<slot>
  <!-- Some content start -->
  <div class="w-full px-6 py-4 rounded text-cadetblue bg-haiti ">
    <FormBuilder {options} />
  </div>
  <!-- Some content end -->
  <div class="w-full my-2 text-black bg-white rounded-md h-205">
    I'm a big useles card just taking up space
    <input type="radio" value="static" bind:group="{position}" id="static" />
    <label for="static">static</label>
    <input type="radio" value="sticky" bind:group="{position}" id="sticky" />
    <label for="sticky">sticky</label>
    <input type="radio" value="float" bind:group="{position}" id="float" />
    <label for="float">float</label>
  </div>
</slot>
