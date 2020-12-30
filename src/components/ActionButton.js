import React, { useState, useCallback } from 'react'

function ActionButton(props) {
	const { SVG, value } = props

	return (
		<div
			onClick={props.event}
			className={`${props.reversed ? 'reversed' : ''} ${
				props.isPaused ? 'paused' : ''
			}`}
		>
			<SVG />
			<span>{value}</span>
		</div>
	)
}

export default ActionButton