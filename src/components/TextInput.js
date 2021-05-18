import React from 'react'
import styles from './TextInput.module.css'

export default function TextInput({
	searchValue,
	toShowSuggestionList,
	handleTermClick,
	activeTerm,
	setActiveTerm,
	filteredOptions,
	setSearchValue,
	setFilteredOptions,
	terms,
	placeholder,
}) {
	function handleInputChange({ target: { value } }) {
		setSearchValue(value)
		setFilteredOptions(
			terms.filter((res) => res.toLowerCase().indexOf(value.toLowerCase()) > -1)
		)
	}

	function onKeyDown(e) {
		const { keyCode } = e
		const keys = {
			// ENTER
			13: () => toShowSuggestionList && handleTermClick(filteredTerm),
			// UP
			38: () => {
				e.preventDefault()
				return activeTerm !== 0 && setActiveTerm(activeTerm - 1)
			},
			// DOWN
			40: () => {
				e.preventDefault()
				return (
					activeTerm !== filteredOptions.length - 1 &&
					setActiveTerm(activeTerm + 1)
				)
			},
		}
		if (!keys[keyCode] || !toShowSuggestionList) {
			return
		}
		const filteredTerm = filteredOptions[activeTerm]?.trim()
		keys[keyCode]()
	}
	return (
		<input
			autoFocus
			type='text'
			value={searchValue}
			onChange={handleInputChange}
			onKeyDown={onKeyDown}
			placeholder={placeholder}
			className={styles.textInput}
		/>
	)
}
