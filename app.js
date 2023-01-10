function turnos(nombreApellido, fecha, horario, servicio) {
  if (horario >= 8 && horario <= 20) {
    switch (servicio) {
      case "1":
        return (
          clienteIngresado(nombreApellido, fecha, horario, servicio) +
          "\nEl costo del Micro Simple es de: $1000."
        );

      case "2":
        return (
          clienteIngresado(nombreApellido, fecha, horario, servicio) +
          "\nEl costo del Micro Semi es de: $2000."
        );

      case "3":
        return (
          clienteIngresado(nombreApellido, fecha, horario, servicio) +
          "\nEl costo de Micro Cama es de: $3000."
        );

      default:
        return "Usted ingreso una opcion incorrecta, vuelva a ingresar los datos nuevamente";
    }
  } else {
    alert("Usted ingreso un horario incorrecto, vuelva a ingresar sus datos");
  }
}

function clienteIngresado(nombreApellido, fecha, horario, servicio) {
  return (
    "Su nombre y apellido es: " +
    nombreApellido +
    "\n" +
    "Su viaje es el dia: " +
    fecha +
    "\n" +
    "En el horario de: " +
    horario +
    " hs \n" +
    "El micro elejido es: " +
    servicio
  );
}

let consulta = prompt("Desea agendar un viaje? si/no");
while (consulta === "si") {
  let nombreApellido = prompt("Ingrese Nombre y Apellido");
  let fecha = Number(prompt("Ingrese una fecha de viaje(dd/mm/aa)"));
  let horario = Number(prompt("Ingrese un horario de viaje (h)"));
  let servicio = prompt(
    "Ingrese un Serivico de Micro: \n 1 - Simple \n 2 - Micro Semi Cama \n 3 - Cama"
  );
  alert(turnos(nombreApellido, fecha, horario, servicio));
  consulta = prompt("Desea agendar otro viaje? si/no");
}
alert("Gracias por tu visita, Buen viaje!");
