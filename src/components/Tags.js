import React from 'react'
import styles from './Tags.module.css'

export default function Tags({ tags, setTags }) {
	function handleRemoveTag(tag, e) {
		e.preventDefault()
		const filteredTags = tags.filter(
			(currentTag) => currentTag.toLowerCase() !== tag.toLowerCase()
		)

		setTags(filteredTags)
	}
	return (
		tags.length > 0 && (
			<ul className={styles.tags}>
				{tags.map((tag) => (
					<li key={tag}>
						<div>{tag}</div>
						<button onClick={(e) => handleRemoveTag(tag, e)}>&times;</button>
					</li>
				))}
			</ul>
		)
	)
}
