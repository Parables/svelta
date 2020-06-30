 <script>
     export let value
     export let visible = true
     export let callback
     export let isValueTile = false
     export let valueTileClass = "text-primary font-semibold text-lg"
     export let selectTileClass = "hover:text-primary text-base"
 </script>


 <div class="w-16 py-2 " on:click={()=> {if(callback) callback()} }>
     <p class="font-sans  text-center select-none  align-middle   { isValueTile?  valueTileClass : selectTileClass} {visible? '': 'invisible'}">
         {value} </p>
 </div>