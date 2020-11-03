import { useEffect, useState } from "react"
import { connect } from 'react-redux'
import { DEFAULT_RESULT_NUMBER } from './constants'
import { fetchContactList } from '../../actions/contact'
import { Button } from '../../components/Button'
import { Contact } from '../../components/Contact'
import { ListingGroup } from '../../components/ListingGroup'
import { UserDetailPopup } from '../../components/UserDetailPopup'

import './style.scss'

function ContactList({ contactList, fetchContactList, ...props }) {
  const [selectedCategory, setSelectedCategory] = useState({})
  const [selectedContact, setSelectedContact] = useState({})

  useEffect(() => {
    fetchContactList({ limit: DEFAULT_RESULT_NUMBER })
  }, [fetchContactList])

  const handleCategoryButtonClick = (pair) => {
    setSelectedContact({})
    setSelectedCategory(pair)
  }

  const renderCategoryButtons = () => (
    <div className="categorize__button__container">
      {Object.entries(contactList.contactsGroupByLastName)
        .map((pair, i) =>
          <Button
            key={i}
            type={'group'}
            text={pair[0]}
            length={pair[1].length}
            active={pair[0] === selectedCategory[0]}
            onClick={() => handleCategoryButtonClick(pair)}
          />
        )}
    </div>
  )

  const renderCategoryItems = () => (
    <ListingGroup>
      {Object.values(selectedCategory[1]).map((contact, i) =>
        <Contact
          key={i}
          onClick={() => setSelectedContact(contact)}
        >
          {contact.firstName}, {contact.lastName.toUpperCase()}</Contact>
      )}
    </ListingGroup>
  )

  return (
    <div className="contact__list">
      <h1>Contact List</h1>
      {contactList.isLoading && <p>Loading...</p>}
      {!contactList.isLoading && contactList.error && <p>Opps. Something wrong. Detail: {contactList.error.message}</p>}
      {!contactList.isLoading && !contactList.error && Object.entries(contactList.contactsGroupByLastName).length > 0 &&
        <div className="contact__list__group" >
          {renderCategoryButtons()}
          {selectedCategory[1] && renderCategoryItems()}
        </div>}
      {selectedContact && selectedContact.email &&
        <UserDetailPopup
          imageSource={selectedContact.profilePicture}
          fullName={`${selectedContact.lastName.toUpperCase()}, ${selectedContact.firstName}`}
          email={selectedContact.email}
          phone={selectedContact.phone}
          street={`${selectedContact.streetNumber} ${selectedContact.streetName}`}
          city={selectedContact.city}
          state={selectedContact.state}
          postcode={selectedContact.postcode}
          username={selectedContact.username}
          onClose={() => setSelectedContact({})}
        />}
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
