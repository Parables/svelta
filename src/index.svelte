<script lang="ts">
import TextField from "./components/InputFields/TextField.svelte";


let value=""

</script>

<button class="px-4 py-2 m-8 bg-blue-400 rounded-md">Hello</button>

<div class="px-12">
<TextField id="firstName" name="firstName" label="First Name" bind:value  primaryColor= "green-500"   />
</div>
