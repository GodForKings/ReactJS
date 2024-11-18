import React, { useState } from 'react'
import MyButton from './UI/button/MyButton'
import MyInput from './UI/input/MyInput'

const PostForm = ({ create }) => {
	const [post, setPost] = useState({ title: '', body: '' })

	function addNewPost(e) {
		e.preventDefault()
		const newPost = {
			...post,
			id: Date.now(),
		}
		create(newPost)
		setPost({ title: '', body: '' })
	}

	return (
		<div>
			<form>
				{/* Управляемый компонент */}
				<MyInput
					type='text'
					onChange={e => setPost({ ...post, title: e.target.value })}
					value={post.title}
					placeholder='Введите название поста'
				></MyInput>

				<MyInput
					value={post.body}
					type='text'
					placeholder='Введите описание'
					onChange={e => setPost({ ...post, body: e.target.value })}
				></MyInput>
				<MyButton onClick={addNewPost}>Добавить</MyButton>
			</form>
		</div>
	)
}

export default PostForm
