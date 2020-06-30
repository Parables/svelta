<script>
export	let direction
export let callback
</script>

<div class="w-16 px-5 py-2" on:click={() => {if(callback) callback() } }>
{#if direction === "up"}
<svg  class="w-6 h-6 fill-current hover:text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path d="M128 48.907l-128 128 30.187 30.186L128 109.28l97.813 97.813L256 176.907z"/></svg>
{:else}
<svg class="w-6 h-6 fill-current hover:text-primary" xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 284.929 284.929"><path d="M282.082 89.644L149.028 222.689c-1.901 1.903-4.088 2.856-6.562 2.856s-4.665-.953-6.567-2.856L2.856 89.644C.95 87.738 0 85.551 0 83.076c0-2.474.953-4.664 2.856-6.566l14.272-14.271c1.903-1.903 4.093-2.854 6.567-2.854s4.664.951 6.567 2.854l112.204 112.202L254.674 62.232c1.902-1.903 4.093-2.848 6.563-2.848 2.478 0 4.668.951 6.57 2.848l14.274 14.277c1.902 1.902 2.847 4.093 2.847 6.566.001 2.476-.944 4.666-2.846 6.569z" data-original="#000000" class="prefix__active-path"/></svg>
{/if}
</div>