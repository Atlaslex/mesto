
// Функция, которая добавляет класс с ошибкой
const showInputError = (formElement, formInput, errorMessage, objectKeyList) => {
  const errorElement = formElement.querySelector(`.${formInput.id}-error`);
  formInput.classList.add(objectKeyList.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(objectKeyList.errorClass);
};

// Функция, которая удаляет класс с ошибкой
const hideInputError = (formElement, formInput, objectKeyList) => {
  const errorElement = formElement.querySelector(`.${formInput.id}-error`);
  formInput.classList.remove(objectKeyList.inputErrorClass);
  errorElement.classList.remove(objectKeyList.errorClass);
  errorElement.textContent = '';
};

// Функция, которая проверяет валидность поля
const isValid = (formElement, formInput, objectKeyList) => {
  if (!formInput.validity.valid) {
    // Если поле не проходит валидацию, покажем ошибку
    showInputError(formElement, formInput, formInput.validationMessage, objectKeyList);
  } else {
    // Если проходит, скроем
    hideInputError(formElement, formInput, objectKeyList);
  }
};

const setEventListeners = (fieldSet, objectKeyList) => {
  // Находим все поля внутри формы,
  // сделаем из них массив методом Array.from
  const inputList = Array.from(fieldSet.querySelectorAll(objectKeyList.inputSelector));
  const buttonElement = fieldSet.querySelector(objectKeyList.submitButtonSelector);
  // Обойдём все элементы полученной коллекции

  inputList.forEach((formInput) => {
    // каждому полю добавим обработчик события input
    formInput.addEventListener('input', function () {
      // Внутри колбэка вызовем isValid,
      // передав ей форму и проверяемый элемент
      isValid(fieldSet, formInput, objectKeyList)
      toggleButtonState(inputList, buttonElement, objectKeyList);
    });
  });
};

const enableValidation = (objectKeyList) => {
  // Найдём все формы с указанным классом в DOM,
  // сделаем из них массив методом Array.from
  const formList = Array.from(document.querySelectorAll(objectKeyList.formSelector));

  // Переберём полученную коллекцию
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      // У каждой формы отменим стандартное поведение
      evt.preventDefault();
    });
    const fieldsetList = Array.from(document.querySelectorAll(objectKeyList.fieldSetSelector));

    fieldsetList.forEach((fieldSet) => {
      setEventListeners(fieldSet, objectKeyList);
    });

  });
};

// Функция принимает массив полей

const hasInvalidInput = (inputList) => {
  // проходим по этому массиву методом some
  return inputList.some((formInput) => {
    // Если поле не валидно, колбэк вернёт true
    // Обход массива прекратится и вся функция
    // hasInvalidInput вернёт true

    return !formInput.validity.valid;
  })
};

const toggleButtonState = (inputList, buttonElement, objectKeyList) => {
  // Если есть хотя бы один невалидный инпут
  if (hasInvalidInput(inputList)) {
    // сделай кнопку неактивной
    buttonElement.classList.add(objectKeyList.inactiveButtonClass);
    //Добавляем атрибут "disabled", чтобы нельзя было отправить неактивную форму через TAB по Enter.
    buttonElement.setAttribute('disabled', true);
  } else {
    // иначе сделай кнопку активной
    buttonElement.classList.remove(objectKeyList.inactiveButtonClass);
    buttonElement.removeAttribute('disabled', true);
  }
};

// Вызовем функцию
enableValidation({
  formSelector: '.form',
  fieldSetSelector: '.form__input',
  inputSelector: '.form__item',
  submitButtonSelector: '.form__save',
  inactiveButtonClass: 'form__save_inactive',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active'
});
