<template>
  <div class="lds-dual-ring"></div>
</template>

<script>
export default {
  name: "TheLoader"
}
</script>

<style scoped>
.lds-dual-ring {
  display: flex;
  width: 80px;
  height: 80px;
  margin: 0 auto;
}
.lds-dual-ring:after {
  content: "";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid var(--color-green);
  border-color: var(--color-green) transparent var(--color-green) transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>