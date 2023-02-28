import closeImage from '../images/popup__close-icon.svg'

// Попап с формой

export default function PopupWithForm({ name, title, isOpen, onClose, children }) {
  return (
    <section className={`popup popup_type_${name} ${isOpen ? "popup_opened" : ''}`} >
      <div className={`popup__container popup__container_type_${name}`}>
        <h2 className="popup__text">{title}</h2>
        <button className="popup__close" onClick={onClose} type="button">
          <img className="popup__close-image" src={closeImage} alt="Иконка закрытия" />
        </button>
        <form className={`popup__form popup__form_type_${name}`} name={name} noValidate>
          {children}
          <button className="popup__submit" type="submit">Сохранить</button>
        </form>
      </div>
    </section>
  )
}
