<script>
    import DateArrows from './DateArrows.svelte'
    import DateTile from './DateTile.svelte'
    import moment from 'moment'
    import {
        createEventDispatcher
    } from 'svelte';
    const dispatch = createEventDispatcher();

    export let type = "DD"
    export let max
    export const month = type === "DD" ? Number.parseInt(moment().format("MM")) : null

    let visible = true

    let value = Number.parseInt(moment().format(type))
    let prev = value - 1
    let next = value + 1
    let min = 1
    let colType


    if (type === "DD" && month !== null) {
        max = Number.parseInt(moment(month, "M").daysInMonth());
        colType = "Day"
    } else if (type === "MM") {
        max = 12;
        colType = "Month"
    } else if (type === "YYYY") {
        max = value + 200
        min = value - 200
        colType = "Year"
    } else if (type === "HH") {
        max = 12;
        colType = "Hour"
    } else if (type === "mm") {
        max = 60;
        colType = "Minute"
    }



    $: {
        if (type === "DD") visible = next <= max
        else if (type === "MM") visible = next <= 12
    }

    $: {
        if (value > max) decreaseValue()
    }

    function increaseValue() {
        if (value < max) {
            value++
            prev = value - 1
            next = value + 1
        }
    }

    function decreaseValue() {
        if (value > min) {
            value--
            prev = value - 1
            next = value + 1
        }
    }

    function setValue(v) {
        if (v < value) decreaseValue()
        else increaseValue()
    }

    $: {
        dispatch("value-changed", {
            value: value
        })
    }
</script>


<div class="inline-flex flex-col " on:wheel|preventDefault={(event)=> { event.deltaY > 0 ? increaseValue():
    decreaseValue()}}>
    <div class="w-16 py-2 ">
        <p class="font-sans text-center align-middle select-none ">{colType} </p>
    </div>
    <DateArrows direction="up" callback={decreaseValue } />
    <DateTile bind:value={prev} visible={(value===min) ? false : true} callback={()=> setValue(prev)} />
    <DateTile bind:value={value} isValueTile={true} />
    <DateTile bind:value={next} {visible} callback={()=> setValue(next)}/>
    <DateArrows direction="down" callback={increaseValue} />
</div>