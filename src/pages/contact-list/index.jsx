import { useEffect, useState } from "react"
import { connect } from 'react-redux'
import { DEFAULT_RESULT_NUMBER } from './constants'
import { fetchContactList } from '../../actions/contact'
import { Button } from '../../components/Button'
import { Contact } from '../../components/Contact'
import { ListingGroup } from '../../components/ListingGroup'

import './style.scss'

function ContactList({ contactList, fetchContactList, ...props }) {
  const [selectedCategory, setSelectedCategory] = useState({})

  useEffect(() => {
    fetchContactList({ limit: DEFAULT_RESULT_NUMBER })
  }, [fetchContactList])

  const renderCategoryButtons = () => (
    <div className="categorize__button__container">
      {Object.entries(contactList.contactsGroupByLastName)
        .map((pair, i) =>
          <Button
            key={i}
            type={'group'}
            text={pair[0]}
            length={pair[1].length}
            onClick={() => setSelectedCategory(pair)}
          />
        )}
    </div>
  )

  const renderCategoryItems = () => (
    <ListingGroup>
      {Object.values(selectedCategory[1])
        .map((contact, i) =>
          <Contact key={i}>{contact.firstName}, {contact.lastName.toUpperCase()}</Contact>
        )}
    </ListingGroup>
  )

  return (
    <div className="contact__list__container">
      <h1>Contact List</h1>
      {contactList.isLoading && <p>Loading...</p>}
      {!contactList.isLoading && contactList.error && <p>Opps. Something wrong. Detail: {contactList.error}</p>}
      {!contactList.isLoading && Object.entries(contactList.contactsGroupByLastName).length > 0 &&
        <>
          {renderCategoryButtons()}
          {selectedCategory[1] && renderCategoryItems()}
        </>}
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
