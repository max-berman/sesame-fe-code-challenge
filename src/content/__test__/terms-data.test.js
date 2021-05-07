import termsData from '../terms-data'

test('terms data should be array', () => {
	expect(Array.isArray(termsData)).toBe(true)
})
