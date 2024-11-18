import React, { useEffect, useState } from 'react'
import Navbar from './components/UI/Navbar/Navbar'
import AppRouter from './components/AppRouter'
import { AuthContext } from './context'

export function App() {
	const [isAuth, setIsAuth] = useState(false)
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		if (localStorage.getItem('auth')) {
			setIsAuth(true)
		}
		setIsLoading(false)
	}, [])
	return (
		<AuthContext.Provider
			value={{
				isAuth,
				setIsAuth: setIsAuth,
				isLoading,
			}}
		>
			<Navbar />
			<AppRouter />
		</AuthContext.Provider>
	)
}
export default App

//  router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         element: <PrivateRouter />,
//         children: [
//           { path: "posts", element: <Posts /> },
//           { path: "about", element: <About /> },
//         ],
//       },
//     ],
//   },
//   { path: "login", element: <Login /> },
//   { path: "*", element: <ErrorPage /> },
// ]);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );

/* <BrowserRouter>
<Routes>
<Route path = "/about" element={<About/>}/>
</Routes>
</BrowserRouter>

2:19:27    
Вместо <Switch> используется <Routes>

2:20:51
Вместо <Redirect> использовал <Route>
<Route path="*" element={<Error />} />

2:23:05 (Вместо useHistory() теперь используется useNavigate()
 const navigate = useNavigate()
  function transitToPost(id) {
    navigate(`/posts/${id}`, { replace: true })
  }
//
<MyButton onClick={() => transitToPost(props.post.id)}>
          Открыть
        </MyButton>
  
2:25:09
Пропс exact больше не нужен <Route path="/posts/:id" element={<PostIdPage />} />

2:34:49(Работа с декомпозицией файлов):AppRouter.jsx
return (
    <Routes>
      {routes.map(route =>
        <Route exact={route.exact}
          path={route.path}
          element={route.element} />
      )}
    </Routes>
  )

И файлом router.js У автора это файл по пути ../src/Router/index.js
export const routes = [
  { path: "/about", element: <About />, exact: true },
  { path: "/posts", element: <Posts />, exact: true },
  { path: "/posts/:id", element: <PostIdPage />, exact: true },
  { path: "/", element: <Posts />, exact: true },
  { path: "*", element: <Error />, exact: true },
]; */
