<template>
  <img
    @click="$router.push('/')"
    class="logo"
    src="./assets/images/UAE-Codes-White-Logo.png"
    alt="uae code day"
  />
  <RouterView />
</template>

<script setup>
import { RouterView } from 'vue-router'
</script>

<style scoped>
.logo {
  width: 420px;
  margin: auto;
  cursor: pointer;
}
</style>
