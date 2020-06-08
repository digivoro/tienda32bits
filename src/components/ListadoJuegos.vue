<template>
  <table class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col">Código</th>
        <th scope="col">Nombre</th>
        <th scope="col">Stock</th>
        <th scope="col">Precio</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="juego in juegos"
        :key="juego.codigo"
        :style="{ backgroundColor: juego.color }"
      >
        <th scope="row">{{ juego.codigo }}</th>
        <td>{{ juego.nombre }}</td>
        <td>{{ juego.stock }}</td>
        <td>${{ juego.precio }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "ListadoJuegos",
  props: {
    juegos: Object
  }
};
</script>

<style lang="scss" scoped></style>
