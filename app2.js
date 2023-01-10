let nombreApellido = prompt("Ingrese su Nombre y Apellido");
let fecha = Number(prompt("Ingrese la fecha del Viaje"));
let horario = Number(prompt("Ingrese un horario de Salida"));
let servicio = prompt(
  "Ingrese una opcion del Micro: \n 1 - Simple \n 2 - SemiCama \n 3 - Cama"
);

function clienteIngresado(nombreApellido, fecha, validarHora, servicio) {
  return (
    "Su Nombre y Apellido es: " +
    nombreApellido +
    "\nLa fecha ingresada es: " +
    fecha +
    "\n" +
    alert(validarHora) +
    "\nOpcion de servicio del Micro: " +
    servicio
  );
}

function validarHorario(horario) {
  if (horario >= 8 && horario <= 20) {
    return "El horario ingresado del viaje es: " + horario;
  } else {
    return "horario incorrecto";
  }
}

let datosCliente = clienteIngresado(
  nombreApellido,
  fecha,
  validarHora,
  servicio
);
alert(datosCliente);

let validarHora = validarHorario(horario);
alert(validarHora);
