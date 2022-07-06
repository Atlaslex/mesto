import './pages/index.css';
import Card from './scripts/Card.js';
import FormValidator from './scripts/FormValidator.js';
import Section from './scripts/Section.js';
import PopupWithForm from './scripts/PopupWithForm.js';
import UserInfo from './scripts/UserInfo.js';

const Kalen = new URL('./blocks/element/__element-img/kalen-emsley.jpg', import.meta.url);
const Oslo = new URL('./blocks/element/__element-img/oslo.jpg', import.meta.url);
const Madeyra = new URL('./blocks/element/__element-img/madeyra.jpg', import.meta.url);
const Italy = new URL('./blocks/element/__element-img/italia.jpg', import.meta.url);
const Brit = new URL('./blocks/element/__element-img/brit.jpg', import.meta.url);
const Iceland = new URL('./blocks/element/__element-img/iceland.jpg', import.meta.url);

const initialCards = [
  {
    name: 'Кален Эмсли',
    link: Kalen
  },
  {
    name: 'Осло. Норвегия',
    link: Oslo
  },
  {
    name: 'Мадейра',
    link: Madeyra
  },
  {
    name: 'Италия',
    link: Italy
  },
  {
    name: 'Уитчемптон, Уимборн, Великобритания',
    link: Brit
  },
  {
    name: 'Исландия',
    link: Iceland
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
  const card = new Card(item, '.template', handleCardClick);
  const cardElement = card.getItemElement();
  return cardElement;
};

function handleCardClick(name, link) {
  imagePopup.src = link;
  imagePopup.alt = `Фото ${name}`;
  titlePopup.textContent = name;
  openPopup(popupImageItem);
};

const cardsContainer = new Section({
  items: initialCards,
  renderer: createCard,
}, cardsContainerElements);

cardsContainer.renderItems();

const pressButtonEsc = evt => {
  if (evt.key === 'Escape') {
    const popupOpen = document.querySelector('.popup_opened')
    closePopup(popupOpen)
  }
}

export const openPopup = popupObject => {
  popupObject.classList.add('popup_opened');
  document.addEventListener('keydown', pressButtonEsc);
}

const closePopup = popupObject => {
  popupObject.classList.remove('popup_opened');
  document.removeEventListener('keydown', pressButtonEsc);
}

const profileInfo = new UserInfo(
  ".profile__title",
  ".profile__subtitle"
);

// Функция закрытия всплывающих окон по клику на overlay или кнопку закрытия.
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

const renderItemPrepend = (wrap, card) => {
  wrap.prepend(card);
}

const popupAddCard = new PopupWithForm(
  ".popup_type_add-card",
  ({ placeinput, linkinput }) => {
    cardList.prependItem({ name: placeinput, link: linkinput });
  }
);
popupAddCard.setEventListeners();

const popupEditCard = new PopupWithForm(
  ".popup_type_edit-profile",
  ({ placeinput, linkinput }) => {
    cardList.prependItem({ name: placeinput, link: linkinput });
  }
);
popupEditCard.setEventListeners();

// Открытие формы добавления новой карточки.
profileAddButton.addEventListener('click', function () {
  formElementTypeAdd.reset();
  cardPopupFormValidator.clearForm();
  popupAddCard.open();
})

formElementTypeAdd.addEventListener('submit', evt => {
  evt.preventDefault();
  renderItemPrepend(cardsContainerElements, createCard({ name: newLocationName.value, link: linkImage.value }));
  popupAddCard.close();
});

profileEditButton.addEventListener('click', evt => {
  inputName.value = profileTitle.textContent;
  inputJob.value = profileSubtitle.textContent;
  profilePopupFormValidator.clearForm();
  popupEditCard.open();
});

formElementTypeEdit.addEventListener('submit', evt => {
  evt.preventDefault();
  profileTitle.textContent = inputName.value;
  profileSubtitle.textContent = inputJob.value;
  popupEditCard.close();
});

cardPopupFormValidator.enableValidation();
profilePopupFormValidator.enableValidation();

