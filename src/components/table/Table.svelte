<script>
  import TableRow from './TableRow.svelte';
  export let data = [];
  let th_class = `px-6 py-3 text-xs font-medium leading-4 tracking-wider 
  text-left text-gray-500 uppercase border-b border-comet bg-gray-50`;
</script>

<div class="flex flex-col">
  <div class="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
    <div
      class="inline-block min-w-full overflow-hidden align-middle border-b shadow border-comet sm:rounded-lg"
    >
      <table class="w-full divide-y table-auto divide-comet">
        <thead>
          <tr>
            <th class="{th_class}">Name</th>
            <th class="{th_class}">Payment Date</th>
            <th class="{th_class}">Amount</th>
            <th class="{th_class}" >Status</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-comet">
          {#each Array(10) as d, i}
            <TableRow item="{d}" {i}/>
          {:else}
            <p>No data available</p>
          {/each}

        </tbody>
      </table>
   </div>
  </div>
</div>
