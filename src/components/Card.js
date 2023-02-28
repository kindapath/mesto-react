import removeImage from '../images/element__remove.svg'

export default function Card({ card, onCardClick }) {

  function handleClick() {
    onCardClick(card)
  }

  return <div className="element">
    <img className="element__image" src={card.link} onClick={handleClick} alt="" />
    <button className="element__remove" type="button">
      <img className="element__remove-image" src={removeImage} alt="Иконка удаления" />
    </button>
    <div className="element__description">
      <p className="element__title">{card.name}</p>

      <div className="element__like-group">
        <button className="element__like" type="button"></button>
        <p className="element__like-num">{card.likes.length}</p>
      </div>
    </div>
  </div>
}
