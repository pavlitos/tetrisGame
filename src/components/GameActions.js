import React from 'react'
import ActionButton from './ActionButton'

import './GameActions.css';

import { ReactComponent as RightSVG } from '../icons/right-arrow.svg'
import { ReactComponent as LeftSVG } from '../icons/left-arrow.svg'
import { ReactComponent as DownSVG } from '../icons/down-arrow.svg'
import { ReactComponent as RotateSVG } from '../icons/rotate.svg'

const actions = [
	{
		name: 'left',
		svg: LeftSVG,
		action: 'handleLeft'
  },
  {
		name: 'right',
		svg: RightSVG,
		action: 'handleRight'
	},
	{
		name: 'down',
		svg: DownSVG,
		action: 'handleDown'
	},
	{
		name: 'rotate',
		svg: RotateSVG,
		action: 'handleRotate',
		uncontinuous: true
	}
]
function GameActions(props) {
	return (
    <div className='ActionsLayout'>
			{actions.map((action, index) => (
				<ActionButton
					key={action.name}
					SVG={action.svg}
					isPaused={props.isPaused}
					value={action.name}
					event={props[action.action]}
					uncontinuous={action.uncontinuous}
				/>
			))}
    </div>
	)
}

export default GameActions