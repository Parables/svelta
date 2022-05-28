<script>
    import { push } from "svelte-spa-router";
    import TabPage from "../../tab_tage/TabPage.svelte";
</script>

<button on:click="{()=>push("/students/id/true")}">Register Student</button>
<TabPage />