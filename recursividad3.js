class Hotel {
    constructor() {
      this.individuales = [];
      this.dobles = [];
      this.familiares = [];
      this.reservas = [];
      this.ocupacionTotal = 0;
      this.personasOcupando = 0;
      this.mascotas = 0;
    }
  
    agregarReserva(reserva) {
      if (this.puedeAgregarReserva(reserva)) {
        this.reservas.push(reserva);
        this.ocupacionTotal += reserva.numPersonas;
        this.personasOcupando += reserva.numPersonas;
        if (reserva.mascota) {
          this.mascotas += 1;
        }
      } else {
        console.log('No se puede agregar esta reserva debido a limitaciones de habitaciones o capacidad.');
      }
    }
  
    puedeAgregarReserva(reserva) {
      const { tipoHabitacion, numPersonas, mascota } = reserva;
      if (tipoHabitacion === 'individual' && this.individuales.length < 3 && numPersonas <= 2) {
        return true;
      } else if (tipoHabitacion === 'doble' && this.dobles.length < 3 && numPersonas <= 4) {
        return true;
      } else if (tipoHabitacion === 'familiar' && this.familiares.length < 3 && numPersonas <= 6 && mascota) {
        return true;
      }
      return false;
    }
  
    mostrarEstadisticas() {
      console.log('Estadísticas del Hotel:');
      console.log('-----------------------');
      console.log(`Número total de reservas: ${this.reservas.length}`);
      console.log(`Número total de personas ocupando el hotel: ${this.personasOcupando}`);
      console.log(`Número de mascotas en el hotel: ${this.mascotas}`);
      console.log('Reservas:');
      this.reservas.forEach((reserva, index) => {
        console.log(`Reserva ${index + 1}:`);
        console.log(`  Nombre: ${reserva.nombre}`);
        console.log(`  País de origen: ${reserva.paisOrigen}`);
        console.log(`  Número de personas: ${reserva.numPersonas}`);
        console.log(`  Periodo de estadía: ${reserva.periodoEstadia}`);
        console.log(`  Mascota: ${reserva.mascota ? 'Sí' : 'No'}`);
      });
    }
  }
  
  class Reserva {
    constructor(nombre, paisOrigen, tipoHabitacion, fumador, mascota, numPersonas, periodoEstadia) {
      this.nombre = nombre;
      this.paisOrigen = paisOrigen;
      this.tipoHabitacion = tipoHabitacion;
      this.fumador = fumador;
      this.mascota = mascota;
      this.numPersonas = numPersonas;
      this.periodoEstadia = periodoEstadia;
    }
  }
  
  const miHotel = new Hotel();
  
  const reserva1 = new Reserva('Juan', 'España', 'individual', false, false, 2, '10/10/2023 - 10/15/2023');
  const reserva2 = new Reserva('Ana', 'Francia', 'familiar', false, true, 4, '11/05/2023 - 11/10/2023');
  const reserva3 = new Reserva('Pedro', 'Italia', 'doble', true, false, 3, '09/20/2023 - 09/25/2023');
  
  miHotel.agregarReserva(reserva1);
  miHotel.agregarReserva(reserva2);
  miHotel.agregarReserva(reserva3);
  
  miHotel.mostrarEstadisticas();