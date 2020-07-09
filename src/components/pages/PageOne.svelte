<script lang="typescript">
  import { createEventDispatcher } from 'svelte';
  let dispatch = createEventDispatcher();
  import { APPBAR_POSITION } from '../../main_store';
  import FormBuilder from '../form_builder/FormBuilder.svelte';
  import ToggleSwitch from '../toggle_switch/ToggleSwitch.svelte';
  import RadioButton from '../radio_button/RadioButton.svelte'
  import Chip from '../chip_input/Chip.svelte'
  import ChipsInput from '../chip_input/ChipsInput.svelte'
  import ChipInput from '../chip_input/ChipInput.svelte'
  import TestLabel from '../chip_input/TestLabel.svelte'
  import { options } from './FormOne';
  let position;
  $: {
    APPBAR_POSITION.set(position);
  }
  let data;
  let value
  $: {
    console.log('form data', data, value);
  }
</script>

<slot>
  <!-- Some content start -->
  <div class="w-full px-6 py-4 rounded text-cadetblue bg-haiti ">
    <FormBuilder {options} bind:data />
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
    <div class="p-12 m-12">
      <div class="m-10 ">
      <ToggleSwitch on:click="{(e)=> console.log('toggle is clciked', e)}" />
        <RadioButton bind:value on:click="{(e)=> console.log('toggle is clciked', e)}"/>
      </div>
      <Chip/>
      <Chip>Some Text</Chip>
      <ChipInput id="test" name="label" label="Chip Input" />
      <ChipsInput id="tests" name="label" label="Chip Input" />

      <div class="my-4">
<TestLabel />
      </div>
    </div>
  </div>
</slot>
