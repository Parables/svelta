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
  import DatePicker from './DatePicker.svelte'
  import moment from 'moment'
import { createEventDispatcher } from 'svelte';

const dispatch = createEventDispatcher();
  let active = false;
  let dv = Number.parseInt(moment().format("DD"));
  let mv = Number.parseInt(moment().format("MM"))
  let yv = Number.parseInt(moment().format("YYYY"))
  let hovering = false

  let defaultLabelStyle = `
top: 0.75em;
left: 0.75em;
transition: transform 0.25s, opacity 0.25s, padding 0.25s ease-in-out;
transform-origin: 0 0;`;

  let floatingState = `
z-index: 2500;
transform: translate(0, -2em) scale(0.9);`;

  let defaultLabelClass =
    'bg-white text-gray-600 select-none   leading-none  absolute block p-6 w-auto m-0';
  let normalLabelClass = ' z-1500 bg-white ';
  let floatingLabelClass = 'z-2500  px-1 pt-3 pb-0 text-sm';

  let defaultInputClass = ` m-0 max-h-64 p-6  lg transition duration-300 ease-in-out overflow-visible block z-2000 leading-none relative outline-none bg-white border border-solid rounded-md  `;

  export let id = '';
  export let name = '';
  export let label = '';
  export let placeholder = '';
  export let dateFormat = 'dddd, MMMM Do YYYY';
   export   let value = moment(`${dv}-${mv}-${yv}`, "DD-MM-YYYY").format(dateFormat)
 const tempHolder = placeholder;
  export let color = 'primary';
  export const inactiveColor = 'gray-400';
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
      active  = active && hovering 
      dispatch('blur', {active: active})}}"
    on:input="{() => {
      if (callback !== null) callback();
    }}"
    on:focus={() => {active = true; dispatch('focus', {active: true}) }}
    class="{defaultInputClass}     {active && value !== '' ? `text-${color}  border-${color} `   :  `${value !== '' ?  'border-primary text-primary' : ' border-gray-400 text-gray-400'}`}   {inputClass}  "
	type="text"
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

  {#if active || hovering }
<div class="absolute top-0 mt-19 z-2500">
  <DatePicker {dateFormat}  on:hovering={(event) => hovering = event.detail.hovering } 
  on:mouse-leave={(event) => hovering = !event.detail.leave}
  on:date-selected= {(event)  => {
    active = false
    value = event.detail.date} }/>
</div>
{/if}



</div>