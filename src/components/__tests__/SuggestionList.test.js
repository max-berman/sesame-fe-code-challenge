import { render, screen, cleanup } from '@testing-library/react'
import SuggestionList from '../SuggestionList'

const items = ['item1', 'item2', 'item3']

describe('SuggestionList', () => {
	it('should render SuggestionList component', () => {
		const { container } = render(
			<SuggestionList toShowSuggestionList={true} filteredOptions={items} />
		)
		expect(container.firstChild).toBeInTheDocument()
	})
})
