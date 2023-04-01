<template>
<div>
  <Teleport to="body">
    <div class="modal-overlay" @click="hide"/>
    <div class="modal congrat-modal" @click.prevent>
      <span class="congrat-modal__text">thank you!</span>
      <span class="congrat-modal__text">your booking is completed</span>
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
      hide(){
        this.$emit('update:isOpen', false);
      }
  }
}
</script>

<style scoped>
.congrat-modal {
  width: 50%;
  height: 264px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 90px;
  background-color: var(--color-gray-dark);
  color: white;
  font-size: 35px;
  line-height: 35px;
}
.congrat-modal__text {
  text-align: center;
}
</style>