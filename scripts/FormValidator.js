export default class FormValidator {
  constructor(settings, form) {
    this._settings = settings;
    this._formElement = form;
    this._inputList = Array.from(this._formElement.querySelectorAll(this._settings.inputSelector));
    this._buttonElement = this._formElement.querySelector(this._settings.submitButtonSelector);
    this._popupSaveBtns = this._formElement.querySelectorAll('.form__save');
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

  _inactiveButtonSave = () => {
    this._buttonElement.classList.add(this._settings.inactiveButtonClass);
    this._buttonElement.setAttribute('disabled', true);
  };

  // Переключатель активности/неактивности кнопки.
  _toggleButtonState = () => {
    //Если есть невалидный инпут.
    if (this._hasInvalidInput(this._inputList)) {
      // Сделать кнопку неактивной.
      this._inactiveButtonSave();
    } else {
      // Иначе - активной.
      this._buttonElement.classList.remove(this._settings.inactiveButtonClass);
      this._buttonElement.removeAttribute('disabled', true);
    }
  };

  // Слушатель для всех инпутов в форме.
  _setEventListeners = () => {

    // Сразу деактивируем кнопку, до ввода данных.
    this._toggleButtonState();

    this._inputList.forEach((inputElement) => {
      // Добавляем каждому полю обработчик на ввод данных.
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  };

  clearForm = () => {

    // Блокировка сабмита при открытии.
    this._popupSaveBtns.forEach((popupSaveBtn) => {
      this._inactiveButtonSave();
    });
    
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });

    // Удаляем красное подчеркивание ошибок инпутов.
    const popupInputsErrorsRedBorder = Array.from(this._formElement.querySelectorAll('.form__item'));
    popupInputsErrorsRedBorder.forEach((popupInputErrorRedBorder) => {
      popupInputErrorRedBorder.classList.remove('form__input_type_error');
    });
  };

  enableValidation = () => {
    this._setEventListeners();
  };

}
