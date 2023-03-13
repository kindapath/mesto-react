import { useEffect, useState, useContext } from 'react'
import { api } from "../utils/api"
import Card from "./Card"
import { CurrentUserContext } from '../contexts/CurrentUserContext'

// Мейн

export default function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {

  // Стейты
  const [cards, setCards] = useState([])

  // Подписываемся на контекст
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    // Получаем изначальную информацию с сервера
    api.getInitialCards()
      .then((cardsData) => {

        // Получаем массив карточек
        setCards(cardsData)
      })
      .catch(err => console.log(err))
  }, [])

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    if (isLiked) {
      api.removeLike(card._id)
        .then((newCard) => {
          // Формируем новый массив на основе имеющегося, подставляя в него новую карточку
          const newCards = cards.map((c) => c._id === card._id ? newCard : c);
          // Обновляем стейт
          setCards(newCards);
        });
    } else {
      api.likeCard(card._id)
        .then((newCard) => {
          // Формируем новый массив на основе имеющегося, подставляя в него новую карточку
          const newCards = cards.map((c) => c._id === card._id ? newCard : c);
          // Обновляем стейт
          setCards(newCards);
        });
    }

  }

  function handleCardDelete(card) {
    api.removeCard(card._id)
      .then((newCard) => {
      // Формируем новый массив на основе имеющегося, подставляя в него новую карточку
      const newCards = cards.filter((c) => c._id !== card._id);
      // Обновляем стейт
      setCards(newCards);
    })
    console.log('deeeleeete')
  }

  return (
    <main className="content page__content">
      <section className="profile content__profile">
        <div className="profile__avatar-hover" onClick={onEditAvatar}><img className="profile__avatar" src={currentUser.avatar} alt="Фотография профиля" /></div>
        <div className="profile__info">
          <h1 className="profile__name">{currentUser.name}</h1>
          <button className="profile__edit-btn" onClick={onEditProfile} type="button" />
          <p className="profile__job">{currentUser.about}</p>
        </div>
        <button className="profile__add-btn" onClick={onAddPlace} type="button" />
      </section>
      <section className="elements content__elements">

        {/* Создаем карточки */}

        {cards.map((card) => {
          return <Card card={card} onCardClick={onCardClick} key={card._id} onCardLike={handleCardLike} onCardDelete={handleCardDelete} />
        })}
      </section>
    </main>
  )
}
