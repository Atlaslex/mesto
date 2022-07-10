import './pages/index.css';
import Card from './components/Card.js';
import FormValidator from './components/FormValidator.js';
import Section from './components/Section.js';
import PopupWithForm from './components/PopupWithForm.js';
import UserInfo from './components/UserInfo.js';
import PopupWithImage from './components/PopupWithImage';

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

const cardsContainerElements = 'elements';
const profileEditButton = document.querySelector('.profile__edit-button');
const popupTypeEditProfile = document.querySelector('.popup_type_edit-profile');
const profilePopupForm = popupTypeEditProfile.querySelector('.form');

// Popup add form
const formElementTypeAdd = document.querySelector('.form_type_add');
const profileAddButton = document.querySelector('.profile__add-button');

const profilePopupFormValidator = new FormValidator(validationConfig, profilePopupForm);
const cardPopupFormValidator = new FormValidator(validationConfig, formElementTypeAdd);

const profileConfiguration = {
  nameSelector: 'profile__title',
  jobSelector: 'profile__subtitle',
}

const createCard = (item) => {
  const card = new Card(item, '.template', handleCardClick);
  const cardElement = card.getItemElement();
  return cardElement;
};

// Открытие картинки из карточки на полный экран.
const popupOpenImage = new PopupWithImage('.popup_type_img');
popupOpenImage.setEventListeners();

function handleCardClick(name, link) {
  popupOpenImage.open(name, link);
};

const cardsContainer = new Section({
  items: initialCards,
  renderer: createCard,
}, cardsContainerElements);

cardsContainer.renderItems();

const profileInfo = new UserInfo(profileConfiguration);

const handleCardSubmit = (item) => {
  cardsContainer.addItem(item);
};

const popupAddCard = new PopupWithForm(
  '.popup_type_add-card',
  handleCardSubmit
);
popupAddCard.setEventListeners();

const popupEditProfile = new PopupWithForm(
  ".popup_type_edit-profile",
  (formData) => {
    profileInfo.setUserInfo(formData);
    popupEditProfile.close();
  }
);
popupEditProfile.setEventListeners();

// Открытие формы добавления новой карточки.
profileAddButton.addEventListener('click', function () {
  formElementTypeAdd.reset();
  cardPopupFormValidator.clearForm();
  popupAddCard.open();
})

profileEditButton.addEventListener('click', evt => {
  profilePopupFormValidator.clearForm();
  popupEditProfile.open();
});

cardPopupFormValidator.enableValidation();
profilePopupFormValidator.enableValidation();

