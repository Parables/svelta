<style>

</style>

<script>
  import SideNav from './components/SideNav/SideNav.svelte';
  import { APP_WIDTH } from "./main_store.ts";
  $:{
    console.log ('width', $APP_WIDTH)
  }
</script>
<svelte:window bind:outerWidth={$APP_WIDTH}/>
<SideNav />
