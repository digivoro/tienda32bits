<template>
  <div class="total">
    <h1>Total</h1>
    <div class="row mb-3">
      <div class="col col-12 col-sm-4">
        <div class="card">
          <div class="card-body">
            <h2 class="card-title">${{ totalVentas.monto }}</h2>
          </div>
          <div class="card-footer">
            Monto Total Ventas
          </div>
        </div>
      </div>
    </div>
    <ListadoJuegos :lista="ventas" :total="true" />
  </div>
</template>

<script>
import ListadoJuegos from "../components/ListadoJuegos";
import { mapGetters, mapState } from "vuex";

export default {
  components: {
    ListadoJuegos
  },
  computed: {
    ...mapState(["ventas"]),
    ...mapGetters(["totalVentas"])
  }
};
</script>

<style lang="scss" scoped></style>
