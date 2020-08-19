<script>
  import Card from './../../card/Card.svelte';
  import { push } from 'svelte-spa-router';
</script>

<Card>
  <div>
    <button on:click="{() => push('/students/id/true')}">
      Register Student
    </button>
  </div>
</Card>
