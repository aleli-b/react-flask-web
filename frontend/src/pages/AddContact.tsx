import "./AddContact.css"
import { ContactForm } from '../components/ContactForm'

export const AddContact = () => {
  return (
    <div className="add-contact">
        <h2>Add a Contact</h2>
        <ContactForm />
    </div>
  )
}
