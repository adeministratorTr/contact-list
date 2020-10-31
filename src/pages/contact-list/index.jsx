import { useEffect, useState } from "react"
import { connect } from 'react-redux'
import { DEFAULT_RESULT_NUMBER } from './constants'
import { fetchContactList } from '../../actions/contact'
import { Item } from '../../components/Item'
import { ListingGroup } from '../../components/ListingGroup'

function ContactList({ contactList, fetchContactList, ...props }) {
  const [selectedCategory, setSelectedCategory] = useState({})

  useEffect(() => {
    fetchContactList({ limit: DEFAULT_RESULT_NUMBER })
  }, [fetchContactList])

  return (
    <div>
      {contactList.isLoading && <p>Loading...</p>}
      {!contactList.isLoading && contactList.error && <p>Opps. Something wrong. Detail: {contactList.error}</p>}
      {!contactList.isLoading && Object.entries(contactList.contactsGroupByLastName).length > 0 &&
        <ListingGroup>
          {Object.entries(contactList.contactsGroupByLastName)
            .map((pair, i) =>
              <div
                key={i}
                onClick={() => setSelectedCategory(pair)}
              >
                <Item>LastName: {pair[0]} - Length: {pair[1].length}</Item>
              </div>
            )}
        </ListingGroup>
      }
    </div>
  )
}

export default connect(
  (state) => ({
    contactList: state.contact.contactList
  }), {
  fetchContactList
}
)(ContactList)
