/*
 El principal objetivo de este desafío es fortalecer tus habilidades en lógica
de programación. Aquí deberás desarrollar la lógica para resolver el problema.
*/

let nombres = [];

function agregarAmigo() {

    // Obtenemos la referencia al cuadro de texto.
    let amigo = document.getElementById('amigo');

    // Obtenemos el nombre proporcionado
    let nombre = amigo.value;

    // Validamos que se haya capturado un nombre
    if ( nombre == '' ) {
        alert( "Por favor, inserte un nombre." );
    }
    else {
        // Guardamos el nombre del amigo en el array de amigos
        nombres.push( nombre );

        // Limpiamos el cuadro de texto, de tal forma que si se desea incluir otro nombre en la lista,
        // no sea necesario borrar el nombre anterior manualmente
        amigo.value = '';
    }

}

