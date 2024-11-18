import React from 'react'
import PostItem from './PostItem'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

const PostList = ({ posts, titlePost, remove }) => {
	if (!posts.length) {
		return <h1>Совпадений нет. . .</h1>
	}

	return (
		<div>
			<h1 style={{ textAlign: 'center' }}>{titlePost}</h1>

			<TransitionGroup>
				{posts.map((postItem, index) => (
					<CSSTransition key={postItem.id} timeout={500} classNames='post'>
						<PostItem
							remove={remove}
							number={index + 1}
							post={postItem}
						></PostItem>
					</CSSTransition>
				))}
			</TransitionGroup>
		</div>
	)
}

export default PostList
