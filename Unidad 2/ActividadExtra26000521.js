let jugar = true;

while(jugar){
  var numeroX = Math.floor(Math.random() * 9) + 1;
  var numUsuario;
  do{
    numUsuario = parseInt(prompt("Ingrese un número del 3 al 6:"));  
  }while(numUsuario < 3 || numUsuario > 6);

  var seleccion = prompt("Indica si el número es igual, mayor o menor al que genera la computadora");
  
  var resultado = false;
  if(numUsuario < numeroX && seleccion == "menor"){
    resultado = true;
  } else if(numUsuario > numeroX && seleccion == "mayor"){
    resultado = true;
  } else if(numUsuario == numeroX && seleccion == "igual"){
    resultado = true;
  }

  alert("La selección es: "+ numUsuario + "Y la computadora eligió: " + numeroX);

  if(resultado = true){
    prompt("Elección correcta");
  }else {
    prompt("Elección incorrecta");
  }

  var respuesta = prompt("Desea jugar otra vez?")
  if(respuesta == "Si"){
    jugar = true;
  }else{
    var nombre = prompt("Ingrese su nombre");
    var carnet = prompt ("Ingrese su carnet");
    alert("Su nombre es: " + nombre + "Su carnet es: " + carnet);
    jugar = false;
  }

}