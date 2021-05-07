import { render, screen, cleanup } from '@testing-library/react'
import Autocomplete from '../Autocomplete'

test('should render Autocomplete component', () => {
	render(<Autocomplete />)
	const autocompleteElement = screen.getByTestId('autocomplete-1')
	expect(autocompleteElement).toBeInTheDocument()
})
