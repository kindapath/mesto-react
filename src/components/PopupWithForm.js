export default function PopupWithForm({name, title, isOpen}) {
  return (
    <section className={`popup popup_type_${name} ${isOpen ? "popup_opened" : ''}`} >
      <div className="popup__container">
        <h2 className="popup__text">{title}</h2>
        <button className="popup__close" type="button">
          <img className="popup__close-image" src="<%=require('./images/popup__close-icon.svg')%>" alt="Иконка закрытия" />
        </button>
        <form className="popup__form popup__form_type_edit" name={name} noValidate>
          <button className="popup__submit" type="submit">Сохранить</button>
        </form>
      </div>
    </section>
  )
}
