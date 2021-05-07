import React from 'react'
import styles from './SuggestionList.module.css'

function highlightSearchTerm(string, query) {
	const regex = new RegExp(query, 'gi')
	return {
		__html: string.replace(regex, (match) => `<mark>${match}</mark>`),
	}
}

export default function SuggestionList({
	toShowSuggestionList,
	filteredOptions,
	activeTerm,
	handleTermClick,
	searchValue,
}) {
	return (
		toShowSuggestionList && (
			<ul className={styles.dropDownList}>
				{filteredOptions.map((term, i) => (
					<li
						key={term}
						onClick={() => handleTermClick(term)}
						className={i === activeTerm ? styles.active : undefined}
					>
						<div
							dangerouslySetInnerHTML={highlightSearchTerm(term, searchValue)}
						/>
					</li>
				))}
			</ul>
		)
	)
}
