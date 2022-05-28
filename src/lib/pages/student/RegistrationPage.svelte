<script>
  import Card from './../../card/Card.svelte';
  import FormBuilder from './../../form_builder/FormBuilder.svelte';
  import { options } from './RegistrationForm.ts';
  let data = {};
</script>

<Card>
  <FormBuilder {options} bind:data />
  <div class="align-middle content-end items-end py-4 ">
    <button
      class="btn focus:outline-none bg-primary py-2 px-4 ml-4 text-cadetblue
      text-sm font-normal rounded-md border-none"
    >
      Submit
    </button>
    <button
      class="btn focus:outline-none bg-transparent py-2 px-4 ml-4 text-cadetblue
      text-sm font-normal hover:bg-comet rounded-md border-none"
    >
      Cancel
    </button>
  </div>
</Card>
