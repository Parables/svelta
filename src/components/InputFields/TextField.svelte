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

  input:focus {
    border-width: 2px;
  }
</style>

<script lang="typescript">
  import { createEventDispatcher, onMount } from 'svelte';
  const dispatch = createEventDispatcher();
  let active = false;
  let float = false;

  // default classes
  export let id = '';
  export let name = '';
  export let label = '';
  export let value = '';
  export let leadingIcon = true;
  export let trailingIcon = false ;
  export let wrapperClass = '';
  export let labelClass = '';
  export let inputClass = '';
  export let error = '';
  export let validators = [];
  export let onChange = null;
  export let onFocus = null;
  export let onBlur = null;
  export let primaryColor = 'purple-500';
  export let labelBg = 'bg-white';
  export let labelColor = `text-${primaryColor}`;
  export let inactiveColor = 'gray-500';

  $: {
    /*  run validators*/
    validators.forEach(v => {
      console.log(v);
    });
  }
</script>

<div class="relative inline-block {wrapperClass}">
{#if leadingIcon}
  <span class="absolute z-20 text-green-400 select-none top-3 left-2">
    <slot name="leadingIcon">
      <!--Add your icon here <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="stroke-current feather feather-alert-triangle"
      >
        <path
          d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71
          3.86a2 2 0 0 0-3.42 0z"
        ></path>
        <line x1="12" y1="9" x2="12" y2="13"></line>
        <line x1="12" y1="17" x2="12.01" y2="17"></line>
      </svg> --> 
    </slot>
  </span>
  {/if}
  <input
    {id}
    {name}
    bind:value
    on:blur="{() => {
      active = false;
      float = value !== '';
      dispatch('blur');
      if (onBlur) onBlur();
    }}"
    on:input="{() => {
      dispatch('change');
      if (onChange) onChange();
    }}"
    on:focus="{() => {
      active = true;
      float = true;
      dispatch('focus');
      if (onFocus) onFocus();
    }}"
    type="text"
    class="relative z-10 block py-6 {leadingIcon? 'pl-10':'px-4' } {trailingIcon? 'pr-10':'px-4' } m-0 w-auto leading-none transition
    duration-300 ease-in-out bg-transparent border border-solid text-{inactiveColor}
    border-{inactiveColor} focus:text-{primaryColor} focus:border-{primaryColor}
    rounded-md outline-none h-4 {inputClass}"
  />
  <label
    for="{id}"
    class="select-none z-20 text-gray-600 leading-none align-baseline absolute
    top-2 {leadingIcon? 'left-8':'left-2' } inline-block w-auto m-0 p-2 origin-center transition
    duration-300 {float ? `transform translate-x-0 -translate-y-4 py-0 scale-90 z-30 top-2 ` : ''}
    {active ? labelColor : 'text-gray-400 '}
    {float ? labelBg : ''}
    {labelClass}
    "
  >
    {label}
  </label>
  {#if trailingIcon}
  <span class="absolute z-20 select-none top-3 right-2 ">
    <slot name="trailingIcon">
      <!--   Add your icon here <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="stroke-current feather feather-alert-triangle"
      >
        <path
          d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71
          3.86a2 2 0 0 0-3.42 0z"
        ></path>
        <line x1="12" y1="9" x2="12" y2="13"></line>
        <line x1="12" y1="17" x2="12.01" y2="17"></line>
      </svg> -->
    </slot>
  </span>
  {/if}
  {#if error !== ''}
    <div class="block">
      <p class="px-3 py-1 text-xs text-red-600 select-none ">{error}</p>
    </div>
  {/if}
</div>
