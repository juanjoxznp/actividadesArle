class Cliente {
  constructor(nombre, pin, documento, saldo, saldo2) {
    this.nombre = nombre;
    this.pin = pin;
    this.documento = documento;
    this.saldo = saldo;
    this.saldo2 = saldo2;
  }

  ingresarCajero() {
    let prenderCajero = prompt("¿Deseas encender el cajero?");
    if (prenderCajero === "Si") {
      console.log("Cajero encendido");
      let ingresoDocumento = Number(
        prompt(`Ingrese su documento de identidad`)
      );
      let intentos = 0;
      while (intentos < 3) {
        let ingresoPin = Number(prompt(`Ingrese su pin`));

        if (ingresoDocumento === this.documento && ingresoPin === this.pin) {
          console.log(
            `Ingresaste correctamente a tus cuentas señor@ ${this.nombre}`
          );
          return true;
        } else {
          console.log(`Documento o PIN incorrectos`);
          intentos++;
        }
      }
      console.log(`Has agotado todos tus intentos. Cajero apagado.`);

      return false;
    } else if (prenderCajero === "No") {
      console.log("El cajero seguira apagado");
    }
  }

  retirarDinero() {
    if (this.ingresarCajero()) {
      let continuar = true;
      while (continuar == true) {
        let escogerCuenta = Number(
          prompt("En que cuenta deseas retirar? (1) Principal, (2) Secundaria")
        );
        if (escogerCuenta === 1) {
          let dinero = Number(prompt("¿Cuánto dinero desea retirar?"));

          if (dinero % 50000 === 0 && dinero <= this.saldo) {
            this.saldo -= dinero;
            console.log(
              `Retiro exitoso, puede tomar ${dinero} de la bandeja principal, el saldo actual en tu cuenta principal es de ${this.saldo}`
            );
          } else if (dinero > this.saldo) {
            console.log(`Fondos insuficientes`);
          } else {
            console.log(`Monto de retiro no válido`);
          }
        } else if (escogerCuenta === 2) {
          let dinero = Number(prompt("¿Cuánto dinero desea retirar?"));

          if (dinero % 50000 === 0 && dinero <= this.saldo2) {
            this.saldo2 -= dinero;
            console.log(
              `Retiro exitoso, puede tomar ${dinero} de la bandeja principal, el saldo actual en tu cuenta secundaria es de ${this.saldo2}`
            );
          } else if (dinero > this.saldo2) {
            console.log(`Fondos insuficientes`);
          } else {
            console.log(`Monto de retiro no válido`);
          }
        }

        let respuesta = prompt("¿Desea realizar otro retiro? (Sí/No)");
        if (respuesta === "No") {
          console.log("Cajero apagado, vuelve pronto");
          continuar = false;
        }
      }
    }
  }

  depositarDinero() {
    if (this.ingresarCajero()) {
      let efectivo = 0;
      let cheque = 0;
      let escogerCuenta = Number(
        prompt("En que cuenta deseas depositar? (1) Principal, (2) Secundaria")
      );
      if (escogerCuenta === 1) {
        let meterDinero = Number(
          prompt("¿Cuánto dinero desea depositar en su cuenta?")
        );
        this.saldo += meterDinero;
        let formaDePago = prompt("¿Ingresarás dinero en efectivo o cheque?");
        if (formaDePago === "Efectivo") {
          efectivo += meterDinero;
        } else if (formaDePago === "Cheque") {
          cheque += meterDinero;
        }
      } else if (escogerCuenta === 2) {
        let meterDinero = Number(
          prompt("¿Cuánto dinero desea depositar en su cuenta?")
        );
        this.saldo2 += meterDinero;
        let formaDePago = prompt("¿Ingresarás dinero en efectivo o cheque?");
        if (formaDePago === "Efectivo") {
          efectivo += meterDinero;
        } else if (formaDePago === "Cheque") {
          cheque += meterDinero;
        }
      }
      console.log(`Actualización de tu cuenta principal: Saldo= ${this.saldo}`);
      console.log(
        `Actualización de tu cuenta secundaria: Saldo= ${this.saldo2}`
      );
      console.log(`Dinero ingresado en efectivo ${efectivo}`);
      console.log(`Dinero ingresado en cheque ${cheque}`);
    }
  }

  transferirDinero() {
    if (this.ingresarCajero()) {
      let origenTransferencia = Number(
        prompt(
          "Desde que cuenta quieres hacer la transferencia (1) Principal (2) Secundaria"
        )
      );
      if (origenTransferencia === 1) {
        let montoTransferencia = Number(
          prompt("¿Cuanto dinero deseas transferir a la cuenta secundaria?")
        );
        if (montoTransferencia <= this.saldo) {
          this.saldo -= montoTransferencia;
          this.saldo2 += montoTransferencia;

          console.log(
            `Haz transferido ${montoTransferencia} a tu cuenta secundaria`
          );
          console.log(
            `Actualización de tu cuenta secundaria: Saldo= ${this.saldo2}`
          );
          console.log(
            `Actualización de tu cuenta principal: Saldo= ${this.saldo}`
          );
        }
      } else if (origenTransferencia === 2) {
        let montoTransferencia = Number(
          prompt("¡Cuanto dinero deseas transferir a la cuenta principal?")
        );
        if (montoTransferencia <= this.saldo2) {
          this.saldo2 -= montoTransferencia;
          this.saldo += montoTransferencia;

          console.log(
            `Haz transferido ${montoTransferencia} a tu cuenta principal`
          );
          console.log(
            `Actualización de tu cuenta principal: Saldo= ${this.saldo}`
          );
          console.log(
            `Actualización de tu cuenta secundaria: Saldo= ${this.saldo2}`
          );
        }
      }
    }
  }

  consultarSaldo() {
    if (this.ingresarCajero()) {
      let cuentaSaldo = Number(
        prompt(
          "De que cuenta desea consultar el saldo (1) Principal, (2) Secundaria"
        )
      );

      if (cuentaSaldo === 1) {
        console.log(`El saldo de tu cuenta principal es de ${this.saldo}`);
      } else if (cuentaSaldo === 2) {
        console.log(`El saldo de tu cuenta secundaria es de ${this.saldo2}`);
      }
    }
  }
}

const persona1 = new Cliente("Juanjo", 1, 1111, 5000000, 2000000);
const persona2 = new Cliente("Sebas", 2, 2222, 1000000, 600000);
const persona3 = new Cliente("Daniel", 3, 3333, 1500000);
const persona4 = new Cliente("Maria", 4, 4444, 2000000);

persona1.retirarDinero();
