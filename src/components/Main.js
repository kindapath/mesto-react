import React from "react"
import { api } from "../utils/api"
import Card from "./Card"

export default function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {

  const [userName, setUserName] = React.useState()
  const [userDescription, setUserDescription] = React.useState()
  const [userAvatar, setUserAvatar] = React.useState()
  const [cards, setCards] = React.useState([])
  let userId

  React.useEffect(() => {
    // Получаем изначальную информацию с сервера
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then((data) => {
        // userId = data[0]._id

        // Получаем информацию профиля с сервера
        setUserName(data[0].name)
        setUserDescription(data[0].about)
        setUserAvatar(data[0].avatar)

        // // Рендерим секцию карточек
        setCards(data[1])
        // cardSection.renderItems(data[1])
      })
      .catch(err => console.log(err))
  },[])
  return (
    <main className="content page__content">
      <section className="profile content__profile">
        <div className="profile__avatar-hover" onClick={onEditAvatar}><img className="profile__avatar" src={userAvatar} alt="Фотография профиля" /></div>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button className="profile__edit-btn" onClick={onEditProfile} type="button" />
          <p className="profile__job">{userDescription}</p>
        </div>
        <button className="profile__add-btn" onClick={onAddPlace} type="button" />
      </section>
      <section className="elements content__elements">
        {cards.map((card) => {
          return <Card card={card} onCardClick={onCardClick} key={card._id}/>
        })}
      </section>
    </main>
  )
}

{/* <div className="element">
            <img className="element__image" src="<%=require('./images/header__logo.svg')%>" alt="" />
            <button className="element__remove" type="button">
              <img className="element__remove-image" src="<%=require('./images/element__remove.svg')%>" alt="Иконка удаления" />
            </button>
            <div className="element__description">
              <p className="element__title"></p>

              <div className="element__like-group">
                <button className="element__like" type="button"></button>
                <p className="element__like-num">6</p>
              </div>
            </div>
          </div> */}
