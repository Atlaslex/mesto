console.log('loaded')

const editButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupCloseButton = popup.querySelector('.popup__close');
const popupCloseOverlay = popup.querySelector('.popup');

function open() {
  popup.classList.add('popap_opened');
}

function close() {
  popup.classList.remove('popap_opened');
}
editButton.addEventListener('click', open);
popupCloseButton.addEventListener('click', close);


let formElement = document.querySelector('.form');
let formName = document.querySelector('.form__name');
let formVocation = document.querySelector('.form__vocation');
let profileTitle = document.querySelector('.profile__cousteau');
let profileSubtitle = document.querySelector('.profile__annotation');
let submit = document.querySelector('.form__save');

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileTitle.textContent = formName.value;
  profileSubtitle.textContent = formVocation.value;
}

formElement.addEventListener('submit', formSubmitHandler);
submit.addEventListener('click', close);
