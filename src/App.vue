<template>
  <div id="app">
    <Navbar />
    <transition name="vista">
      <router-view class="container" />
    </transition>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
export default {
  components: {
    Navbar
  }
};
</script>

<style scoped>
.vista-enter-active {
  transition: opacity 0.5s;
}
.vista-enter,
.vista-leave-to {
  opacity: 0;
}
</style>
