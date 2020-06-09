<template>
  <table class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col">Código</th>
        <th scope="col" v-if="!total">Color</th>
        <th scope="col">Nombre</th>
        <th scope="col" v-if="!total">Stock</th>
        <th scope="col">Precio</th>
        <th scope="col" v-if="venta"></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in lista" :key="index">
        <th scope="row">{{ item.codigo }}</th>
        <td v-if="!total" class="row mx-auto">
          <div class="card">
            <div
              class="card-body"
              :style="{ backgroundColor: item.color }"
            ></div>
          </div>
        </td>
        <td>{{ item.nombre }}</td>
        <td v-if="!total">{{ item.stock }}</td>
        <td>${{ item.precio }}</td>
        <td v-if="venta">
          <button
            class="btn btn-sm btn-primary"
            @click="venderJuego(item.codigo)"
          >
            Vender
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "ListadoJuegos",
  props: {
    lista: Array,
    venta: Boolean,
    total: Boolean
  },
  methods: mapActions(["venderJuego"])
};
</script>

<style lang="scss" scoped></style>
