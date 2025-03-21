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

        // En caso de haberse generado previamente un amigo secreto, limpiamos el nombre mostrado
        document.getElementById( "resultado" ).innerHTML = "";

        // Actualizamos la lista de amigos que se mostrara debajo del cuadro de texto
        actulizaListaDeAmigos()
    }

}

function actulizaListaDeAmigos() {
    // Limpiamos la lista de amigos
    limpiaListaDeAmigos();

    // Iteramos sobre el arreglo que contiene los nombres de los amigos
    for ( const nombre of nombres ) {

        // Creamos el elemento <li> el cual contendra el nombre del amigo
        listItemAmigo = document.createElement( "li" );

        // Asignamos el nombre del amigo al list item creado
        listItemAmigo.innerHTML = nombre;

        // Incluimos el nombre del amigo a la lista de amigos que se mostrara debajo del cuadro de texto.
        listaAmigos.appendChild( listItemAmigo );
    }

}

function limpiaListaDeAmigos() {
    // Obtenemos el elemento correspondiente a la lista que mostrará los amigos
    let listaAmigos  = document.getElementById('listaAmigos' );

    // Limpiamos la lista de amigos
    listaAmigos.innerHTML = '';
}

function sortearAmigo() {

    // Limpiamos la lista de amigos, previo a mostrar el amigo secreto
    limpiaListaDeAmigos();

    // Siempre y cuando la lista de amigos contenga elementos
    if ( nombres.length > 0 ) {
        // Obtenemos un indice aleatorio, el cual sera nuestro amigo secreto.
        // Dentro del rango 0..numero de elementos en el arreglo de nombres
        indice = Math.floor( Math.random() * nombres.length );

        // Mostramos el amigo secreto
        document.getElementById( "resultado" ).innerHTML = nombres[ indice ];
    }

}