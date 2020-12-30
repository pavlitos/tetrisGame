import React from 'react'

import './Modal.css';

function Modal(props) {
	return (
    <div>
      <button classname= 'button'  onClick={props.handleStartGame}>
        START GAME
      </button>
        {console.log('Propos', props)}
    </div>
	)
}

export default Modal