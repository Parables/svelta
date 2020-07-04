<script lang="typescript">
  import { FormOption } from './form_options';
  import TextField from '../input_field/TextField.svelte';
  import NumberField from '../input_field/NumberField.svelte';
  import DateField from '../input_field/DateField.svelte';
  import AppBar from '../app_bar/AppBar.svelte';
  export let options: FormOption;

  $: {
    console.log('FormOptions', options);
  }
</script>

<div class="w-full form">
  {#each options.sections as s}
    <div class="section {s.class}">
      <slot name="section-title">
        {#if s.title}
          <div class="py-2 text-sm font-normal text-cadetblue">
            <slot>{s.title}</slot>
          </div>
        {/if}
      </slot>
      {#each s.rows as r}
        <div class="row inline-flex flex-wrap justify-between w-full {r.class}">
          {#each r.fields as f}
            {#if f.type === 'number'}
              <NumberField {...f} />
            {:else if f.type === 'date'}
              <DateField {...f} />
            {:else}
              <TextField {...f} />
            {/if}
          {/each}
        </div>
      {/each}
    </div>
  {/each}
</div>
