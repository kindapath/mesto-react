import { useState } from "react";
import PopupWithForm from "./PopupWithForm";

export default function AddPlacePopup({ isOpen, onClose, onAddPlace }) {

  const [name, setName] = useState('')
  const [link, setLink] = useState('')


  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace(name, link)
  }

  function handleNameChange(e) {
    setName(e.target.value)
  }

  function handleLinkChange(e) {
    setLink(e.target.value)
  }

  return <PopupWithForm
    name="add"
    title="Новое место"
    buttonText="Создать"
    isOpen={isOpen}
    onClose={onClose}
    onSubmit={handleSubmit}
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
      value={name}
      onChange={handleNameChange}/>
    <span className="popup__input-error title-input-error" />
    <input
      className="popup__input popup__input_field_link"
      name="link"
      type="url"
      id="link-input"
      placeholder="Ссылка на картинку"
      required
      value={link}
      onChange={handleLinkChange}/>
    <span className="popup__input-error link-input-error" />
  </PopupWithForm>
}
