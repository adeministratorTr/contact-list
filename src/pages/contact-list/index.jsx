import { useEffect } from "react"
import { connect } from 'react-redux'
import { DEFAULT_RESULT_NUMBER } from './constants'
import { fetchContactList } from '../../actions/contact'

function ContactList({ contactList, fetchContactList, ...props }) {

  useEffect(() => {
    fetchContactList({ limit: DEFAULT_RESULT_NUMBER })
  }, [fetchContactList])

  return (
    <div>
      {contactList.isLoading && <p>Loading...</p>}
      {!contactList.isLoading && contactList.error && <p>Opps. Something wrong. Detail: {contactList.error}</p>}
      {!contactList.isLoading && contactList.contacts.length === 0 && <p>Couldn't find any contact :(</p>}
      {!contactList.isLoading && contactList.contacts.length > 0 && contactList.contacts[0].name.first}
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
