<script>
import TextField from "../input_field/TextField.svelte";
import { countries } from "../../assets/json/country.ts";
</script>

<div class="h-screen p-8 my-4 rounded bg-haiti">

    <p>Welcome to Page 2</p>
    
    <TextField items={countries} type="typeahead" id="typeahead"/>
    <TextField type="password" id="password"/>
    <TextField type="date" id="date"/>
</div>