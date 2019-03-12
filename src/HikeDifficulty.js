import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faSquare, faCircle} from '@fortawesome/free-solid-svg-icons';

export default function HikeDifficulty (rating) {
    switch (rating) {
        case 'green': return <FontAwesomeIcon icon={faCircle} color='green'/>;
        case 'greenBlue': return <div><FontAwesomeIcon icon={faCircle} color='green'/> <FontAwesomeIcon icon={faSquare} color='blue'/></div>;
        case 'blue': return <FontAwesomeIcon icon={faSquare} color='blue'/>;
        case 'blueBlack': return <div><FontAwesomeIcon icon={faSquare} color='blue' style={{padding: '3px'}}/><FontAwesomeIcon icon={faSquare} color='black' style={{padding: '3px'}}/></div>;
        case 'black': return <FontAwesomeIcon icon={faSquare} color='black'/>;
        case 'dblack': return <div><FontAwesomeIcon icon={faSquare} color='black' style={{padding: '3px'}}/><FontAwesomeIcon icon={faSquare} color='black' style={{padding: '3px'}}/>;</div>
        default: return null;
    }
      

    
}