import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";


function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false)

  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false)

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false)


  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  }

  return (
    <body className="page">

      <Header />

      <PopupWithForm name="edit" title="Редактировать профиль?" isOpen={isEditProfilePopupOpen}/>
      <PopupWithForm name="add" title="Новое место" isOpen={isAddPlacePopupOpen}/>
      <PopupWithForm name="avatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpen}/>

      <section className="popup popup_type_edit">
        <div className="popup__container">
          <h2 className="popup__text">Редактировать профиль</h2>
          <button className="popup__close" type="button">
            <img className="popup__close-image" src="<%=require('./images/popup__close-icon.svg')%>" alt="Иконка закрытия" />
          </button>
          <form className="popup__form popup__form_type_edit" noValidate>
            <input className="popup__input popup__input_field_name" name="name" type="text" id="name-input" placeholder="Имя" required minLength={2} maxLength={40} autofocus />
            <span className="popup__input-error name-input-error" />
            <input className="popup__input popup__input_field_job" name="about" type="text" id="job-input" placeholder="Описание" required minLength={2} maxLength={200} />
            <span className="popup__input-error job-input-error" />
            <button className="popup__submit" type="submit">Сохранить</button>
          </form>
        </div>
      </section>

      <section className="popup popup_type_add">
        <div className="popup__container">
          <h2 className="popup__text">Новое место</h2>
          <button className="popup__close" type="button">
            <img className="popup__close-image" src="<%=require('./images/popup__close-icon.svg')%>" alt="Иконка закрытия" />
          </button>
          <form className="popup__form popup__form_type_add">
            <input className="popup__input popup__input_field_title" name="name" type="text" id="title-input" placeholder="Название" minLength={1} maxLength={30} required />
            <span className="popup__input-error title-input-error" />
            <input className="popup__input popup__input_field_link" name="link" type="url" id="link-input" placeholder="Ссылка на картинку" required />
            <span className="popup__input-error link-input-error" />
            <button className="popup__submit" type="submit">Создать</button>
          </form>
        </div>
      </section>

      <section className="popup popup_type_avatar">
        <div className="popup__container popup__container_type_avatar">
          <h2 className="popup__text">Обновить аватар</h2>
          <button className="popup__close" type="button">
            <img className="popup__close-image" src="<%=require('./images/popup__close-icon.svg')%>" alt="Иконка закрытия" />
          </button>
          <form className="popup__form popup__form_type_avatar">
            <input className="popup__input popup__input_field_link" name="link" type="url" id="avatar-input" placeholder="Ссылка на картинку" required />
            <span className="popup__input-error avatar-input-error" />
            <button className="popup__submit" type="submit">Сохранить</button>
          </form>
        </div>
      </section>

      <section className="popup popup_type_confirm">
        <div className="popup__container popup__container_type_confirm">
          <button className="popup__close" type="button">
            <img className="popup__close-image" src="<%=require('./images/popup__close-icon.svg')%>" alt="Иконка закрытия" />
          </button>
          <form className="popup__form popup__form_type_confirm">
            <h2 className="popup__text popup__text_type_confirm">Вы уверены?</h2>
            <button className="popup__submit" type="submit">Да</button>
          </form>
        </div>
      </section>

      <section className="popup popup_type_pic">
        <div className="popup__container popup__container_type_pic">
          <button className="popup__close" type="button">
            <img className="popup__close-image" src="<%=require('./images/popup__close-icon.svg')%>" alt="Иконка закрытия" />
          </button>
          <img className="popup__image" src="<%=require('./images/header__logo.svg')%>" alt="Избражение" />
          <p className="popup__text popup__text_type_pic" />
        </div>
      </section>

      <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick}/>

      <Footer />
    </body>

  );
}

export default App;
