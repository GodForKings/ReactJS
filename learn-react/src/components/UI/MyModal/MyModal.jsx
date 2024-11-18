import React from 'react'
import classes from './MyModal.module.css'

const MyModal = ({ children, visible, setVisible }) => {
	const rootClasses = [classes.myModal]
	if (visible) {
		rootClasses.push(classes.active)
	}

	return (
		<div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
			<div
				className={classes.myModalContent}
				onClick={e => e.stopPropagation()} // Отключаем всплытие события
			>
				{children}
			</div>
		</div>
	)
}

export default MyModal
