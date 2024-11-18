import React from 'react'
import { getPagesArray } from '../../../utils/pages'

const Pagination = ({ totalPages, page, changePage }) => {
	let pageArray = getPagesArray(totalPages)
	return (
		<div className='page__wrapper'>
			{pageArray.map(p => (
				<span
					key={p}
					onClick={() => changePage(p)}
					className={page === p ? 'page__button page__current' : 'page__button'}
				>
					{p}
				</span>
			))}
		</div>
	)
}

export default Pagination
