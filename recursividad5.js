class Producto {
    constructor(codigo, descripcion, precioCompra, precioVenta, cantidadBodega, cantidadMinima, cantidadMaxima, descuento) {
      this.codigo = codigo;
      this.descripcion = descripcion;
      this.precioCompra = precioCompra;
      this.precioVenta = precioVenta;
      this.cantidadBodega = cantidadBodega;
      this.cantidadMinima = cantidadMinima;
      this.cantidadMaxima = cantidadMaxima;
      this.descuento = descuento;
    }
  
    solicitarPedido() {
      return this.cantidadBodega < this.cantidadMinima;
    }
  
    calcularTotalAPagar(unidadesCompra) {
      return unidadesCompra * this.precioCompra * (1 - this.descuento / 100);
    }
  }
  
  class PrendaDeVestir extends Producto {
    constructor(codigo, descripcion, precioCompra, precioVenta, cantidadBodega, cantidadMinima, cantidadMaxima, descuento, talla, permitePlanchado) {
      super(codigo, descripcion, precioCompra, precioVenta, cantidadBodega, cantidadMinima, cantidadMaxima, descuento);
      this.talla = talla;
      this.permitePlanchado = permitePlanchado;
    }
  }
  
  class Calzado extends Producto {
    constructor(codigo, descripcion, precioCompra, precioVenta, cantidadBodega, cantidadMinima, cantidadMaxima, descuento, talla) {
      super(codigo, descripcion, precioCompra, precioVenta, cantidadBodega, cantidadMinima, cantidadMaxima, descuento);
      this.talla = talla;
    }
  }
  
  const productosPrendas = [
    new PrendaDeVestir('001', 'Blusa', 20, 40, 10, 5, 20, 10, 'M', true),
    new PrendaDeVestir('002', 'Jeans', 30, 60, 15, 7, 25, 15, 'L', false),
    new PrendaDeVestir('003', 'Camisa', 25, 50, 12, 6, 18, 12, 'S', true),
  ];
  
  const productosCalzado = [
    new Calzado('101', 'Tenis', 40, 80, 8, 4, 15, 10, 38),
    new Calzado('102', 'Zapatos Formales', 50, 100, 6, 3, 12, 20, 40),
    new Calzado('103', 'Sandalias', 30, 60, 10, 5, 20, 15, 37),
  ];
  
  console.log('Productos de prendas de vestir:');
  productosPrendas.forEach((producto) => {
    console.log(producto);
  });
  
  console.log('\nProductos de calzado:');
  productosCalzado.forEach((producto) => {
    console.log(producto);
  });