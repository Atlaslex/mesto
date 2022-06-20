import Card from './Card.js';
import FormValidator from './FormValidator.js';
import { validationConfig } from "./FormValidator.js";

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

const placeInput = document.querySelector('[name="place_name"]');
const linkInput = document.querySelector('[name="place_link"]');

const templateElement = document.querySelector('.template');
const cardsContainerElements = document.querySelector('.elements');


const formElementTypeEdit = document.querySelector('.form_type_edit');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const popupEditCloseButton = document.querySelector('.popup__close');
const profileEditButton = document.querySelector('.profile__edit-button');
const popupTypeEditProfile = document.querySelector('.popup_type_edit-profile');
const inputName = document.querySelector('.form__item_type_name')
const inputJob = document.querySelector('.form__item_type_job')
const profilePopupForm = popupTypeEditProfile.querySelector('.form');

// Popup add form
const formElementTypeAdd = document.querySelector('.form_type_add');
const profileAddButton = document.querySelector('.profile__add-button');
const popupTypeAddCard = document.querySelector('.popup_type_add-card');
const popupAddCloseButton = popupTypeAddCard.querySelector('.popup__close');
const newLocationName = popupTypeAddCard.querySelector('.form__item_type_location-name');
const linkImage = popupTypeAddCard.querySelector('.form__item_type_link-img');

export const popupImageItem = document.querySelector('.popup_type_img');
const popupImageCloseButton = popupImageItem.querySelector('.popup__close');
const cardPopupSaveButton = popupTypeAddCard.querySelector('.form__save');

export const imagePopup = document.querySelector('.popup__image');
export const titlePopup = document.querySelector('.popup__title');

const popups = Array.from(document.querySelectorAll('.popup'));

const profilePopupFormValidator = new FormValidator(validationConfig, profilePopupForm);
const cardPopupFormValidator = new FormValidator(validationConfig, formElementTypeAdd);

const createCard = (item) => {
  const card = new Card(item, '.template');
  return card;
};

initialCards.forEach((item) => {
  const card = createCard(item);
  const cardElement = card.generateCard();

  cardsContainerElements.append(cardElement);
});

// Открытие формы редактирования профиля
profileEditButton.addEventListener('click', function () {
  profilePopupFormValidator.clearForm();
  inputName.value = profileTitle.textContent;
  inputJob.value = profileSubtitle.textContent;
  openPopup(popupTypeEditProfile);
});

// Закрытие формы редактирования профиля
popupEditCloseButton.addEventListener('click', function () {
  closePopup(popupTypeEditProfile);
});

// Открытие формы добавления новой карточки
profileAddButton.addEventListener('click', function () {
  cardPopupFormValidator.clearForm();
  openPopup(popupTypeAddCard);
})

// Закрытие формы добавления новой карточки
popupAddCloseButton.addEventListener('click', function () {
  closePopup(popupTypeAddCard);
});

// Закрытие всплывающей картинки
popupImageCloseButton.addEventListener('click', function () {
  closePopup(popupImageItem);
});
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
      if (evt.target == evt.currentTarget) {
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
  const card = createCard(newCard);
  const cardElement = card.generateCard();

  cardsContainerElements.prepend(cardElement); //добавить карточку в начало
};

// function handleFormAdd(evt) {
//   evt.preventDefault();
//   const inputNewLocationName = newLocationName.value;
//   const inputlinkImg = linkImage.value;
//   const card = getItem({ name: inputNewLocationName, link: inputlinkImg });
//   cardsContainerElements.prepend(card);
//   newLocationName.value = '';
//   linkImage.value = '';
//   disablePopupSaveButton(cardPopupSaveButton);
//   closePopup(popupTypeAddCard);
// }

formElementTypeEdit.addEventListener('submit', handleFormEdit);
formElementTypeAdd.addEventListener('submit', handleFormAdd);

cardPopupFormValidator.enableValidation();
profilePopupFormValidator.enableValidation();

// function render() {
//   const html = initialCards
//     .map(getItem)

//   cardsContainerElements.append(...html);
// }

// function getItem(item) {
//   const newItem = templateElement.content.cloneNode(true);
//   const headerElement = newItem.querySelector('.element__text');
//   const imageElement = newItem.querySelector('.element__element-img')
//   const likeButton = newItem.querySelector('.element__like');
//   const deleteButton = newItem.querySelector('.element__delete-button');

//   headerElement.textContent = item.name;
//   imageElement.src = item.link;
//   imageElement.alt = headerElement.textContent;

//     likeButton.addEventListener('click', like);
//   deleteButton.addEventListener('click', deleteCard);

//   imageElement.addEventListener('click', function () {
//     imagePopup.setAttribute('src', item.link);
//     imagePopup.setAttribute('alt', item.imageAlt);
//     titlePopup.textContent = item.name;

//     openPopup(popupImageItem);

//   });
//   return newItem;
// }

// function like(evt) {
//   const eventTarget = evt.target;

//   eventTarget.classList.toggle('element__like_on');
// }

// function deleteCard(evt) {
//   const eventTarget = evt.target;
//   const cardItem = eventTarget.closest('.element');

//   cardItem.remove();
// }
// render();
