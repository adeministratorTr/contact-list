import { servicesConstants } from './constants'

export const getUserListService = ({ limit }) => {
  const params = new URLSearchParams()

  params.append('results', limit)

  return fetch(`${servicesConstants.API_URL}/${servicesConstants.API_VERSION}?${params.toString()}`)
    .then(resp => resp.json())
    .then(result => result)
    .catch(error => error)
}
