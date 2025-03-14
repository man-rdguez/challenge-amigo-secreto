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
        alert( "Por favor, ingrese un nombre valido." );
    }
    else {
        // Guardamos el nombre del amigo en el array de amigos
        nombres.push( nombre );

        // Obtenemos la referencia a la lista no ordenada, que contiene los nombres de amigos
        let listaAmigos  = document.getElementById('listaAmigos' );

        // Creamos el elemento list item el cual contendra el nombre proporcionado
        itemAmigo = document.createElement( "li" );

        // Asignamos el nombre del amigo al list item creado
        itemAmigo.innerHTML = nombre;

        // Incluimos el nombre del amigo a la lista de amigos que se mostrara debajo del cuadro de texto.
        listaAmigos.appendChild( itemAmigo );

        // Limpiamos el cuadro de texto, de tal forma que si se desea incluir otro nombre en la lista,
        // no sea necesario borrar el nombre anterior manualmente
        amigo.value = '';
    }
}

