<script>
  export let classNames = '';
  export let variant = 'outlined'; //"negative"|"material"|"raised"|"default"
  let variantStyle =
    variant === 'outlined'
      ? '  border-primary hover:text-primary hover:bg-comet active:bg-primary active:text-cadetblue'
      : '  border-transparent hover:bg-comet hover:border-comet active:bg-comet active:text-primary';
</script>

<button on:click class="py-2 px-6 mr-4 select-none bg-transparent border-2 text-cadetblue rounded-md focus:outline-none {variantStyle} {classNames}">
  <slot />
</button>
