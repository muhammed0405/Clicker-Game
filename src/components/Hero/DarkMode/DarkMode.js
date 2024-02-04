import React from 'react'
import { ReactComponent as Sun} from '../../assets/img/Sun.svg'
import { ReactComponent as Moon } from '../../assets/img/Moon.svg'
import './DarkMode.scss'
import {useDispatch} from 'react-redux'

const DarkMode = () => {
	const dispatch = useDispatch()
	return (
		<div className="dark_mode">
			<input className="dark_mode_input" type="checkbox" id="darkmode-toggle" />
			<label
				className="dark_mode_label"
				htmlFor={'darkmode-toggle'}
				onClick={() => dispatch({ type: 'CHANGE_DARK' })}
			>
				<Sun />
				<Moon />
			</label>
		</div>
	)
}

export default DarkMode
