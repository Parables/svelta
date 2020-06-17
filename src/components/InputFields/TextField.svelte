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
  const dispatch = createEventDispatcher();
  let active = false;
  let defaultLabelStyle = `
top: 0.75em;
left: 0.75em;
transition: transform 0.25s, opacity 0.25s, padding 0.25s ease-in-out;
transform-origin: 0 0;`;

  let floatingStyle = `transform: translate(0, -2em) scale(0.9);`;

  let defaultLabelClass =
    ' text-gray-600 select-none   leading-none  absolute block p-6  m-0';
  let normalLabelClass = 'z-10 ';
  let floatingLabelClass = 'bg-transparent z-30  px-1 pt-3 pb-0 text-sm';

  let defaultInputClass = ` m-0 max-h-64 p-6  lg transition duration-300 ease-in-out overflow-visible block z-20 leading-none relative outline-none bg-white border border-solid rounded-md  `;

  export let id = '';
  export let name = '';
  export let placeholder = '';
  const tempHolder = placeholder;
  export let color = 'purple-500';
  export const inactiveColor = 'gray-400';
  export let label = '';
  export let value = '';
  export let wrapperClass = '';
  export let labelClass = '';
  export let inputClass = '';
  export let error = '';
  export let validators = [];
  export let callback = null;
  $: {
    if (!active) placeholder = label;
    else placeholder = tempHolder;
  }

  $: {
    /*  run validators*/
    validators.forEach(v => {
      console.log(v);
    });
  }
</script>

<div class="relative my-1 {wrapperClass}">
  <input
    {id}
    {name}
    {placeholder}
    bind:value
    on:blur="{() => {
      active = false;
      dispatch('blur', { active: active });
    }}"
    on:input="{() => {
      if (callback !== null) callback();
    }}"
    on:focus="{() => {
      active = true;
      dispatch('focus', { active: true });
    }}"
    class="{defaultInputClass}
    {active && value !== '' ? `text-${color}  border-${color} ` : `${value !== '' ? 'border-primary text-primary' : ' border-gray-400 text-gray-400'}`}
    {inputClass}
    "
    type="text"
  />
  <label
    for="field-1"
    class="select-none {defaultLabelClass}
    {active ? floatingLabelClass : normalLabelClass}
    {labelClass}
    "
    style="{defaultLabelStyle}
    {active ? floatingStyle : normalLabelClass}"
  >
    {active ? label : placeholder}
  </label>
  {#if error !== ''}
    <div class="block">
      <p class="py-1 text-xs text-center text-red-600 select-none ">{error}</p>
    </div>
  {/if}
</div>
