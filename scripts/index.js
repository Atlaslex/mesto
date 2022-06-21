import Card from './Card.js';
import FormValidator from './FormValidator.js';

const initialCards = [
  {
    name: 'Кален Эмсли',
    link: './blocks/element/__element-img/kalen-emsley.jpg'
  },
  {
    name: 'Осло. Норвегия',
    link: './blocks/element/__element-img/oslo.jpg'
  },
  {
    name: 'Мадейра',
    link: './blocks/element/__element-img/madeyra.jpg'
  },
  {
    name: 'Италия',
    link: './blocks/element/__element-img/italia.jpg'
  },
  {
    name: 'Уитчемптон, Уимборн, Великобритания',
    link: './blocks/element/__element-img/brit.jpg'
  },
  {
    name: 'Исландия',
    link: './blocks/element/__element-img/iceland.jpg'
  }
];

const validationConfig = {
  formSelector: '.form',
  inputSelector: '.form__item',
  submitButtonSelector: '.form__save',
  inactiveButtonClass: 'form__save_inactive',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error'
};

const cardsContainerElements = document.querySelector('.elements');
const formElementTypeEdit = document.querySelector('.form_type_edit');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const profileEditButton = document.querySelector('.profile__edit-button');
const popupTypeEditProfile = document.querySelector('.popup_type_edit-profile');
const inputName = document.querySelector('.form__item_type_name')
const inputJob = document.querySelector('.form__item_type_job')
const profilePopupForm = popupTypeEditProfile.querySelector('.form');

// Popup add form
const formElementTypeAdd = document.querySelector('.form_type_add');
const profileAddButton = document.querySelector('.profile__add-button');
const popupTypeAddCard = document.querySelector('.popup_type_add-card');
const newLocationName = popupTypeAddCard.querySelector('.form__item_type_location-name');
const linkImage = popupTypeAddCard.querySelector('.form__item_type_link-img');

export const popupImageItem = document.querySelector('.popup_type_img');
export const imagePopup = document.querySelector('.popup__image');
export const titlePopup = document.querySelector('.popup__title');
const popups = Array.from(document.querySelectorAll('.popup'));

const profilePopupFormValidator = new FormValidator(validationConfig, profilePopupForm);
const cardPopupFormValidator = new FormValidator(validationConfig, formElementTypeAdd);

const createCard = (item) => {
  const card = new Card(item, '.template');
  const cardElement = card.generateCard();
  return cardElement;
};

initialCards.forEach((item) => {
  cardsContainerElements.append((createCard(item)));
});

// Открытие формы редактирования профиля
profileEditButton.addEventListener('click', function () {
  profilePopupFormValidator.clearForm();
  inputName.value = profileTitle.textContent;
  inputJob.value = profileSubtitle.textContent;
  openPopup(popupTypeEditProfile);
});

// Открытие формы добавления новой карточки
profileAddButton.addEventListener('click', function () {
  formElementTypeAdd.reset();
  cardPopupFormValidator.clearForm();
 
  openPopup(popupTypeAddCard);
})

// Функция открытия всплывающих окон
export function openPopup(popup) {
  popup.classList.add('popup_opened');

  // Добавляем слушателя ожидания нажатия на "Escape"
  document.addEventListener('keydown', closePopupEsc);
};

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEsc);
}

function closePopupEsc(evt) {
  if (evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  }
}

const closePopupByClickOnOverlay = () => {
  popups.forEach((popup) => {
    popup.addEventListener('mousedown', (evt) => {
      if (evt.target == evt.currentTarget || evt.target.classList.contains('popup__close')) {
        closePopup(popup);
      };
    });
  });
};

closePopupByClickOnOverlay();

function handleFormEdit(evt) {
  evt.preventDefault();
  profileTitle.textContent = inputName.value;
  profileSubtitle.textContent = inputJob.value;
  closePopup(popupTypeEditProfile);
}

// Заполнение карточки введёнными данными, закрытие при нажатии на сабмит.
const handleFormAdd = (evt) => {
  evt.preventDefault();
  const newCard = {
    link: linkImage.value,
    name: newLocationName.value,
  };

  closePopup(popupTypeAddCard);
  const cardElement = createCard(newCard);

  cardsContainerElements.prepend(cardElement); //добавить карточку в начало
};

formElementTypeEdit.addEventListener('submit', handleFormEdit);
formElementTypeAdd.addEventListener('submit', handleFormAdd);

cardPopupFormValidator.enableValidation();
profilePopupFormValidator.enableValidation();

