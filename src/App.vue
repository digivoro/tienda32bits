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
.vista-leave-active {
  transition: opacity 0.2s;
}
.vista-enter-active {
  transition: opacity 0.2s;
  transition-delay: 0.2s;
}
.vista-enter,
.vista-leave-to {
  opacity: 0;
}
.vista-enter-to,
.vista-leave {
  opacity: 1;
}
</style>
