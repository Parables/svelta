<script>
  import FormBuilder from '../../form_builder/FormBuilder.svelte';
  import Button from '../../button/Button.svelte'
  import { options } from '../../forms/StudentRegistration.ts';
  let data;
</script>

<div class="w-full px-6 py-4 rounded text-cadetblue bg-haiti ">
  <FormBuilder {options} bind:data />
  <div class="flex items-end content-end py-8">
    <Button on:click="{()=>{}}" variant="negative">Cancel</Button>
    <Button on:click="{()=>{}}">Save</Button>
  </div>
</div>
