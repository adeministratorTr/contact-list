import './style.scss'

export const Contact = ({ children, onClick }) => (
  <p onClick={onClick} className="contact">{children}</p>
)
