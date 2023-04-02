<template>
<div class="error" :class="color">
  Error: {{error}}
</div>
</template>

<script>
export default {
  name: "TheError",
  props: {
    error: {
      type: String,
      default: 'Something went wrong!'
    },
    color: {
      type: String,
      default: 'black',
      validator(val) {
        return ['black', 'white'].includes(val);
      }
    }
  }
}
</script>

<style scoped>
.error{
  font-size: 15px;
  font-style: italic;
}
.black {
  color: black;
}
.white {
  color: white;
}
</style>