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



let placeInput = document.querySelector('[name="place_name"]');
let linkInput = document.querySelector('[name="place_link"]');

const templateEl = document.querySelector('.template');
const listContainerEl = document.querySelector('.elements');

// Popap edit form
const formElementTypeEdit = document.querySelector('.form_type_edit');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const popapEditCloseButton = document.querySelector('.popup__close');
const profileEditButton = document.querySelector('.profile__edit-button');
const popapTypeEditProfile = document.querySelector('.popup_type_edit-profile');
const inputName = document.querySelector('.form__item_type_name')
const inputJob = document.querySelector('.form__item_type_job')

// Popap add form
const formElementTypeAdd = document.querySelector('.form_type_add');
const profileAddButton = document.querySelector('.profile__add-button');
const popapTypeAddCard = document.querySelector('.popup_type_add-card');
const popapAddCloseButton = popapTypeAddCard.querySelector('.popup__close');
const newLocationName = popapTypeAddCard.querySelector('.form__item_type_location-name');
const linkImg = popapTypeAddCard.querySelector('.form__item_type_link-img');
// Open form edit profile
profileEditButton.addEventListener('click', function () {
  inputName.value = profileTitle.textContent;
  inputJob.value = profileSubtitle.textContent;
  openPopup(popapTypeEditProfile);
});

// Popap close edit form
popapEditCloseButton.addEventListener('click', function () {
  closePopup(popapTypeEditProfile);
});

// Open form add profile
profileAddButton.addEventListener('click', function () {
  openPopup(popapTypeAddCard);
})

// Popap close add form
popapAddCloseButton.addEventListener('click', function () {
  closePopup(popapTypeAddCard);
});


function openPopup(evt) {
  evt.classList.add('popap_opened');
  }


function closePopup(evt) {
  evt.classList.remove('popap_opened');
}

function formEditHandler(evt) {
  evt.preventDefault();
  profileTitle.textContent = inputName.value;
  profileSubtitle.textContent = inputJob.value;
  closePopup(popapTypeEditProfile);
}

function formAddHandler(evt) {
  evt.preventDefault();
  let inputNewLocationName = newLocationName.value;
  let inputlinkImg = linkImg.value;
  closePopup(popapTypeAddCard);
}

// function handleAdd(evt) {  
//   evt.preventDefault(); 

//   const inputPostTitle = postTitle.value;
//   const inputPostImage = postImage.value;
//   const cardItem = getItem({name: inputPostTitle, imageSource: inputPostImage});
  
//   cardsContainerEl.prepend(cardItem);

//   postTitle.value = '';
//   postImage.value = '';
  
//   closePopup(popupAddPost);
// }



formElementTypeEdit.addEventListener('submit', formEditHandler);
formElementTypeAdd.addEventListener('submit', formAddHandler);

function render() {
  const html = initialCards
    .map(getItem)
  
    listContainerEl.append(...html);
}

function getItem(item) {
    const newItem = templateEl.content.cloneNode(true);
    const headerEl = newItem.querySelector('.element__text');
    const imgEl = newItem.querySelector('.element__element-img')
    headerEl.textContent = item.name;
    imgEl.src = item.link;
    imgEl.alt = headerEl.textContent;

    
    return newItem;
}


 render();