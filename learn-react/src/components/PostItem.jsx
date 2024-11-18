import React from 'react'
import MyButton from './UI/button/MyButton'
import { useNavigate } from 'react-router-dom'

const PostItem = props => {
	const router = useNavigate()

	function transitToPost(id) {
		router(`/posts/${id}`, { replace: true })
	}

	return (
		<div className='post'>
			<div className='post__content'>
				<strong>
					{props.post.id}.{props.post.title}
				</strong>
				<div>{props.post.body}</div>
			</div>
			<div className='post__btn'>
				<MyButton onClick={() => transitToPost(props.post.id)}>
					Open Post
				</MyButton>
				<MyButton onClick={() => props.remove(props.post)}>
					Delete Post
				</MyButton>
			</div>
		</div>
	)
}

export default PostItem
