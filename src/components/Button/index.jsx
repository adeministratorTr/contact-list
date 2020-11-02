import './style.scss'

export const Button = ({ type, children, ...props }) => {
  const btnClassName = props.active ? 'group__button--active' : 'group__button'
  const renderGroupButton = () => (
    <button onClick={props.onClick} className={btnClassName}>
      <p className="group__button__text">{props.text}</p>
      <p className="group__button__number">{props.length}</p>
    </button>
  )

  return (
    type === 'group' && renderGroupButton()
  )
}