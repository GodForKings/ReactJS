import React, { useEffect, useRef, useState } from 'react'
import PostService from '../API/PostService'
import Counter from '../components/ClassCounter'
import PostFilter from '../components/PostFilter'
import PostForm from '../components/PostForm'
import PostList from '../components/PostList'
import Loader from '../components/UI/Loader/Loader'
import MyModal from '../components/UI/MyModal/MyModal'
import MyButton from '../components/UI/button/MyButton'
import Pagination from '../components/UI/pagination/Pagination'
import { useFetching } from '../hooks/useFetching'
import { usePosts } from '../hooks/usePosts'
import '../styles/app.css'
import { getPageCount } from '../utils/pages'
import { useObserver } from '../hooks/useObserver'
import MySelect from '../components/UI/select/MySelect'

function Posts() {
	const [posts, setPosts] = useState([])
	// const [likes, setLikes] = useState(5)
	// function boostLVL() {
	// 	setLikes(likes + 1)
	// }
	// function downLVL() {
	// 	setLikes(likes - 1)
	// }
	const [filter, setFilter] = useState({ sort: '', query: '' })
	const [modal, setModal] = useState(false)
	const [totalPages, setTotalPages] = useState(0)
	const [limit, setLimit] = useState(10)
	const [page, setPage] = useState(1)
	const lastElement = useRef()

	const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

	const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
		const response = await PostService.getAll(limit, page)
		setPosts([...posts, ...response.data])
		const totalCount = response.headers['x-total-count']
		setTotalPages(getPageCount(totalCount, limit))
	})

	useObserver(lastElement, page < totalPages, isPostLoading, () => {
		setPage(page + 1)
	})

	const createPost = newPost => {
		setPosts([...posts, newPost])
		setModal(false)
	}

	const changePage = page => {
		setPage(page)
	}

	//Берем Post из компонента наследника
	const removePost = post => {
		setPosts(posts.filter(p => p.id !== post.id))
	}

	// async function fetchPosts() {
	// 	setIsPostLoading(true)
	// 	setTimeout(async () => {
	// 		setIsPostLoading(false)
	// 	}, 2000)
	// }

	useEffect(() => {
		fetchPosts()
	}, [page, limit])

	console.log(totalPages)

	return (
		<div className='App'>
			<MyButton onClick={fetchPosts}>GET POSTs</MyButton>
			<MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
				Create new Post
			</MyButton>
			<MyModal visible={modal} setVisible={setModal}>
				<PostForm create={createPost} />
			</MyModal>

			<PostFilter filter={filter} setFilter={setFilter} />

			<MySelect
				value={limit}
				onChange={value => setLimit(value)}
				defaultValue='Количество элементов на странице'
				options={[
					{ value: 5, name: '5' },
					{ value: 10, name: '10' },
					{ value: 25, name: '25' },
					{ value: -1, name: 'Все' },
				]}
			></MySelect>

			{postError && <h1>Произошла ошибка ${postError}</h1>}
			<PostList
				remove={removePost}
				posts={sortedAndSearchedPosts}
				titlePost={'Информационный баннер'}
			></PostList>
			<div ref={lastElement} style={{ height: 20, background: 'black' }}></div>
			{isPostLoading && <Loader />}
			<Pagination
				page={page}
				changePage={changePage}
				totalPages={totalPages}
			></Pagination>
			<Counter></Counter>
		</div>
	)
}

export default Posts
