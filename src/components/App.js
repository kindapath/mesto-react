import { useEffect, useState } from 'react'
import Footer from "./Footer";
import Header from "./Header";
import ImagePopup from "./ImagePopup";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import { api } from "../utils/api"
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';


function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)
  const [isConfirmPopupOpen, setIsConfirmPopupOpen] = useState(false)
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false)

  const [selectedCard, setSelectedCard] = useState({})

  const [currentUser, setCurrentUser] = useState('')

  useEffect(() => {
    // Получаем изначальную информацию с сервера
    api.getUserInfo()
      .then((userData) => {

        // Получаем информацию профиля с сервера
        setCurrentUser(userData)
      })
      .catch(err => console.log(err))
  }, [])

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  }

  function handleCardClick(card) {
    setIsImagePopupOpen(true)
    setSelectedCard(card)
  }

  function handleUpdateUser(name, about) {
    api.updateUserInfo(name, about)
      .then((userData) => {
        setCurrentUser(userData)
      })
    closeAllPopups()
    console.log('submit')
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsConfirmPopupOpen(false);
    setIsImagePopupOpen(false);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">

        <Header />

        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />

        <PopupWithForm
          name="add"
          title="Новое место"
          buttonText="Создать"
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
          buttonText="Сохранить"
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
          buttonText="Да"
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
    </CurrentUserContext.Provider>
  );
}

export default App;
