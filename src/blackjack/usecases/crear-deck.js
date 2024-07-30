import _ from "underscore";

// export const miNombre = 'Javi';

/**
 * Esta funcion crea un nuevo deck
 * @param {array<string>} tiposDeCartas ejemplo ['C','D','H','S']
 * @param {array<string>} tiposEspeciales ejemplo ['A','J','Q','K']
 * @returns {array<string>} retorna un nuevo deck de cartas
 */

export const crearDeck = (tiposDeCartas, tiposEspeciales) => {

    if (!tiposDeCartas || tiposDeCartas.length<=0) throw new Error('tiposDeCartas es obligatorio y debe tener elementos');
    if (!tiposEspeciales || tiposEspeciales.length<=0) throw new Error('tiposEspeciales es obligatorio y debe tener elementos');

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCartas ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCartas ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    return deck;
}

// export default crearDeck;