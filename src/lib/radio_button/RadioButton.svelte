<script lang="typescript">
  import { Items } from '../form_builder/form_options';
  export let checkedColor = 'primary';
  export let items: Items[] = [
    { id: '0', value: 'ItemOne' },
    { id: '1', value: 'ItemTwo' },
    { id: '3', value: 'ItemThree' }
  ];
  let selected = 0;
  export let value = items[selected];
</script>

<div class="inline-flex items-center ">
  {#each items as item, i}
    <div
      class="inline-flex mr-4 "
      on:click
      on:click="{() => {
        if (selected !== i) {
          selected = i;
          value = items[selected];
        }
      }}"
    >
      <div
        class="inline-flex w-5 h-5 border-2 transition-all duration-300
        ease-linear rounded-full {selected === i ? `bg-${checkedColor} border-${checkedColor}` : ' bg-transparent border-cadetblue'}"
      ></div>
      <span class="ml-2 select-none">
        {item.label ? item.label : item.value}
      </span>
    </div>
  {/each}
</div>
