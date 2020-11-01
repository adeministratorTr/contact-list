import './style.scss'

export const Button = ({ type, children, ...props }) => {
  const renderGroupButton = () => (
    <button onClick={props.onClick} className="group__button">
      <p className="group__button__text">{props.text}</p>
      <p className="group__button__number">{props.length}</p>
    </button>
  )

  return (
    type === 'group' && renderGroupButton()
  )
}