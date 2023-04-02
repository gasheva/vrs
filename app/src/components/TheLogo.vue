<template>
<span class="logo" @click="redirectToHome">
  events4u
</span>
</template>

<script>
export default {
  name: "TheLogo",
  methods: {
    redirectToHome(){
      this.$router.push({name: 'home'});
    }
  }
}
</script>

<style scoped>
.logo{
  color: var(--color-gray-dark);
  font: var(--font-goldman);
  font-size: 72px;
  line-height: 72px;
}
.logo:hover{
  cursor: pointer;
}
</style>