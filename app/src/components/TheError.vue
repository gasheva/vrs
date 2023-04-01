<template>
<div>
  {{error}}
</div>
</template>

<script>
export default {
  name: "TheError",
  props: {
    error: {
      type: String,
      default: 'Something went wrong'
    }
  }
}
</script>

<style scoped>

</style>