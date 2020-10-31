import { getContactListService } from './contact'

describe('services/contact tests', () => {
  test('getContactListService should have necessary properties', () => {
    const serviceLimit = 20
    return getContactListService({ limit: serviceLimit })
      .then(response => {
        const example = response.results[0]
        expect(example).toHaveProperty('name.first')
        expect(example).toHaveProperty('name.first')
        expect(example).toHaveProperty('email')
        expect(example).toHaveProperty('phone')
        expect(example).toHaveProperty('location.street.number')
        expect(example).toHaveProperty('location.street.name')
        expect(example).toHaveProperty('location.city')
        expect(example).toHaveProperty('location.state')
        expect(example).toHaveProperty('location.postcode')
        expect(example).toHaveProperty('login.username')
        expect(example).toHaveProperty('picture.large')
      })
  })
})