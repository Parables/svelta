<script>
  import { createEventDispatcher } from 'svelte';
  let dispatch = createEventDispatcher();
  import { APPBAR_POSITION } from '../../main_store.ts';
import TextField from '../input_field/TextField.svelte';
  let position;
  $: {
    APPBAR_POSITION.set(position);
  }
</script>

<slot>
  <!-- Some content start -->
  <div class="w-full my-2 text-black bg-white rounded-md h-205">
    I'm a big useles card just taking up space
    <input type="radio" value="static" bind:group="{position}" id="static" />
    <label for="static">static</label>
    <input type="radio" value="sticky" bind:group="{position}" id="sticky" />
    <label for="sticky">sticky</label>
    <input type="radio" value="float" bind:group="{position}" id="float" />
    <label for="float">float</label>
  </div>
  <div class="flex flex-col w-full p-8 mt-20 text-black bg-white rounded-md h-205">
    I'm a big useles card just taking up space
    <input type="radio" value="static" bind:group="{position}" id="static" />
    <label for="static">static</label>
    <input type="radio" value="sticky" bind:group="{position}" id="sticky" />
    <label for="sticky">sticky</label>
    <input type="radio" value="float" bind:group="{position}" id="float" />
    <label for="float">float</label>

    <TextField id="surname" name="surname" label= "Surname" wrapperClass="my-4" inputClass="text-green-600"/>
  </div>
  <!-- Some content end -->
</slot>
