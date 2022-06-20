export const validationConfig = {
  formSelector: '.form',
  inputSelector: '.form__item',
  submitButtonSelector: '.form__save',
  inactiveButtonClass: 'form__save_inactive',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error'
};

export default class FormValidator {
  constructor(settings, form) {
    this._settings = settings;
    this._formElement = form;
  };
  //Функция, добавляющая класс с ошибкой.
  _showInputError = (inputElement, errorMessage) => {
    // Находим элемент ошибки внутри функции.
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._settings.inputErrorClass);
    // Заменим текст ошибки.
    errorElement.textContent = errorMessage;
    // Покажем сообщение об ошибке.
    errorElement.classList.add(this._settings.errorClass);
  };

  // Функция, удаляющая класс с ошибкой.
  _hideInputError = (inputElement) => {
    // Находим инпут элемент ошибки.
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._settings.inputErrorClass);
    // Скрываем сообщение об ошибке.
    errorElement.classList.remove(this._settings.errorClass);
    // Очистим ошибку.
    errorElement.textContent = '';
  };

  // Функция, проверяющая поле на валидность.
  _checkInputValidity = (inputElement) => {
    if (!inputElement.validity.valid) {
      // Если поле не валидно, показываем ошибку.
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      // Если валидно, скроем.
      this._hideInputError(inputElement);
    }
  };

  // Проверяем последовательно все поля на валидность.
  _hasInvalidInput = (inputList) => {

    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  };

  // Переключатель активности/неактивности кнопки.
  _toggleButtonState = (inputList, buttonElement) => {
    //Если есть невалидный инпут.
    if (this._hasInvalidInput(inputList)) {
      // Сделать кнопку неактивной.
      buttonElement.classList.add(this._settings.inactiveButtonClass);
      // Отключаем возможности добавлять пустые карточки по нажатию на Enter.
      buttonElement.setAttribute('disabled', true);
    } else {
      // Иначе - активной.
      buttonElement.classList.remove(this._settings.inactiveButtonClass);
      buttonElement.removeAttribute('disabled', true);
    }
  };

  // Слушатель для всех инпутов в форме.
  setEventListeners = () => {
    const inputList = Array.from(this._formElement.querySelectorAll(this._settings.inputSelector));
    const buttonElement = this._formElement.querySelector(this._settings.submitButtonSelector);

    // Сразу деактивируем кнопку, до ввода данных.
    this._toggleButtonState(inputList, buttonElement);

    inputList.forEach((inputElement) => {
      // Добавляем каждому полю обработчик на ввод данных.
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(inputList, buttonElement);
      });
    });
  };
    clearForm = () => {
      this._formElement.reset();

      // Блокировка сабмита.
      const popupSaveBtns = Array.from(this._formElement.querySelectorAll('.form__save'));
      popupSaveBtns.forEach((popupSaveBtn) => {
        popupSaveBtn.classList.add('form__save_inactive');
        popupSaveBtn.setAttribute('disabled', true);
      });

      // Удаляем ошибки инпутов.
      const popupInputsErrors = Array.from(this._formElement.querySelectorAll('.form__input-error'));
      popupInputsErrors.forEach((popupInputError) => {
        popupInputError.textContent = '';
      });

      // Удаляем красное подчеркивание ошибок инпутов.
      const popupInputsErrorsRedBorder = Array.from(this._formElement.querySelectorAll('.form__item'));
      popupInputsErrorsRedBorder.forEach((popupInputErrorRedBorder) => {
        popupInputErrorRedBorder.classList.remove('form__input_type_error');
      });
    };


  enableValidation = () => {
    this.setEventListeners();
  };

}
