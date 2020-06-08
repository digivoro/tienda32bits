<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
        <img
          class="img-fluid d-inline-block"
          height="auto"
          width="200"
          alt="Desafío Latam logo"
          src="./assets/logo.png"
        />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link
            :to="{ name: 'inicio' }"
            class="nav-item nav-link active"
          >
            Inicio <span class="sr-only">(current)</span>
          </router-link>
          <router-link class="nav-item nav-link" to="/busqueda">
            Búsqueda
          </router-link>
          <router-link class="nav-item nav-link" to="/ventas">
            Ventas
          </router-link>
          <router-link class="nav-item nav-link" to="/total">
            Total
          </router-link>
        </div>
      </div>
    </nav>
    <transition name="vista">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.vista-enter-active,
.vista-leave-active {
  transition: opacity 0.2s;
}
.vista-enter,
.vista-leave-to {
  opacity: 0;
}
</style>
