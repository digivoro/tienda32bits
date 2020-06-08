<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
    <router-link class="navbar-brand" to="/">
      <img
        class="img-fluid d-inline-block"
        height="auto"
        width="200"
        alt="Desafío Latam logo"
        src="../assets/logo.png"
      />
    </router-link>
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
        <router-link to="/" class="nav-item nav-link">
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
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style lang="scss" scoped></style>
