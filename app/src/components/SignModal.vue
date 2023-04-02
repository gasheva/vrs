<template>
  <div>
    <Teleport to="body">
      <div class="modal-overlay" @click="hide"/>
      <div class="modal sign-modal" @click.prevent>
        <div class="modal__header">you go to <span class="modal__event-title">{{ event.title }}</span></div>
        <div class="modal__inputs">
          <input class="input" type="text" v-model.trim="name" placeholder="name">
          <input class="input" type="text" v-model.trim="surname" placeholder="surname">
          <input class="input" type="text" v-model.trim="id" placeholder="id">
          <input class="input" v-model="numberOfTickets" type="text" @keypress="inputNumber" placeholder="numberOfTickets">
          <the-error v-if="error" :error="error" color="white"/>
        </div>
        <div class="button-wrapper">
          <base-button text="sign up for an event"
                       color="green-pale"
                       class="modal__button"
                       @click="signUp"/>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script>
import BaseButton from '@/components/BaseButton.vue';
import TheError from '@/components/TheError.vue';

export default {
  name: "TheModal",
  components: {TheError, BaseButton},
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
  emit: ['update:isOpen', 'sign-up'],
  data(){
    return{
      numberOfTickets: '',
      name: '',
      surname: '',
      id: '',
      error: '',
    }
  },

  watch: {
    name() {
      this.error = '';
    },
    surname(){
      this.error = '';
    },
    id(){
      this.error = '';
    },
  },

  created() {
    // todo
  },
  methods:{
    inputNumber(event){
      this.IsNumber(event)
    },
    IsNumber(event) {
      if (!/\d/.test(event.key)) {
        return event.preventDefault();
      }
      this.error = '';
    },
    hide(){
      this.$emit('update:isOpen', false);
    },
    signUp(){
      const isValid = this.validate();
      if(!isValid) {
        this.error = 'Fill all fields!';
        return;
      }
      localStorage.setItem('vse_name', this.name);
      localStorage.setItem('vse_surname', this.surname);
      localStorage.setItem('vse_id', this.id);
      this.$emit('sign-up');
    },
    validate(){
      return this.name && this.surname && this.id && this.numberOfTickets;
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
  font-size: 25px;
}

.input::placeholder {
  color: var(--color-gray-dark);
}
</style>