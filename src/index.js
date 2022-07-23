import './pages/index.css';
import Card from './components/Card.js';
import FormValidator from './components/FormValidator.js';
import Section from './components/Section.js';
import PopupWithForm from './components/PopupWithForm.js';
import UserInfo from './components/UserInfo.js';
import PopupWithImage from './components/PopupWithImage';
import Api from './components/Api';
import { PopupWithConfirmation } from './components/PopupWithConfirmation';

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

// Изменение аватара
const profileAvatarEditButton = document.querySelector('.profile__avatar-edit-button');
const popupTypeEditAvatar = document.querySelector('.popup_type_edit-avatar');
const formEditAvatar = document.querySelector('.form_type_edit-avatar');

const profilePopupFormValidator = new FormValidator(validationConfig, profilePopupForm);
const cardPopupFormValidator = new FormValidator(validationConfig, formElementTypeAdd);
const avatarPopupFormValidator = new FormValidator(validationConfig, formEditAvatar);

const profileConfiguration = {
  nameSelector: '.profile__title',
  jobSelector: '.profile__subtitle',
  avatarSelector: '.profile__avatar'
}

const api = new Api({
  serverUrl: 'https://mesto.nomoreparties.co/v1/cohort-45',
  headers: {
    authorization: '5bbfedaa-4f8d-4bb6-adea-81a84541445e',
    'Content-Type': 'application/json',
  }
});

Promise.all([
  api.getUserInfo(),
  api.getInitialCards()
])
  .then(([info, initialCards]) => {
    profileInfo.setUserInfo({ title: info.name, job: info.about, avatar: info.avatar, _id: info._id });
    cardsContainer.renderItems(initialCards.reverse());
  })
  .catch((err) => {
    console.log(err);
  });


const createCard = (item) => {
  const card = new Card(item, profileInfo.getUserId(), '.template', handleCardClick, setLikes, removeLikes, openDeletePopup);
  const cardElement = card.getItemElement();
  return cardElement;
};

// Открытие картинки из карточки на полный экран.
const popupOpenImage = new PopupWithImage('.popup_type_img');
popupOpenImage.setEventListeners();

function handleCardClick(name, link) {
  popupOpenImage.open(name, link);
};

const removeCard = (dataCard) => {
  api.deleteCard(dataCard)
    .then(() => {
      dataCard.removeImage();
    })
    .catch((err) => {
      console.log(err)
    });
}

const deletePopup = new PopupWithConfirmation('.popup_type_delete', removeCard);

const openDeletePopup = (data) => {
  deletePopup.open(data);
}

deletePopup.setEventListeners();

const setLikes = (dataCard) => {
  api.setLike(dataCard)
    .then((result) => {
      dataCard.updateLike(result);
    })
    .catch((err) => {
      console.log(err)
    })
}

const removeLikes = (dataCard) => {
  api.deleteLike(dataCard)
    .then((result) => {
      dataCard.updateLike(result);
    })
    .catch((err) => {
      console.log(err)
    })
}

const cardsContainer = new Section(createCard, cardsContainerElements);

const profileInfo = new UserInfo(profileConfiguration);

const handleCardSubmit = (dataCard) => {
  api.addNewCard(dataCard)
    .then(result => {
      cardsContainer.addItem(result);
      popupAddCard.close();
    })
    .catch((err) => {
      console.log(err)
    })

};

const popupAddCard = new PopupWithForm(
  '.popup_type_add-card',
  cardPopupFormValidator.clearForm,
  handleCardSubmit
);
popupAddCard.setEventListeners();

const handleProfileFormSubmit = (dataUser) => {
  api.patchUserInfo(dataUser)
    .then((result) => {
      profileInfo.setUserInfo({ title: result.name, job: result.about, avatar: result.avatar });
      popupEditProfile.close();
    })
    .catch((err) => {
      console.log(err);
    })
};

const handleEditAvatarSubmit = (dataUser) => {
  api.patchAvatarInfo(dataUser)
    .then((result) => {
      profileInfo.setUserInfo({ title: result.name, job: result.about, avatar: result.avatar });
      popupEditAvatar.close();
    })
    .catch((err) => {
      console.log(err);
    })
};

const popupEditProfile = new PopupWithForm(
  ".popup_type_edit-profile",
  profilePopupFormValidator.clearForm,
  handleProfileFormSubmit,
  profileInfo.getUserInfo,
);
popupEditProfile.setEventListeners();

const popupEditAvatar = new PopupWithForm(
  ".popup_type_edit-avatar",
  avatarPopupFormValidator.clearForm,
  handleEditAvatarSubmit
)
popupEditAvatar.setEventListeners();

// Открытие формы добавления новой карточки.
profileAddButton.addEventListener('click', function () {
  formElementTypeAdd.reset();
  cardPopupFormValidator.clearForm();
  popupAddCard.open();
})

profileEditButton.addEventListener('click', evt => {
  popupEditProfile.open();
});

profileAvatarEditButton.addEventListener('click', evt => {
  popupEditAvatar.open();
});

cardPopupFormValidator.enableValidation();
profilePopupFormValidator.enableValidation();
avatarPopupFormValidator.enableValidation();
