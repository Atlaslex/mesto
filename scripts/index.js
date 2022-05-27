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

const templateEl = document.querySelector('.template');
const cardsContainerEl = document.querySelector('.elements');

// Popup edit form
const formElementTypeEdit = document.querySelector('.form_type_edit');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const popupEditCloseButton = document.querySelector('.popup__close');
const profileEditButton = document.querySelector('.profile__edit-button');
const popupTypeEditProfile = document.querySelector('.popup_type_edit-profile');
const inputName = document.querySelector('.form__item_type_name')
const inputJob = document.querySelector('.form__item_type_job')

// Popup add form
const formElementTypeAdd = document.querySelector('.form_type_add');
const profileAddButton = document.querySelector('.profile__add-button');
const popupTypeAddCard = document.querySelector('.popup_type_add-card');
const popupAddCloseButton = popupTypeAddCard.querySelector('.popup__close');
const newLocationName = popupTypeAddCard.querySelector('.form__item_type_location-name');
const linkImg = popupTypeAddCard.querySelector('.form__item_type_link-img');

const popupImageItem = document.querySelector('.popup_type_img');
const popupImageCloseButton = popupImageItem.querySelector('.popup__close');

const imagePopup = document.querySelector('.popup__image');
const titlePopup = document.querySelector('.popup__title');

const popups = Array.from(document.querySelectorAll('.popup'));
// Open form edit profile
profileEditButton.addEventListener('click', function () {
  inputName.value = profileTitle.textContent;
  inputJob.value = profileSubtitle.textContent;
  openPopup(popupTypeEditProfile);

});

// Popup close edit form
popupEditCloseButton.addEventListener('click', function () {
  closePopup(popupTypeEditProfile);
});

// Open form add profile
profileAddButton.addEventListener('click', function () {
  openPopup(popupTypeAddCard);
})

// Popup close add form
popupAddCloseButton.addEventListener('click', function () {
  closePopup(popupTypeAddCard);
});

popupImageCloseButton.addEventListener('click', function () {
  closePopup(popupImageItem);
});

function openPopup(evt) {
  evt.classList.add('popap_opened');
  document.addEventListener('keydown', closePopupEsc);
  
}

function closePopup(evt) {
  evt.classList.remove('popap_opened');
  document.removeEventListener('keydown', closePopupEsc);
}

function closePopupEsc(evt) {
  if (evt.key === 'Escape') {
    const popapOpened = document.querySelector('.popap_opened');
    closePopup(popapOpened);
  }
}


const closePopupByClickOnOverlay = () => {
  popups.forEach((popup) => {
      popup.addEventListener('mousedown', (evt) => {
        if(evt.target == evt.currentTarget) {
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

function handleFormAdd(evt) {
  evt.preventDefault();
  const inputNewLocationName = newLocationName.value;
  const inputlinkImg = linkImg.value;
  const card = getItem({name: inputNewLocationName, link: inputlinkImg});
  cardsContainerEl.prepend(card);
  newLocationName.value = '';
  linkImg.value = '';

  closePopup(popupTypeAddCard);
}

formElementTypeEdit.addEventListener('submit', handleFormEdit);
formElementTypeAdd.addEventListener('submit', handleFormAdd);

function render() {
  const html = initialCards
    .map(getItem)

    cardsContainerEl.append(...html);
}

function getItem(item) {
    const newItem = templateEl.content.cloneNode(true);
    const headerEl = newItem.querySelector('.element__text');
    const imgEl = newItem.querySelector('.element__element-img')
    const likeButton = newItem.querySelector('.element__like');
    const delitButton = newItem.querySelector('.element__delete-button');

    headerEl.textContent = item.name;
    imgEl.src = item.link;
    imgEl.alt = headerEl.textContent;

    likeButton.addEventListener('click', like);
    delitButton.addEventListener('click', deleteCard);

    imgEl.addEventListener('click', function() {
      imagePopup.setAttribute('src', item.link);
      imagePopup.setAttribute('alt', item.imageAlt);
      titlePopup.textContent = item.name;

      openPopup(popupImageItem);
    });
    return newItem;
}

function like (evt) {
  const eventTarget = evt.target;

  eventTarget.classList.toggle('element__like_on');
}

function deleteCard (evt) {
  const eventTarget = evt.target;
  const cardItem = eventTarget.closest('.element');

  cardItem.remove();
}
 render();



