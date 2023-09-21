let cost = Number(prompt("Ingrese el costo de la casa"));

function inmobiliaria() {
    let type = 3;  
    while (type > 2 || type<0) {
       type = Number(prompt("1. Usado 2. Nuevo"));
    }
  

  switch (type) {
    case 1: {
      let comisionUsado = cost * 0.1;
      let comisionyo = cost * 0.9;

      alert(
        `Ya que la casa es usada, la inmobiliaria tiene el 10% de la comisión de venta, son ${comisionUsado} y la comision para el empleado es de ${comisionyo}`
      );
      break;
    }
    case 2: {
      let comisionNuevo = cost * 0.12;
      let comisionyo = cost * 0.9;

      alert(
        `Ya que la casa es nueva, tienes el 12% de la comisión de venta, son ${comisionNuevo} y la comision para el empleado es de ${comisionyo}`
      );

      break;
    }
  }
}

inmobiliaria();
