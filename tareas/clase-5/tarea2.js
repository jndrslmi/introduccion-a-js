//console.log('hola')

//TAREA 2: En otro archivo html (no Index) y otro archivo js (no tarea-clase-5.js),
// creá un formulario que capture el primer nombre, segundo nombre, 
// apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!

$botonEnviar = document.querySelector('button')

$botonEnviar.onclick = function(){

    let nombreUsuario = document.querySelector('#nombre-de-usuario').value;

    let apellidoUsuario = document.querySelector('#apellido-de-usuario').value;
   // console.log(nombreUsuario)
   // console.log(apellidoUsuario)

   let $titulo = `Hola Sr. ${nombreUsuario} ${apellidoUsuario}`;
   document.querySelector('h1').innerText = $titulo;

    //console.log($titulo);
    return false;
}
