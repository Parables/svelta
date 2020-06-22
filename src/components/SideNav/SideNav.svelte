<script lang="typescript">
  import { Menu } from './menu';
</script>

<style>
.theme{
background-color:#252c49; 
}

</style>
<div class="flex">
  <div class="top-0 left-0 flex flex-col h-screen bg-blue-800">
    <div class="">
      <ul class="menu-heading">
        {#each Menu as m, mIndex}
          <li class="menu-routes">
            {m.heading}
            <ul>
              {#each Array(m.routes.length) as r, rIndex}
                <li class="menu-route">
                  {m.routes[rIndex].name}
                </li>
              {/each}
            </ul>
          </li>
        {/each}
      </ul>
    </div>
  </div>
  <div class="w-full overflow-y-auto theme">
  <div class="px-2 py-3 border border-gray-100 rounded-md theme">
  
  Main content
  </div>
  </div>
</div>
