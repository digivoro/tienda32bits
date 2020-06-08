<template>
  <div>
    <h1 class="mb-3">Búsqueda</h1>
    <div class="p-5 mb-3 shadow col col-12 col-md-8 col-lg-6">
      <input
        class="mb-3"
        v-model="input"
        type="text"
        placeholder="Búscar juego por ID"
      />
      <h4>Cantidad de juegos: {{ cantidadJuegos }}</h4>
      <h4>Stock total juegos: {{ stockTotal.stock }}</h4>
    </div>
    <ListadoJuegos :juegos="listaFiltrada" />
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
