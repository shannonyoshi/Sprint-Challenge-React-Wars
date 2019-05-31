import React from 'react';

import Character from './Character'

const CharacterList = props =>{
    return(
        <div className  = 'character-list'>
        {props.starwarsChars.map(item=>(
            <Character character = {item} 
            />
        ))}
        </div>
    )
}

export default CharacterList;
