// Вынесем все необходимые элементы формы в константы
const formElement = document.querySelector('.form__input');
const formInput = formElement.querySelector('.form__item');

// Функция, которая добавляет класс с ошибкой
const showInputError = (element) => {
  element.classList.add('form__input_type_error');
};

// Функция, которая удаляет класс с ошибкой
const hideInputError = (element) => {
  element.classList.remove('form__input_type_error');
};

// Функция, которая проверяет валидность поля
const isValid = () => {
  if (!formInput.validity.valid) {
    // Если поле не проходит валидацию, покажем ошибку
    showInputError(formInput);
  } else {
    // Если проходит, скроем
    hideInputError(formInput);
  }
};

formElement.addEventListener('submit', function (evt) {
  // Отменим стандартное поведение по сабмиту
  evt.preventDefault();
});

// Вызовем функцию isValid на каждый ввод символа
formInput.addEventListener('input', isValid);
