<template>
<div class="container">
  <the-header/>
  <section>
    <router-view/>
  </section>
</div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';

export default {
  name: "MainLayout",
  components: {TheHeader}
}
</script>

<style scoped>
.container {
  height: 100vh;
}
</style>