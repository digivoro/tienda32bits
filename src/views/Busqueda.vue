<template>
  <div>
    <h1 class="mb-3">Búsqueda</h1>
    <div class="row p-5 mb-3">
      <div class="col col-sm-6">
        <form class="form-inline my-2 my-lg-0">
          <input
            v-model="input"
            class="form-control mr-sm-2"
            type="search"
            placeholder="Buscar juego por ID"
            aria-label="Search"
          />
        </form>
      </div>
      <div class="card-deck col col-sm-6">
        <div class="card">
          <div class="card-body">
            <h2 class="card-title">{{ cantidadJuegos }}</h2>
          </div>
          <div class="card-footer">
            <small class="text-muted">Cantidad de juegos</small>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h2 class="card-title">{{ stockTotal.stock }}</h2>
          </div>
          <div class="card-footer">
            <small class="text-muted">Stock total juegos</small>
          </div>
        </div>
      </div>
    </div>

    <ListadoJuegos :lista="listaFiltrada" />
  </div>
</template>

<script>
import ListadoJuegos from "../components/ListadoJuegos";
import { mapState, mapGetters } from "vuex";
export default {
  components: {
    ListadoJuegos
  },
  data() {
    return {
      input: ""
    };
  },
  computed: {
    listaFiltrada() {
      return this.input
        ? this.$store.getters.obtenerJuegoPorId(this.input)
        : this.$store.state.juegos;
    },
    ...mapState(["juegos"]),
    ...mapGetters(["cantidadJuegos", "stockTotal"])
  }
};
</script>

<style lang="scss" scoped></style>
