import {
    popupImageItem,
    titlePopup,
    imagePopup,
    openPopup,
} from './index.js';


export default class Card {
    constructor(data, cardSelector) {
        this._link = data.link;
        this._name = data.name;
        this._cardSelector = cardSelector;
    };


    _getTemplate() {
        const cardElement = document
            .querySelector(this._cardSelector)
            .content
            .querySelector('.element')
            .cloneNode(true);

        return cardElement;
    };

    generateCard() {
        this._element = this._getTemplate();
        this._image = this._element.querySelector('.element__element-img');
        this._image.src = this._link;
        this._image.alt = this._name;
        this._element.querySelector('.element__text').textContent = this._name;
        this._cardLikeBtn = this._element.querySelector('.element__like');
        this._cardDeleteBtn = this._element.querySelector('.element__delete-button');

        this._setEventListeners();

        return this._element;
    };

    _handleOpenPopup() {
        imagePopup.src = this._link;
        imagePopup.alt = this._name;
        titlePopup.textContent = this._name;

        openPopup(popupImageItem);
    };

    _toggleLikeCard() {
        this._cardLikeBtn.classList.toggle('element__like_on');
    };

    _deleteCard() {
        this._element.remove();
    };


    _setEventListeners() {
        this._image.addEventListener('click', () => {
            this._handleOpenPopup();
        });

        this._cardLikeBtn.addEventListener('click', () => {
            this._toggleLikeCard();
        });

        this._cardDeleteBtn.addEventListener('click', () => {
            this._deleteCard();
        });
    };

};