import { useEffect } from "react"
import { getUserListService } from '../../services/contact'
import { DEFAULT_RESULT_NUMBER } from './constants'

function ContactList() {

  useEffect(() => {
    getUserListService({ limit: DEFAULT_RESULT_NUMBER })
  }, [])

  return (
    <div>
      <p>contact listing page</p>
    </div>
  )
}

export default ContactList
