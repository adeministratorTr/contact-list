import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import { TYPES, fetchContactList } from './contact'
import { servicesConstants } from '../services/constants'
import configureMockStore from 'redux-mock-store'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

const sampleContactPayload = {
  results: [
    {
      "gender": "female",
      "name": {
        "title": "Ms",
        "first": "Dimara",
        "last": "Titulaer"
      },
      "location": {
        "street": {
          "number": 3623,
          "name": "Drieplassenweg"
        },
        "city": "Posterholt",
        "state": "Zeeland",
        "country": "Netherlands",
        "postcode": 52238,
        "coordinates": {
          "latitude": "38.9064",
          "longitude": "85.3936"
        },
        "timezone": {
          "offset": "-9:00",
          "description": "Alaska"
        }
      },
      "email": "dimara.titulaer@example.com",
      "login": {
        "uuid": "3bf257bd-7b36-4be7-8dea-aa2dff4548de",
        "username": "purplemouse689",
        "password": "toad",
        "salt": "TmzQ3BHZ",
        "md5": "107120c47d04a2005ee710387f9b5bc2",
        "sha1": "0da99280292c36faf7b4de0e17e055ce8ea7ee7e",
        "sha256": "d4058b4c0d4917f124bf23f867face0d1f3efa7173ba27100f7e9e7750f379f2"
      },
      "dob": {
        "date": "1952-01-18T05:47:33.711Z",
        "age": 68
      },
      "registered": {
        "date": "2016-09-13T04:57:27.716Z",
        "age": 4
      },
      "phone": "(923)-258-9356",
      "cell": "(085)-259-6918",
      "id": {
        "name": "BSN",
        "value": "71819184"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/96.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/96.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/96.jpg"
      },
      "nat": "NL"
    },
    {
      "gender": "female",
      "name": {
        "title": "Mrs",
        "first": "Alicia",
        "last": "Marquez"
      },
      "location": {
        "street": {
          "number": 2489,
          "name": "Calle de Argumosa"
        },
        "city": "Barcelona",
        "state": "País Vasco",
        "country": "Spain",
        "postcode": 79252,
        "coordinates": {
          "latitude": "-27.5337",
          "longitude": "29.5822"
        },
        "timezone": {
          "offset": "-5:00",
          "description": "Eastern Time (US & Canada), Bogota, Lima"
        }
      },
      "email": "alicia.marquez@example.com",
      "login": {
        "uuid": "90d948fa-f2db-42c2-b3e6-6a0894351fcc",
        "username": "biglion479",
        "password": "44444",
        "salt": "VhjVIeqf",
        "md5": "2cb6ab3875b2625711ab1418f618119b",
        "sha1": "2d6c58979216f45285c85dcfe93ee5f61c6f1f44",
        "sha256": "24dc6dc2009386eef75dd1c0501f3343c83848695ba49ca4802f77f0f98d2916"
      },
      "dob": {
        "date": "1976-01-22T03:49:33.962Z",
        "age": 44
      },
      "registered": {
        "date": "2003-03-25T04:22:18.077Z",
        "age": 17
      },
      "phone": "989-550-255",
      "cell": "604-768-187",
      "id": {
        "name": "DNI",
        "value": "66193539-I"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/88.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/88.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/88.jpg"
      },
      "nat": "ES"
    }
  ]
}

describe('contact action tests', () => {
  afterEach(() => {
    fetchMock.restore()
  })

  test(`should return valid object when ${TYPES.GET_CONTACT_LIST_START} and ${TYPES.GET_CONTACT_LIST_SUCCESS} dispatched`, async () => {
    const store = mockStore({ payload: [] })
    const resultLimit = 2
    const expectedActions = [
      { type: TYPES.GET_CONTACT_LIST_START },
      { type: TYPES.GET_CONTACT_LIST_SUCCESS, payload: sampleContactPayload.results }
    ]
    const reqUrl = `${servicesConstants.API_URL}/${servicesConstants.API_VERSION}?results=${resultLimit}`

    await fetchMock.getOnce(reqUrl, {
      body: sampleContactPayload,
      headers: { 'content-type': 'application/json' }
    });

    return store.dispatch(fetchContactList({ limit: resultLimit })).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})

