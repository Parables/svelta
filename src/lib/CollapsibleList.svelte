 <script>
	  import ChipsInput from './ChipsInput.svelte';

 
  export let label = "Your Label"
  let expand = false;
</script>
			
<style>	
</style> 

 <div class="px-4 py-4 my-2 rounded-md border border-gray-400 { expand ?  'bg-white shadow-lg border-none': 'hover:bg-gray-100 ' } ">
      <div class="flex justify-between text-gray-600" on:click="{() => expand = !expand }">
        <p class="inline-flex py-2 pr-8 font-sans text-lg font-medium">{label}</p>
        <svg
          class="w-5 h-5 mt-1 fill-current"
          height="512pt"
          viewBox="0 0 512 512"
          width="512pt"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M256 512c-68.379 0-132.668-26.629-181.02-74.98C26.63 388.668 0
            324.379 0 256S26.629 123.332 74.98 74.98C123.332 26.63 187.621 0 256
            0s132.668 26.629 181.02 74.98C485.37 123.332 512 187.621 512
            256s-26.629 132.668-74.98 181.02C388.668 485.37 324.379 512 256
            512zm0-472C136.898 40 40 136.898 40 256s96.898 216 216 216
            216-96.898 216-216S375.102 40 256 40zm138.285 182L366 193.715l-110
            110-110-110L117.715 222 256 360.285zm0 0"
          ></path>
        </svg>
      </div>

      {#if expand }
        <div>
      <slot />
        </div>
      {/if}
    </div>