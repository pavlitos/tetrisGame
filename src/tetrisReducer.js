import setDefaultState from './setDefaultState'
import paintMatrix from './utils/paintMatrix'
import checkCollision from './utils/checkCollision'
import { SQ, COLS, ROWS } from './utils/boardVariables'

function tetrisReducer(state, action) {
  switch(action.type) {
    case 'START_GAME': {
			return {
				...setDefaultState(),
				inGame: true,
				isGameOver: false
			}
    }
		case 'INIT_CTX': {
			return { ...state, ctx: action.ctx }
		}
    case 'DRAW_BOARD': {
			const { ctx, board } = state
			ctx.clearRect(0, 0, COLS * SQ, ROWS * SQ)
			paintMatrix('drawBoard', ctx, board, 0, 0)
			return state
    }
    // Keyboard Movements
    case 'MOVE': {
      console.log('action', action);
      console.log('state', state);

      const { newPos_x, newPos_y } = action
      const { isPaused, pos_x, pos_y, ctx, board, currentTetrisPiece  }= state
      const { matrix, color } = currentTetrisPiece
      let coord_x = newPos_x + pos_x
      let coord_y = newPos_y + pos_y
      let hasCollision = checkCollision(coord_x, coord_y, matrix, board)
      if(isPaused) {
        return state;
      }
      if(hasCollision) {
        console.log('hasCollision');
        paintMatrix('draw', ctx, matrix, pos_x, pos_y, color)

      }else {
        console.log('NOCollision');
        paintMatrix('clear', ctx, matrix, pos_x, pos_y, color)
				paintMatrix('draw', ctx, matrix, coord_x, coord_y, color)
				return { ...state, pos_x: coord_x, pos_y: coord_y }
      }
    }
    case 'ROTATE': {
    }
    case 'TOGGLE_PAUSE': {
    }
    default: {
			return state
		}
  }
}

export default tetrisReducer