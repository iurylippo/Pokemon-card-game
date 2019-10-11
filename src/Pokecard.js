import React, {Component} from 'react';
import './Pokecard.css';
import concatZero from './helpers';
const POKE_API = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/`;

class Pokecard extends Component {
    render() {
        let {id, name, type, exp} = this.props;
        let imgSrc = `${POKE_API}${concatZero(id)}.png`;
        
        return (
         <div className="Pokecard">
             <h1 className="Pokecard-title">{name}</h1>
             <div className="Pokecard-img-box">
                <img className="Pokecard-img" src={imgSrc} alt={name}/>
             </div>
             <p className="Pokecard-desc">Type: {type}</p>
             <p className="Pokecard-desc">Exp: {exp}</p>
         </div>   
        )
    }
}

export default Pokecard;