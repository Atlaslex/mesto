export default class Card {
  constructor({ name, link, _id, likes, owner: { _id: ownerId } }, userId, cardSelector, handleCardClick, setLikes, removeLikesCallback, openDeletePopup) {
    this._link = link;
    this._name = name;
    this._likes = likes;
    this._numberLikes = likes.length;
    this._id = _id;
    this._isOwner = userId === ownerId;
    this._userId = userId;
    this._setLikes = setLikes;
    this._openDeletePopup = openDeletePopup;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;

    this._removeLikesCallback = removeLikesCallback;
    this.getItemElement = this.getItemElement.bind(this);
    this.updateLike = this.updateLike.bind(this);
  };

  _activeRemoveButton() {
    if (this._isOwner) {
      this._newItemElement.querySelector('.element__delete-button').classList.add('element__delete-button-on');
    }
  }

  _openPopup = () => {
    this._openDeletePopup(this);
  }

  _isLiked = () => {
    return this._likes.map((item) => item._id).includes(this._userId)
  };

  _likeCard = () => {
    if (!this._isLiked(this._likes)) {

      this._setLikes(this);

    } else {
      this._removeLikesCallback(this);
    }
  }

  _setEventListeners() {
    this._cardDeleteButton.addEventListener('click', this._openPopup);
    this._newItemPhoto.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link)
    });
    this._cardLikeButton.addEventListener('click', this._likeCard);
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

  getItemElement() {
    this._newItemElement = this._getTemplate();
    this._newItemPhoto = this._newItemElement.querySelector('.element__element-img');
    this._newItemPlaceName = this._newItemElement.querySelector('.element__text');
    this._cardDeleteButton = this._newItemElement.querySelector('.element__delete-button');
    this._cardLikeButton = this._newItemElement.querySelector('.element__like');
    this._cardCounter = this._newItemElement.querySelector('.element__counter');
    this._newItemPhoto.src = this._link;
    this._newItemPhoto.alt = `Фото ${this._name}`;
    this._newItemPlaceName.textContent = this._name;
    this._cardCounter.textContent = this._numberLikes;
    this._setEventListeners();
    if (this._isLiked(this._likes)) {
      this._cardLikeButton.classList.add('element__like_on');
    }
    this._activeRemoveButton();
    return this._newItemElement;

  }

  removeImage = () => {
    this._newItemElement.remove();
  }

  updateLike = (result) => {
    this._cardCounter.textContent = result.likes.length;
    this._cardLikeButton.classList.toggle('element__like_on');
    this._likes = result.likes;

  }

};
