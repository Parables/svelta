<style>
  .cell {
    display: inline-block;
    text-align: center;
    vertical-align: middle;
  }

 
</style>

<script>
import { createEventDispatcher } from "svelte";
let dispatch=createEventDispatcher()
  export let disable = false;
  export let date =null
  export let text=null
  export let display = "months"
  export let index = 0


let isSelected = false


function handleMousedown(e){
  isSelected=!isSelected
 if(display==='days') dispatch('dateselected', {date, isSelected})
 if(display==='months') dispatch('monthSelected', {index})
}


</script>

<div id="cell{index}"
style="{display==='months'? 'width: 70px; height: 70px; line-height: 70px; ': 'width: 40px; height: 40px; line-height: 40px;'}"
  class="cell {disable ? 
    'text-cadetblue bg-transparent hover:bg-transparent pointer-events-none cursor-not-allowed' : 
    'cursor-pointer  rounded-full hover:bg-cadetblue border border-transparent '} {isSelected? 'bg-haiti hover:bg-haiti':''}"
    on:mousedown="{handleMousedown}"
 >
  {text}
</div>
