<script>
  import Card from '../../card/Card.svelte';
  import FormBuilder from '../../form_builder/FormBuilder.svelte';
  import { options } from '../../forms/FeesPayment.ts';
  import Button from '../../button/Button.svelte';
import Table from '../../table/Table.svelte';
  let studentProfile = {};
  let data;
</script>



<Card>
  <p class="py-2 text-sm font-semibold text-cadetblue ">New Payment</p>
  <FormBuilder {options} bind:data />
  <Button>Save</Button>
</Card>

<Card classNames="my-4">
    <p class="py-2 text-sm font-semibold uppercase text-cadetblue ">Recent Payments</p>
    <Table {data}/>
</Card>
