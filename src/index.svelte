<script>
  import { APP_WIDTH, CRUMBS, ACTIVE_PATH } from './main_store.ts';
  import SideNav from './components/side_nav/SideNav.svelte';
  import Router, {location, push, pop,replace} from 'svelte-spa-router';
  import { getRoutes } from './routes.ts';

getRoutes()

  function conditionsFailed(event) {
    console.error('Caught event conditionsFailed', event.detail);
    // Replace the route
    replace('/');
  }
  // Handles the "routeLoaded" event dispatched by the router after a route has been successfully loaded
  function routeLoaded(event) {
    console.info('Caught event routeLoaded', event.detail);
     ACTIVE_PATH.set(event.detail.location)
  }
  // Handles event bubbling up from nested routes
  function routeEvent(event) {
    console.info('Caught event routeEvent', event.detail);
  }
</script>

<svelte:window bind:outerWidth="{$APP_WIDTH}" />
<SideNav>
  <Router
    routes="{getRoutes()}"
    on:conditionsFailed="{conditionsFailed}"
    on:routeLoaded="{routeLoaded}"
    on:routeEvent="{routeEvent}"
  />
</SideNav>
