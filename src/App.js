import React, { useReducer, useEffect, useCallback, useRef } from 'react'

import './App.css';
import GameActions from './components/GameActions'
import Modal from './components/Modal'

import tetrisReducer from './tetrisReducer'
import setDefaultState from './setDefaultState'
import { SQ, COLS, ROWS } from './utils/boardVariables'

const defaultState = setDefaultState()

function App(props) {
  const [store, dispatch] = useReducer(tetrisReducer, defaultState)
  let canvas = useRef(null)

  useEffect(event => {
    if (canvas) {
      let ctx = canvas.getContext('2d')
      dispatch({ type: 'INIT_CTX', ctx })
      dispatch({ type: 'DRAW_BOARD' })
    }
  }, [store.board])

  const handleKeyPress = useCallback(e => {
    switch (e.code) {
			case 'KeyP': {
        console.log('keyP');
				return dispatch({ type: 'TOGGLE_PAUSE' })
			}
			case 'ArrowLeft': {
				return dispatch({ type: 'MOVE', newPos_x: -1, newPos_y: 0 })
			}
			case 'ArrowUp': {
        console.log('keyUP');
				return dispatch({ type: 'ROTATE' })
			}
			case 'ArrowDown': {
        console.log('keyDown');
				return dispatch({ type: 'MOVE', newPos_x: 0, newPos_y: 1 })
			}
			case 'ArrowRight': {
				return dispatch({ type: 'MOVE', newPos_x: 1, newPos_y: 0 })
			}
			default:
				return
		}
  }, [])

  useEffect(e => {
		if (store.ctx) {
			window.addEventListener('keydown', handleKeyPress)
			return () => {
				window.removeEventListener('keydown', handleKeyPress)
			}
		}
  })

  const handleStartGame = useCallback(e => {
		dispatch({ type: 'START_GAME' })
		// Once you pressed 'START' element moves down
		setTimeout(() => {
			dispatch({ type: 'MOVE', newPos_x: 0, newPos_y: 1 })
		}, 500)
	}, [])

  return (
    <div className="App">
      <canvas
        ref={e => (canvas = e)}
        height={ROWS * SQ}
        width={COLS * SQ}
      />
      {!store.inGame ? (
        <Modal
          handleStartGame={handleStartGame}
          points={store.points}
        />):(
          <GameActions />
        )}
    </div>
  );
}

export default App;
