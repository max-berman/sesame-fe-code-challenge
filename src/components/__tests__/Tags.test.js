import { render, screen, cleanup } from '@testing-library/react'
import Tags from '../Tags'

const items = ['tag1', 'tag2', 'tag3']

describe('TextInput', () => {
	it('should render Tags component', () => {
		const { container } = render(<Tags tags={items} />)
		expect(container.firstChild).toBeInTheDocument()
	})
})
