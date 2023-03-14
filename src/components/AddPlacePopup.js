import PopupWithForm from "./PopupWithForm";
import useValidation from "./useValidation";

export default function AddPlacePopup({ isOpen, onClose, onAddPlace }) {

  const {
    values,
    error,
    onChange,
    resetValidation,
    formValid
  } = useValidation();

  function handleClose() {
    onClose()
    resetValidation()
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace(values.name, values.link)
    resetValidation()
    onClose()
  }

  return <PopupWithForm
    name="add"
    title="Новое место"
    buttonText="Создать"
    isOpen={isOpen}
    onClose={handleClose}
    onSubmit={handleSubmit}
    formValid={formValid}
    >
    <input
      className="popup__input popup__input_field_title"
      name="name"
      type="text"
      id="title-input"
      placeholder="Название"
      minLength={1}
      maxLength={30}
      required
      value={values.name || ''}
      onChange={onChange}/>
    <span className={`popup__input-error ${formValid ? '' : 'popup__input-error_active'} title-input-error`}>{error.name}</span>
    <input
      className="popup__input popup__input_field_link"
      name="link"
      type="url"
      id="link-input"
      placeholder="Ссылка на картинку"
      required
      value={values.link || ''}
      onChange={onChange}/>
    <span className={`popup__input-error ${formValid ? '' : 'popup__input-error_active'} link-input-error`}>{error.link}</span>
  </PopupWithForm>
}
