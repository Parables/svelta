<script>
  import DateColumn from './DateColumn.svelte';
  import moment from 'moment';
  import {
    createEventDispatcher
  } from 'svelte';
  const dispatch = createEventDispatcher();
  let dv = Number.parseInt(moment().format('DD'));
  let mv = Number.parseInt(moment().format('MM'));
  let yv = Number.parseInt(moment().format('YYYY'));
  let max = Number.parseInt(moment().daysInMonth());

  let hovering = false;
  export let selectedDate = `${dv}-${mv}-${yv}`;
  export let formattedDate = moment(selectedDate, 'DD-MM-YYYY').format(
    'dddd, MMMM Do YYYY'
  );
  export let dateFormat = 'dddd, MMMM Do YYYY';

  $: {
    max = Number.parseInt(moment(mv, 'M').daysInMonth());
    selectedDate = `${dv}-${mv}-${yv}`;
    formattedDate = moment(selectedDate, 'DD-MM-YYYY').format(dateFormat);
    dispatch('date-selected', {
      date: formattedDate
    });
  }
</script>

<div class="inline-block pb-2 bg-white shadow-lg w-58 z-2500"
  on:mouseover="{() => dispatch('hovering', { hovering: true })}"
  on:mouseleave="{() => dispatch('mouse-leave', { leave: true })}">
  <div class="p-4 text-white shadow-md bg-primary">
    <p class="font-sans text-sm font-medium select-none ">{yv}</p>
    <p class="font-sans text-lg font-semibold select-none ">
      {moment(selectedDate, 'DD-MM-YYYY').format('ddd, MMMM Do')}
    </p>
  </div>
  <div class="inline-flex pl-5">
    <DateColumn type="DD" {max} month="{mv}" on:value-changed="{event => (dv = event.detail.value)}" />
    <DateColumn type="MM" on:value-changed="{event => (mv = event.detail.value)}" />
    <DateColumn type="YYYY" on:value-changed="{event => (yv = event.detail.value)}" />
  </div>

</div>