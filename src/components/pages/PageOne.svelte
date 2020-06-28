<script>
  import { createEventDispatcher } from 'svelte';
  let dispatch = createEventDispatcher();
  let position;
  $: {
    dispatch('positionChanged', position);
  }
</script>

<slot>
  <!-- Some content start -->
  <div class="w-full my-2 text-black bg-white rounded-md shadow-md h-205">
    I'm a big useles card just taking up space
    <input type="radio" value="static" bind:group="{position}" id="static" />
    <label for="static">static</label>
    <input type="radio" value="sticky" bind:group="{position}" id="sticky" />
    <label for="sticky">sticky</label>
    <input type="radio" value="float" bind:group="{position}" id="float" />
    <label for="float">float</label>
  </div>
  <div class="w-full mt-20 text-black bg-white rounded-md shadow-md h-205">
    I'm a big useles card just taking up space
    <input type="radio" value="static" bind:group="{position}" id="static" />
    <label for="static">static</label>
    <input type="radio" value="sticky" bind:group="{position}" id="sticky" />
    <label for="sticky">sticky</label>
    <input type="radio" value="float" bind:group="{position}" id="float" />
    <label for="float">float</label>
  </div>
  <!-- Some content end -->
</slot>
