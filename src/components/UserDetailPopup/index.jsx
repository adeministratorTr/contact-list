import './style.scss'

const DEFAULT_PROFILE_PICTURE = 'https://media.istockphoto.com/vectors/male-default-avatar-profile-icon-man-face-silhouette-person-vector-vector-id1223477625?b=1&k=6&m=1223477625&s=612x612&w=0&h=0ylG4d4Pl7j9tcpfZugBKCJidxzOFkLhXKyHDs3_UeA='

export const UserDetailPopup = ({ show, ...props }) => {
  const imageSource = props.imageSource ? props.imageSource : DEFAULT_PROFILE_PICTURE
  return (
    <div className="user__detail__popup">
      <div onClick={props.onClose} className="user__detail__popup__close">X</div>
      <img src={imageSource} alt="profile" className="user__detail__popup__image" />
      <div className="user__detail__popup__info">
        <h2 className="user__detail__popup__info__fullname">{props.fullName}</h2>
        <div className="user__detail__popup__info__field">
          <div className="user__detail__popup__info__field__item">
            <p className="key">e-mail</p>
            <p className="value">{props.email}</p>
          </div>
          <div className="user__detail__popup__info__field__item">
            <p className="key">phone</p>
            <p className="value">{props.phone}</p>
          </div>
          <div className="user__detail__popup__info__field__item">
            <p className="key">street</p>
            <p className="value">{props.street}</p>
          </div>
          <div className="user__detail__popup__info__field__item">
            <p className="key">city</p>
            <p className="value">{props.city}</p>
          </div>
          <div className="user__detail__popup__info__field__item">
            <p className="key">state</p>
            <p className="value">{props.state}</p>
          </div>
          <div className="user__detail__popup__info__field__item">
            <p className="key">postcode</p>
            <p className="value">{props.postcode}</p>
          </div>
        </div>
      </div>
      <div className="user__detail__popup__username">
        USERNAME {props.username}
      </div>
    </div>
  )
}