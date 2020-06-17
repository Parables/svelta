<style>

</style>

<script>
  let active = false;
  let defaultLabelStyle = `
top: 0.75em;
left: 0.75em;
transition: transform 0.25s, opacity 0.25s, padding 0.25s ease-in-out;
transform-origin: 0 0;`;

  let floatingState = `
z-index: 2500;
transform: translate(0, -2em) scale(0.9);`;

  let defaultLabelClass =
    'bg-white text-gray-600 select-none   leading-none  absolute block p-6  m-0';
  let normalLabelClass = ' z-1500 bg-white ';
  let floatingLabelClass = 'z-2500  px-1 pt-3 pb-0 text-sm';

  let defaultInputClass = ` m-0 max-h-64 p-6  lg transition duration-300 ease-in-out overflow-visible block z-2000 leading-none relative outline-none bg-white border border-solid rounded-md  `;

  export let id = '';
  export let name = '';
  export let placeholder = '';
  const tempHolder = placeholder;
  export let color = 'primary';
  export let inactiveColor = 'gray-400';
  export let label = '';
  export let value = '';
  export let min = 0;
  export let max = 10000;
  export let step = 1;
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
    {min}
    {max}
    {step}
    {placeholder}
    bind:value
    on:blur="{() => (active = value !== '' || value > min ? false : true)}"
    on:input="{() => {
      if (callback !== null) callback();
    }}"
    class="
    {defaultInputClass} text-{inactiveColor} border-{inactiveColor} focus:text-{color}
    focus:border-{color}
    {inputClass}
    "
    on:focus="{() => (active = true)}"
    type="number"
  />
  <label
    for="field-1"
    class="{defaultLabelClass}
    {active ? floatingLabelClass : normalLabelClass}
    {labelClass}
    "
    style="{defaultLabelStyle}
    {active ? floatingState : normalLabelClass}"
  >
    {active ? label : placeholder}
  </label>
  {#if error !== ''}
    <div class="block">
      <p class="py-1 text-xs text-center text-red-600 ">{error}</p>
    </div>
  {/if}
</div>
