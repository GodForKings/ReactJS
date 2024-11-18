import React, { useContext } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { publicRoutes, privateRoutes } from '../router/routers.js'
import { AuthContext } from '../context'
import Loader from './UI/Loader/Loader.jsx'

const AppRouter = () => {
	const { isAuth, isLoading } = useContext(AuthContext)

	if (isLoading) {
		return <Loader></Loader>
	}
	return isAuth ? (
		<Routes>
			{privateRoutes.map((route, idx) => (
				<Route
					key={idx}
					path={route.path}
					element={route.element}
					exact={route.exact}
				/>
			))}
		</Routes>
	) : (
		<Routes>
			{publicRoutes.map((route, idx) => (
				<Route
					key={idx}
					path={route.path}
					element={route.element}
					exact={route.exact}
				/>
			))}
		</Routes>
	)
}

export default AppRouter
