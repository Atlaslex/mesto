export default class Card {
  constructor(data, cardSelector, handleCardClick) {
    this._link = data.link;
    this._name = data.name;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._newItemElement = document.querySelector(this._cardSelector).content.cloneNode(true);
    this._newItemPhoto = this._newItemElement.querySelector('.element__element-img');
    this._newItemPlaceName = this._newItemElement.querySelector('.element__text');
    this._cardDeleteButton = this._newItemElement.querySelector('.element__delete-button');
    this._cardLikeButton = this._newItemElement.querySelector('.element__like');
  };

  // Получаем разметку карточки из template элемента.
  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);

    return cardElement;
  };

  _handleDeleteCard = evt => {
    const deleteCard = evt.target.closest('.element');
    deleteCard.remove();
  };

  _toggleLikeCard() {
    this._cardLikeButton.classList.toggle('element__like_on');
  };

  _setEventListeners() {
    this._cardDeleteButton.addEventListener('click', this._handleDeleteCard);
    this._newItemPhoto.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link)
    });
    this._cardLikeButton.addEventListener('click', () => {
      this._toggleLikeCard();
    });
  };

  getItemElement() {

    this._newItemPhoto.src = this._link;
    this._newItemPhoto.alt = `Фото ${this._name}`;
    this._newItemPlaceName.textContent = this._name;
    this._setEventListeners()
    return this._newItemElement;
  }

};
