<template>
<header class="header">
  <the-logo class="header__logo"/>
  <user-menu class="header__menu"/>
</header>
</template>

<script>
import TheLogo from '@/components/TheLogo.vue';
import UserMenu from '@/components/UserMenu.vue';

export default {
  name: "TheHeader",
  components: {UserMenu, TheLogo}
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
</style>