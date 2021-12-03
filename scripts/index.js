const editButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupCloseButton = popup.querySelector('.popup__close');

let formElement = document.querySelector('.form');
let formName = document.querySelector('.form__item_type_name');
let formVocation = document.querySelector('.form__item_type_vocation');
let profileTitle = document.querySelector('.profile__cousteau');
let profileSubtitle = document.querySelector('.profile__annotation');

function open() {
  popup.classList.add('popap_opened');
  formName.value = profileTitle.textContent;
  formVocation.value = profileSubtitle.textContent;
}

function close() {
  popup.classList.remove('popap_opened');
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileTitle.textContent = formName.value;
  profileSubtitle.textContent = formVocation.value;
  close();
}

editButton.addEventListener('click', open);
popupCloseButton.addEventListener('click', close);
formElement.addEventListener('submit', formSubmitHandler);



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