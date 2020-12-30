import boardVariables from './utils/boardVariables'
import setMatrix from './utils/setMatrix'
import { COLS, ROWS } from './utils/boardVariables'
import randomNumber from './utils/randomNumber'
import randomTetrisPiece from './utils/randomTetrisPiece'

function setDefaultState() {
  return {
    isPaused: false,
    isGameOver: false,
    inGame: false,
    points: 0,
    ctx: null,
    pos_x: 2 + randomNumber(0, COLS / 2),
		pos_y: -1,
    board: setMatrix(ROWS, COLS),
    nextTetrisPiece: randomTetrisPiece(),
		currentTetrisPiece: randomTetrisPiece()
  }
}

export default setDefaultState