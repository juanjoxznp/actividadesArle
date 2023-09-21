class Cliente {
    constructor(nombre, tipo, tieneCuenta) {
      this.nombre = nombre;
      this.tipo = tipo;
      this.tieneCuenta = tieneCuenta;
    }
  }
  
  class Banco {
    constructor() {
      this.cajas = [
        { numero: 1, tipo: 'retiros', disponible: true },
        { numero: 2, tipo: 'retiros', disponible: true },
        { numero: 3, tipo: 'caja', disponible: true },
        { numero: 4, tipo: 'caja', disponible: true },
        { numero: 5, tipo: 'asesoría', disponible: true },
      ];
      this.clientesEnCola = [];
    }
  
    agregarClienteACola(cliente) {
      this.clientesEnCola.push(cliente);
    }
  
    atenderClientes() {
      for (let i = 0; i < this.cajas.length; i++) {
        const caja = this.cajas[i];
        if (caja.disponible) {
          const cliente = this.obtenerClienteParaAtender();
          if (cliente) {
            console.log(`Caja ${caja.numero} atiende a ${cliente.nombre}`);
            caja.disponible = false;
            this.clientesEnCola.shift();
          }
        }
      }
    }
  
    obtenerClienteParaAtender() {
      const clientesPresenciales = this.clientesEnCola.filter(
        (cliente) => cliente.tipo === 'presencial' && cliente.tieneCuenta
      );
  
      if (clientesPresenciales.length > 0) {
        return clientesPresenciales[0];
      }
  
      return this.clientesEnCola[0];
    }
  
    liberarCajas() {
      this.cajas.forEach((caja) => {
        if (!caja.disponible) {
          caja.disponible = true;
        }
      });
    }
  }
  
  const miBanco = new Banco();
  
  const cliente1 = new Cliente('Cliente1', 'general', true);
  const cliente2 = new Cliente('Cliente2', 'preferencial', true);
  const cliente3 = new Cliente('Cliente3', 'presencial', false);
  const cliente4 = new Cliente('Cliente4', 'general', true);
  
  miBanco.agregarClienteACola(cliente1);
  miBanco.agregarClienteACola(cliente2);
  miBanco.agregarClienteACola(cliente3);
  miBanco.agregarClienteACola(cliente4);
  
  miBanco.atenderClientes();
  miBanco.liberarCajas();
  miBanco.atenderClientes();
  miBanco.liberarCajas();
  miBanco.atenderClientes();
  miBanco.liberarCajas();