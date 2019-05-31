import React from 'react';
import './StarWars.css';

class Character extends React.Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         starwarsChars:
    //     }
    // }
    render(){
        return(
        <div className='character-card'>
        {console.log(this.props.character)}
        <h3>{this.props.character.name}</h3>
        <h4>Physical Characteristics</h4>
        <p>
            <strong>Hair Color:</strong> {this.props.character.hair_color}
          </p>
          <p>
            <strong>Eye Color:</strong> {this.props.character.eye_color}
          </p>

          <p>
            <strong>Gender:</strong> {this.props.character.gender}
          </p>

          <p>
            <strong>Birth Year:</strong> {this.props.character.birth_year}
          </p>  
          <p>
            <strong>Skin Color:</strong> {this.props.character.skin_color}
          </p>  
          
        </div>
    )}
}

export default Character;