import { useContext, useEffect, useState } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

export default function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  // Подписка на контекст
  const currentUser = useContext(CurrentUserContext);

  // После загрузки текущего пользователя из API
  // его данные будут использованы в управляемых компонентах.
  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    onUpdateUser(
      name,
      description,
    );
  }

  function handleNameChange(e) {
    setName(e.target.value)
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value)
  }


  return <PopupWithForm
    name="edit"
    title="Редактировать профиль?"
    buttonText="Сохранить"
    isOpen={isOpen}
    onClose={onClose}
    onSubmit={handleSubmit}
    >

    <input
      className="popup__input popup__input_field_name"
      name="name" type="text"
      id="name-input"
      placeholder="Имя"
      required minLength={2}
      maxLength={40}
      autoFocus
      value={name}
      onChange={handleNameChange}
    />
    <span className="popup__input-error name-input-error" />

    <input className="popup__input popup__input_field_job"
      name="about"
      type="text"
      id="job-input"
      placeholder="Описание"
      required minLength={2}
      maxLength={200}
      value={description}
      onChange={handleDescriptionChange}
    />
    <span className="popup__input-error job-input-error" />

  </PopupWithForm>
}
