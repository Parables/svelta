<script>
  import Cell from './Cell.svelte';
  import { createEventDispatcher } from 'svelte';
  import { fly } from 'svelte/transition';
  import { days, months } from '../input_field/DateFormatter';
  import { SVG } from '../../assets/svgs';
  let dispatch = createEventDispatcher();

  let month = new Date().getMonth(),
    year = new Date().getFullYear(),
    firstDay,
    lastDay,
    firstDayOfNextMonth,
    lastDayOfLastMonth,
    daysBeforeThisMonth,
    daysAfterThisMonth,
    lastCount,
    today,
    sumOfDays,
    display = 'days',
    deltaMonth = month,
    flyX = 20;

  $: {
    firstDay = new Date(year, month).getDay();
    lastDay = 32 - new Date(year, month, 32).getDate();
    firstDayOfNextMonth = new Date(year, month + 1).getDay();
    lastDayOfLastMonth = 32 - new Date(year, month - 1, 32).getDate();
    daysBeforeThisMonth = lastDayOfLastMonth - firstDay;
    daysAfterThisMonth = 7 - firstDayOfNextMonth;

    lastCount = lastDayOfLastMonth - daysBeforeThisMonth;
    today = new Date().getDate();
    sumOfDays =
      lastDayOfLastMonth - daysBeforeThisMonth + lastDay + daysAfterThisMonth;
    if (deltaMonth < month) flyX *= -1;
    else flyX *= 1;
    deltaMonth = month;
  }

  function getValue(i) {
    let dd, mm;
    if (i < lastCount) {
      dd = daysBeforeThisMonth + i + 1; // i+1 because index=0
      mm = month;
    } else if (i >= lastCount && i < lastDay + lastCount) {
      dd = 1 + (i - lastCount); // (i-lastCount) resets the index to 0
      mm = month + 1;
    } else {
      dd = i - lastCount - lastDay + 1; //  (i - lastDay - lastCount) resets the index to 0 again
      mm = month + 2;
    }
    return {
      text: dd,
      date: `${dd}/${mm}/${year}`,
    };
  }

  function isDisabled(i) {
    if (i >= lastCount && i < lastDay + lastCount) return false;
    return true;
  }
</script>

<!-- mx-auto:center, ml-auto:right, mr-auto:left -->
<div style="max-width: 280px; min-width: 280px" class="pt-2 mx-auto calender">
  {#if display === 'days'}
    <!-- Select Month and Year -->
    <div class="block w-full">
      <div class="inline-flex justify-between w-full px-2">
        <div>
          <span
            on:click|stopPropagation|preventDefault="{() => (display = 'months')}"
          >
            {months[month].l}
          </span>
          <span>{year}</span>
        </div>
        <div class="inline-flex">
          <span>
            {@html SVG('chevron_right', 'transform rotate-180 mx-0')}
          </span>
          <span>
            {@html SVG('chevron_right', 'mx-0')}
          </span>
        </div>
      </div>
    </div>

    <!-- Days in the Week -->
    <div class="block w-full">
      <div class="inline-flex flex-wrap">
        {#each days as day}
          <Cell disable="true" {display} text="{day.s}" />
        {/each}
      </div>
    </div>

    <!-- Days of Last, This and Next Month -->
    <div in:fly="{{ x: flyX, duration: 200 }}" class="block w-full ">
      <div class="inline-flex flex-wrap">
        {#each Array(sumOfDays) as d, i}
          <Cell
            {...getValue(i)}
            index="{i}"
            {display}
            disable="{isDisabled(i)}"
            on:dateselected
          />
        {/each}
      </div>
    </div>
  {:else if display === 'months'}
    <div in:fly="{{ x: 20, duration: 200 }}" class="block w-full">
      <div class="inline-flex flex-wrap">
        {#each months as m, i}
          <Cell
            text="{m.s}"
            index="{i}"
            {display}
            on:monthSelected="{(e) => {
              month = e.detail.index;
              display = 'days';
            }}"
          />
        {/each}
      </div>
    </div>
  {:else}
    <div class="block w-full">
      <div class="inline-flex flex-wrap">
        {#each Array(20) as day, i}
          <Cell disable="true" day="{i + 20}" />
        {/each}
      </div>
    </div>
  {/if}
</div>
