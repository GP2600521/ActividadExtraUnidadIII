var mes = parseInt(prompt("Ingrese el mes de Nacimiento:"));
//

switch (mes) {
  case 1:
    var dia = parseInt(prompt("Ingrese el día"));
    alert("El mes es Enero");
    if(dia > 20 && dia <32 ){
      alert("El signo es Acuario");
    }else{
      alert("El signo es Capricornio");
    }
    break;
  case 2:
    var dia = parseInt(prompt("Ingrese el día"));
    alert("El mes es Febrero");
    if(dia > 19 && dia <32 ){
      alert("El signo es Piscis");
    }else{
      alert("El signo es Acuario");
    }
    break;
  case 3:
    var dia = parseInt(prompt("Ingrese el día"));
    alert("El mes es Marzo");
    if(dia > 20 && dia <32 ){
      alert("El signo es Aries");
    }else{
      alert("El signo es Piscis");
    }
    break;
  case 4:
    var dia = parseInt(prompt("Ingrese el día"));
    alert("El mes es Abril");
    if(dia > 20 && dia <32 ){
      alert("El signo es Tauro");
    }else{
      alert("El signo es Aries");
    }
    break;
  case 5:
    var dia = parseInt(prompt("Ingrese el día"));
    alert("El mes es Mayo");
    if(dia > 20 && dia <32 ){
      alert("El signo es Geminis");
    }else{
      alert("El signo es Tauro");
    }
    break;
  case 6:
    var dia = parseInt(prompt("Ingrese el día"));
    alert("El mes es Junio");
    if(dia > 20 && dia <32 ){
      alert("El signo es Cancer");
    }else{
      alert("El signo es Geminis");
    }
    break;
  case 7:
    var dia = parseInt(prompt("Ingrese el día"));
    alert("El mes es Julio");
    if(dia > 22 && dia <32 ){
      alert("El signo es Leo");
    }else{
      alert("El signo es Cancer");
    }
    break;
  case 8:
    var dia = parseInt(prompt("Ingrese el día"));
    alert("El mes es Agosto");
    if(dia > 23 && dia <32 ){
      alert("El signo es Virgo");
    }else{
      alert("El signo es Leo");
    }
    break;
  case 9:
    var dia = parseInt(prompt("Ingrese el día"));
    alert("El mes es Septiembre");
    if(dia > 22 && dia <32 ){
      alert("El signo es Libra");
    }else{
      alert("El signo es Virgo");
    }
    break;
  case 10:
    var dia = parseInt(prompt("Ingrese el día"));
    alert("El mes es Octubre");
    if(dia > 23 && dia <32 ){
      alert("El signo es Escorpio");
    }else{
      alert("El signo es Libra");
    }
    break;
  case 11:
    var dia = parseInt(prompt("Ingrese el día"));
    alert("El mes es Noviembre");
    if(dia > 22 && dia <32 ){
      alert("El signo es Sagitario");
    }else{
      alert("El signo es Escorpio");
    }
    break;
  case 12:
    var dia = parseInt(prompt("Ingrese el día"));
    alert("El mes es Diciembre");
    if(dia > 21 && dia <32 ){
      alert("El signo es Capricornio");
    }else{
      alert("El signo es Sagitario");
    }
    break;
  default:
    alert("Número inválido");
}



