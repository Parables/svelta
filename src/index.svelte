<style>

</style>

<script>
  import SideNav from './components/SideNav/SideNav.svelte';
  import { APP_WIDTH } from "./main_store.ts";
</script>
<svelte:window bind:outerWidth={$APP_WIDTH}/>
<SideNav />
