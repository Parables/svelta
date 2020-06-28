<script>
  import { APP_WIDTH } from './main_store.ts';
  import SideNav from './components/side_nav/SideNav.svelte';
</script>

<svelte:window bind:outerWidth="{$APP_WIDTH}" />
<SideNav />
