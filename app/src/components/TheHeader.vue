<template>
<header class="header">
  <the-logo class="header__logo"/>
  <button class="header__menu logBtn" v-show="!isLogin" @click="isOpen=true">Log in</button>
  <div class="header__menu" v-show="isLogin">
    <span class="header__credentials">{{surname}} {{name}}</span>
    <button class="logBtn" @click="logOut">Log out</button>
  </div>

  <the-modal v-if="isOpen" v-model="isOpen"
             :is-event-form="false"
             button-label="sign up"
             @update:isOpen="isOpen=false"
             @sign-up="isOpen=false"/>
</header>
</template>

<script>
import TheLogo from '@/components/TheLogo.vue';
import UserMenu from '@/components/UserMenu.vue';
import TheModal from '@/components/SignModal.vue';

export default {
  name: "TheHeader",
  components: {TheModal, UserMenu, TheLogo},
  data(){
    return {
      isLogin: false,
      name: '',
      surname: '',
      id: '',
      interval: null,
      isOpen: false,
    }
  },
  created() {
    this.checkLocalStorage();
    this.interval = setInterval(()=>{
      this.checkLocalStorage();
    }, 1000)
  },
  unmounted() {
    this.interval && clearInterval(this.interval)
  },
  methods: {
    checkLocalStorage(){
      this.name = localStorage.getItem('vse_name');
      this.surname = localStorage.getItem('vse_surname');
      this.id = localStorage.getItem('vse_id');
      this.isLogin = this.name && this.surname && this.id;
    },
    logOut() {
      localStorage.setItem('vse_name', '');
      localStorage.setItem('vse_surname', '');
      localStorage.setItem('vse_id', '');
    }
  }
}
</script>

<style scoped>
.header {
  height: 141px;
  width: 100%;
  padding: 0 var(--margin-right) 0 var(--margin-left);
  display: flex;
  align-items: center;
  background-color: var(--color-green);
}
.header__menu {
  margin-left: auto;
}
.header__credentials{
  margin-right: 30px;
  font-size: 20px;
}

.logBtn {
  padding: 10px;

  color: white;
  font-size: 20px;
  border-radius: 15px;
  background: var(--color-gray-dark);
}

.logBtn:hover {
    background-color: #818173;
}
</style>