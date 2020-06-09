<template>
  <div class="ventas">
    <h1 class="mb-3">Ventas</h1>
    <div class="row mb-3">
      <div class="col col-12 col-sm-4">
        <div class="card">
          <div class="card-body">
            <h2 class="card-title">{{ cantidadJuegosEnStock }}</h2>
          </div>
          <div class="card-footer">
            Cantidad juegos con stock
          </div>
        </div>
      </div>
    </div>
    <ListadoJuegos :lista="juegos" :venta="true" />
  </div>
</template>

<script>
import ListadoJuegos from "../components/ListadoJuegos";
import { mapGetters, mapState } from "vuex";
export default {
  name: "Ventas",
  components: {
    ListadoJuegos
  },
  computed: {
    ...mapState(["juegos"]),
    ...mapGetters(["cantidadJuegosEnStock"])
  }
};
</script>

<style lang="scss" scoped></style>
