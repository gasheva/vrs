<template>
  <div>
    <Teleport to="body">
      <div class="modal-overlay" @click="hide"/>
      <div class="modal sign-modal" @click.prevent>
        <div class="modal__header">you go to <span class="modal__event-title">{{ event.title }}</span></div>
        <div class="modal__inputs">
          <input class="input" type="text" v-model="name" placeholder="name">
          <input class="input" type="text" v-model="surname" placeholder="surname">
          <input class="input" type="text" v-model="id" placeholder="id">
          <input class="input" type="text" v-model="numberOfTickets" placeholder="numberOfTickets">
        </div>
        <div class="button-wrapper">
          <base-button text="sign up for an event" color="green-pale" class="modal__button"/>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script>
import BaseButton from '@/components/BaseButton.vue';

export default {
  name: "TheModal",
  components: {BaseButton},
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
    event: {
      type: Object,
      required: true,
    },
  },
  emit: ['update:isOpen'],
  data(){
    return{
      numberOfTickets: '',
      name: '',
      surname: '',
      id: '',
    }
  },

  created() {
    // todo
  },
  methods:{
    hide(){
      this.$emit('update:isOpen', false);
    }
  }
}
</script>

<style scoped>
.sign-modal {
  width: 75%;
  height: fit-content;
  padding: 50px 97px 44px 97px;

  display: flex;
  flex-direction: column;

  background: var(--color-green);
}
.modal__header {
  color: var(--color-gray-dark);
  font-size: 35px;
  line-height: 50px;
  margin-bottom: 10px;
  text-align: center;
}
.modal__inputs {
  display: flex;
  flex-direction: column;
  gap: 32px;
}
.modal__event-title {
  color: black;
  font-size: 50px;
  margin-left: 20px;
}

.button-wrapper{
  margin-top: 32px;
  display: flex;
  justify-content: center;
}
.modal__button{
}
.input{
  width: 100%;
  height: 52px;
  border-radius: var(--radius-1);
  padding-left: 21px;
}

.input::placeholder {
  color: var(--color-gray-dark);
}
</style>