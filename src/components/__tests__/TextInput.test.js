import { render, screen, cleanup } from '@testing-library/react'
import TextInput from '../TextInput'

describe('TextInput', () => {
	it('should render TextInput component', () => {
		const { container } = render(<TextInput />)
		expect(container.firstChild).toBeInTheDocument()
	})
})
