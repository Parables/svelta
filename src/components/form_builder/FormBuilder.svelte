<script lang="typescript">
  import { FormOption } from './form_options';
  import TextField from '../input_field/TextField.svelte';
  import AppBar from '../app_bar/AppBar.svelte';
  export let options: FormOption;
export let data = {}
</script>

<div class="w-full form">
  {#each options.sections as s}
    <div class="section {s.class}">
      <slot name="section-title">
        {#if s.title}
          <div class="pt-4 pb-3 text-sm font-normal text-cadetblue">
            <slot>{s.title}</slot>
          </div>
        {/if}
      </slot>
      {#each s.rows as r}
        <div class="row inline-flex flex-wrap justify-between w-full {r.class}">
          {#each r.fields as f}
            <!-- "radio" | "checkbox" | "chip" | "chipinput" | "select" | "range" -->
            {#if f.type === 'radio' || f.type === 'checkbox' || f.type === 'chip'}
              <p>single and multi select items</p>
            {:else if f.type === 'chipinput' || f.type === 'select'}
              <p>combo box dropdown field goes here</p>
            {:else if f.type === 'range'}
              <p>Slider range picker goes here</p>
            {:else}
              <TextField {...f} bind:value="{ data[f.name]}" />
            {/if}
          {/each}
        </div>
      {/each}
    </div>
  {/each}
</div>
