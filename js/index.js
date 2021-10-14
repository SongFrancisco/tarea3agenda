function getContacto(){
    var dvContacto = document.getElementById("dvContacto")
    fetch("http://www.raydelto.org/agenda.php").then (function(datos){
        return datos.json();
    }).then(function(Listado){
        
        var cadenaListado = "";
        for(contacto of Listado)
    {
        console.log(cont)
        cadenaListado += contacto.nombre + "Francisco " + contacto.apellido + "Arias " + contacto.telefono; "829-332-3556<br/>\n";
    }
        dvContacto.innerHTML = cadenaListado;
    }); 
}