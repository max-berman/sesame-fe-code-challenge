import React, { useState, useEffect, useRef } from 'react'
import styles from './Autocomplete.module.css'
import Tags from '../components/Tags'
import SuggestionList from '../components/SuggestionList'
import TextInput from '../components/TextInput'
import TERMS from '../content/terms-data'

const SEARCH_VALUE_LENGTH = 2

function Autocomplete() {
	const node = useRef()
	const [searchValue, setSearchValue] = useState('')
	const [activeTerm, setActiveTerm] = useState(0)
	const [filteredOptions, setFilteredOptions] = useState([])
	const [tags, setTags] = useState([])

	const toShowSuggestionList =
		filteredOptions?.length > 0 && searchValue?.length >= SEARCH_VALUE_LENGTH

	useEffect(() => {
		if (searchValue && typeof window !== `undefined`) {
			window.addEventListener('mousedown', handleClickOutside)
			return
		}
		window.removeEventListener('mousedown', handleClickOutside)

		return () => {
			if (typeof window !== `undefined`) {
				window.removeEventListener('mousedown', handleClickOutside)
			}
		}
	}, [searchValue])

	const handleClickOutside = (e) => {
		if (node.current.contains(e.target)) {
			// inside click
			return
		}
		// outside click
		setSearchValue('')
	}

	function handleTermClick(item) {
		if (!tags.some((tag) => tag === item)) {
			// Avoid duplication
			setTags((prevState) => [...prevState, item])
		}
		setSearchValue('')
		setActiveTerm(0)
	}

	return (
		<section className={styles.formContainer}>
			<form
				data-testid='autocomplete-1'
				onSubmit={(e) => e.preventDefault()}
				ref={node}
			>
				<fieldset className={styles.inputGroup}>
					<TextInput
						{...{
							searchValue,
							toShowSuggestionList,
							handleTermClick,
							activeTerm,
							setActiveTerm,
							filteredOptions,
							setSearchValue,
							setFilteredOptions,
							terms: TERMS,
							placeholder: 'What are you looking for?',
						}}
					/>
				</fieldset>
				<SuggestionList
					{...{
						toShowSuggestionList,
						filteredOptions,
						activeTerm,
						handleTermClick,
						searchValue,
					}}
				/>
			</form>
			<Tags {...{ tags, setTags }} />
		</section>
	)
}
export default Autocomplete
