// Autor: Fco. Javier Pérez Patrón
// Version: 1.0.0

// Validamos el campo nombre con la expresión regular directamente
function validarNombre() {
  let nombre = document.getElementById("campoNombre");
  let name = nombre.value.trim();
  if (name === "" || /^[A-Z-ZñÑáāéíóúüÁÉÍÓÚÜ]+$/i.test(name)) {
    document.getElementById("errNombre").innerHTML = "Nombre correcto";
    document.getElementById("errNombre").style.color = "green";
  } else {
    document.getElementById("errNombre").innerHTML = "Nombre erróneo";
    document.getElementById("errNombre").style.color = "red";
  }
}

function validarEmail() {
  // Primero creamos la instancia compoMail de la clase RegExp con nuestra expresión 
  var campoMail = new RegExp(/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/);
  var mail = document.getElementById("campoEmail").value;
  // Si encontramos los elementos en la cadena, la función devolverá true. Si no, false 
  if (mail.match(campoMail)) {
    document.getElementById("errMail").innerHTML = "Email correcto";
    document.getElementById("errMail").style.color = "green";
  } else {
    document.getElementById("errMail").innerHTML = "Email erróneo";
    document.getElementById("errMail").style.color = "red";
  }
}

// Validamos que la edad esté dentro de un rango válido, ya que ya ha sido validada al ser campo numérico
function validarEdad() {
  let edad = document.getElementById("campoEdad").value;
  if (edad >= 120 || edad <= 0) {
    document.getElementById("errEdad").innerHTML = "Edad errónea";
    document.getElementById("errEdad").style.color = "red";
  } else {
    document.getElementById("errEdad").innerHTML = "Edad correcta";
    document.getElementById("errEdad").style.color = "green";
  }
}