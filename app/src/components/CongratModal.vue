<template>
<div>
  <Teleport to="body">
    <div class="modal-overlay" @click="hide"/>
    <div class="modal congrat-modal" @click.prevent>
      thank you!\n
      your booking is completed
    </div>
  </Teleport>
</div>
</template>

<script>
export default {
  name: "CongratModal",

  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
  emit: ['update:isOpen'],

  methods: {
    methods:{
      hide(){
        this.$emit('update:isOpen', false);
      }
    }
  }
}
</script>

<style scoped>
.congrat-modal {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-gray-dark);
  color: white;
}
</style>