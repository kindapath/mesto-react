export default function ImagePopup(props) {
  return (
    <section className="popup popup_type_pic">
      <div className="popup__container popup__container_type_pic">
        <button className="popup__close" type="button">
          <img className="popup__close-image" src="<%=require('./images/popup__close-icon.svg')%>" alt="Иконка закрытия" />
        </button>
        <img className="popup__image" src="<%=require('./images/header__logo.svg')%>" alt="Избражение" />
        <p className="popup__text popup__text_type_pic" />
      </div>
    </section>
  )
}
