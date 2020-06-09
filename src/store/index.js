import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    juegos: [
      {
        codigo: "0001",
        nombre: "Sekiro",
        stock: 100,
        precio: 30000,
        color: "red",
        destacado: true
      },
      {
        codigo: "0002",
        nombre: "Fifa 21",
        stock: 100,
        precio: 25000,
        color: "blue",
        destacado: false
      },
      {
        codigo: "0003",
        nombre: "Gears of War 4",
        stock: 100,
        precio: 15000,
        color: "green",
        destacado: true
      },
      {
        codigo: "0004",
        nombre: "Mario Tennis Aces",
        stock: 100,
        precio: 35000,
        color: "yellow",
        destacado: false
      },
      {
        codigo: "0005",
        nombre: "Bloodthorne",
        stock: 100,
        precio: 10000,
        color: "blue",
        destacado: false
      },
      {
        codigo: "0006",
        nombre: "Forza Horizon 4",
        stock: 100,
        precio: 20000,
        color: "red",
        destacado: true
      }
    ],
    ventas: []
  },
  mutations: {
    procesarVenta: (state, codigo) => {
      state.juegos.forEach(juego => {
        if (juego.codigo === codigo) {
          juego.stock -= 1;
        }
      });
    },
    registrarVenta: (state, codigo) => {
      let juego = state.juegos.find(juego => juego.codigo === codigo);
      let venta = {
        codigo: codigo,
        nombre: juego.nombre,
        precio: juego.precio
      };
      state.ventas.push(venta);
    }
  },
  actions: {
    venderJuego: async (context, codigo) => {
      await context.dispatch("procesarVenta", codigo);
      await context.dispatch("registrarVenta", codigo);
      alert("Venta procesada");
    },
    procesarVenta: (context, codigo) => {
      return new Promise(resolve => {
        setTimeout(() => {
          context.commit("procesarVenta", codigo);
          resolve();
        }, 2000);
      });
    },
    registrarVenta: (context, codigo) => {
      return new Promise(resolve => {
        setTimeout(() => {
          context.commit("registrarVenta", codigo);
          resolve();
        }, 1000);
      });
    }
  },
  getters: {
    obtenerJuegoPorId: state => codigo => {
      return state.juegos.filter(juego => juego.codigo === codigo);
    },
    cantidadJuegos: state => {
      return state.juegos.length;
    },
    cantidadJuegosEnStock: state => {
      return state.juegos.filter(juego => juego.stock >= 0).length;
    },
    stockTotal: state => {
      return state.juegos.reduce((a, b) => {
        return { stock: a.stock + b.stock };
      });
    },
    totalVentas: ({ ventas }) => {
      if (ventas.length >= 1) {
        let suma = 0;
        ventas.forEach(item => {
          suma += item.precio;
        });
        return { monto: suma };
      } else {
        return { monto: 0 };
      }
    }
  }
});
