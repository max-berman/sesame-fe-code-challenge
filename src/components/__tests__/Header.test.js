import { render, screen, cleanup } from '@testing-library/react'
import Header from '../Header'

describe('Header', () => {
	it('should render Header component', () => {
		const { container } = render(<Header />)
		expect(container.firstChild).toBeInTheDocument()
	})
})
