import { useEffect, useState } from 'react'
import { api } from "../utils/api"
import Card from "./Card"

// Мейн

export default function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {

  // Стейты
  const [userName, setUserName] = useState('')
  const [userDescription, setUserDescription] = useState('')
  const [userAvatar, setUserAvatar] = useState('')
  const [cards, setCards] = useState([])

  useEffect(() => {
    // Получаем изначальную информацию с сервера
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userData, cardsData]) => {

        // Получаем информацию профиля с сервера
        setUserName(userData.name)
        setUserDescription(userData.about)
        setUserAvatar(userData.avatar)

        // Получаем массив карточек
        setCards(cardsData)
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
