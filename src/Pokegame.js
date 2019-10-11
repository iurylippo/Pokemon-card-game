import React, { Component } from 'react'
import Pokedex from './Pokedex';

class Pokegame extends Component {

    static defaultProps = {
        pokemon : [
            {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
            {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
            {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
            {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
            {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
            {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
            {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
            {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
          ]
    };

    render() {
        let pokemon = this.props.pokemon
        let hand1 = [];
        let hand2 = [ ...pokemon ];

        while(hand1.length < hand2.length) {
            let randIndex = Math.floor(Math.random() * hand2.length);
            let newHand = hand2.splice(randIndex, 1)[0];
            hand1.push(newHand);
        }

        let totalHand1 = hand1.reduce((total, pokemon) => total + pokemon.base_experience, 0);


        let totalHand2 = hand2.reduce((total, pokemon) => total + pokemon.base_experience, 0);

        return (
            <div>
                <Pokedex pokemon={hand1} total={totalHand1} isWinner={totalHand1 > totalHand2} />
                <Pokedex pokemon={hand2} total={totalHand2} isWinner={totalHand2 > totalHand1} />
            </div>
        )
    }
}

export default Pokegame;