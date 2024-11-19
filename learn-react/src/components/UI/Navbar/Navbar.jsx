import React from 'react'
import { Link } from 'react-router-dom'
import MyButton from '../button/MyButton'
import { useContext } from 'react'
import { AuthContext } from '../../../context'

const Navbar = () => {
	const { isAuth, setIsAuth } = useContext(AuthContext)
	return (
		<div className='navbar'>
			<ul className='navbar__links'>
				<li>
					<Link to='/about'>Home</Link>
				</li>
				<li>
					<Link to='/posts'>Posts</Link>
				</li>
				{isAuth ? (
					<MyButton
						onClick={() => {
							setIsAuth(false)
							localStorage.removeItem('auth')
						}}
					>
						Out
					</MyButton>
				) : (
					<li>
						<Link to='/'>Login</Link>
					</li>
				)}
			</ul>
		</div>
	)
}

export default Navbar
