import { pedirCarta, valorCarta, crearCartaHTML } from './';


/**
 * 
// turno de la computadora
 * @param {number} puntosMinimos puntos minimos que la pc necesita para ganar 
 * @param {HTMLElement>} puntosHTML elemento HTML para mostrar los puntos  
 * @param {HTMLElement>} divCartasComputadora elemento HTML para mostrar las cartas  
 * @param {Array<string>} deck 
 */

export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck=[]) => {

    if(!puntosMinimos) throw new Error('puntos minimos son necesarios');
    if(!puntosHTML) throw new Error('puntosHTML son necesarios');
    if(!deck) throw new Error('deck es necesario');

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        // <img class="carta" src="assets/cartas/2C.png">
        const imgCarta = crearCartaHTML(carta)
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}
