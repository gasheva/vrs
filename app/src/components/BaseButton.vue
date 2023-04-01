<template>
  <button @click="$emit('click')" class="button" :class="color">{{text}}</button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    text: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: 'green',
      validator(val){
        return ['green', 'green-pale'].includes(val);
      }
    }
  },
  emits: ['click'],
}
</script>

<style scoped>
.button{
  padding: 10px 44px;
  color: white;
  font-size: 25px;
  line-height: 25px;
  border-radius: var(--radius-1);
}

.green{
  background-color: var(--color-green);
}
.green-pale {
  background-color: var(--color-gray-dark);
}
</style>