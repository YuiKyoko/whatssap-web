window.addEventListener("load", function() {
function enviar(evento, mensaje){ 
  var mensaje; 
  mensaje.addEventListener("enviar");
     
    if (evento.enviar) 
        mensaje = evento.enviar; 
    else if (evento.which) 
        mensaje = evento.which; 
    else 
        return false; 
         
    if (mensaje == 100) mensaje.submit(); 

    return true; 
} 

function hora(content){
 	var fecha = new Date();
	var hora = fecha.getHours();
	var min = fecha.getMinutes();
	var almacenaHora = document.createElement("div");
		almacenaHora.classList.add("hora");
	    almacenaHora.innerText = hora + ":" + min;
	    almacenaHora.appendChild(mensaje);
  return hora;
}

});


