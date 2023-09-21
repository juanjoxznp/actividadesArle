class Producto {
    constructor(id, nombre, fecha, precioInicial) {
      this.id = id;
      this.nombre = nombre;
      this.fecha = fecha;
      this.precioInicial = precioInicial;
      this.ofertas = [];
      this.ganador = null;
    }
  
    agregarOferta(persona, valor) {
      if (valor > this.precioInicial) {
        this.ofertas.push({ persona, valor });
      } else {
        console.log(`La oferta de ${persona} por ${this.nombre} no supera el precio inicial.`);
      }
    }
  
    seleccionarGanador() {
      if (this.ofertas.length > 0) {
        const ofertaGanadora = this.ofertas.reduce((max, oferta) => (oferta.valor > max.valor ? oferta : max));
        this.ganador = ofertaGanadora.persona;
        console.log(`La oferta ganadora por ${this.nombre} es de ${ofertaGanadora.persona} por ${ofertaGanadora.valor}.`);
      } else {
        console.log(`No hubo ofertas por ${this.nombre}.`);
      }
    }
  }
  
  class Subasta {
    constructor() {
      this.productos = [];
    }
  
    registrarProducto(id, nombre, fecha, precioInicial) {
      const producto = new Producto(id, nombre, fecha, precioInicial);
      this.productos.push(producto);
      console.log(`Producto registrado: ${nombre}`);
    }
  
    listarProductos() {
      console.log('Lista de Productos:');
      this.productos.forEach((producto) => {
        console.log(`ID: ${producto.id}, Nombre: ${producto.nombre}, Fecha: ${producto.fecha}, Precio Inicial: ${producto.precioInicial}`);
      });
    }
  
    hacerOferta(idProducto, persona, valorOferta) {
      const producto = this.productos.find((p) => p.id === idProducto);
      if (producto) {
        producto.agregarOferta(persona, valorOferta);
      } else {
        console.log('Producto no encontrado.');
      }
    }
  
    seleccionarGanadores() {
      this.productos.forEach((producto) => {
        producto.seleccionarGanador();
      });
    }
  }
  
  const subasta = new Subasta();
  
  subasta.registrarProducto(1, 'Cuadro', '2023-09-30', 100);
  subasta.registrarProducto(2, 'Reloj', '2023-09-30', 50);
  
  subasta.listarProductos();
  
  subasta.hacerOferta(1, 'Comprador1', 120);
  subasta.hacerOferta(1, 'Comprador2', 110);
  subasta.hacerOferta(2, 'Comprador3', 60);
  
  subasta.seleccionarGanadores();