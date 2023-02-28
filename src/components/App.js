import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import ImagePopup from "./ImagePopup";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";


function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false)
  const [isConfirmPopupOpen, setIsConfirmPopupOpen] = React.useState(false)
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false)

  const [selectedCard, setSelectedCard] = React.useState({})


  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  }

  function handleRemoveIconClick() {
    setIsConfirmPopupOpen(true)
  }

  function handleCardClick(card) {
    setIsImagePopupOpen(true)
    setSelectedCard(card)
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsConfirmPopupOpen(false);
    setIsImagePopupOpen(false);
  }

  return (
    <div className="page">

      <Header />

      <PopupWithForm
        name="edit"
        title="Редактировать профиль?"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}>

        <input className="popup__input popup__input_field_name" name="name" type="text" id="name-input" placeholder="Имя" required minLength={2} maxLength={40} autoFocus />
        <span className="popup__input-error name-input-error" />
        <input className="popup__input popup__input_field_job" name="about" type="text" id="job-input" placeholder="Описание" required minLength={2} maxLength={200} />
        <span className="popup__input-error job-input-error" />

      </PopupWithForm>

      <PopupWithForm
        name="add"
        title="Новое место"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}>
        <input
          className="popup__input popup__input_field_title"
          name="name"
          type="text"
          id="title-input"
          placeholder="Название"
          minLength={1}
          maxLength={30}
          required />
        <span className="popup__input-error title-input-error" />
        <input
          className="popup__input popup__input_field_link"
          name="link"
          type="url"
          id="link-input"
          placeholder="Ссылка на картинку"
          required />
        <span className="popup__input-error link-input-error" />
      </PopupWithForm>

      <PopupWithForm
        name="avatar"
        title="Обновить аватар"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}>
        <input
          className="popup__input popup__input_field_link"
          name="link"
          type="url"
          id="avatar-input"
          placeholder="Ссылка на картинку"
          required />
        <span className="popup__input-error avatar-input-error" />
      </PopupWithForm>

      <PopupWithForm
        name="confirm"
        title="Вы уверены?"
        isOpen={isConfirmPopupOpen}
        onClose={closeAllPopups}>
      </PopupWithForm>

      <ImagePopup
        card={selectedCard}
        isOpen={isImagePopupOpen}
        onClose={closeAllPopups} />

      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />

      <Footer />
    </div>

  );
}

export default App;
