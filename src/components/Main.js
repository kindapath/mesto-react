import React from "react"
import { api } from "../utils/api"
import Card from "./Card"

// Мейн

export default function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {

  // Стейты
  const [userName, setUserName] = React.useState()
  const [userDescription, setUserDescription] = React.useState()
  const [userAvatar, setUserAvatar] = React.useState()
  const [cards, setCards] = React.useState([])

  React.useEffect(() => {
    // Получаем изначальную информацию с сервера
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then((data) => {

        // Получаем информацию профиля с сервера
        setUserName(data[0].name)
        setUserDescription(data[0].about)
        setUserAvatar(data[0].avatar)

        // Получаем массив карточек
        setCards(data[1])
      })
      .catch(err => console.log(err))
  }, [])
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

        {/* Создаем карточки */}

        {cards.map((card) => {
          return <Card card={card} onCardClick={onCardClick} key={card._id} />
        })}
      </section>
    </main>
  )
}
