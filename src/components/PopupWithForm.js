import Popup from "./Popup.js";

// Попап с формой.
export default class PopupWithForm extends Popup {
  constructor(popupSelector, errorsResetCallBack, submitCallBack, submitButtonName, getterCallBack = null) {
    super(popupSelector);
    this._errorsResetCallBack = errorsResetCallBack;
    this._submitCallBack = submitCallBack;
    this._getterCallBack = getterCallBack;
    this._submitButtonName = submitButtonName;
    this._submitButtonSelector = this._popup.querySelector('.form__save');
    this._popupForm = this._popup.querySelectorAll('.form__item'); //Инпуты выбранной формы.
    this._form = this._popup.querySelector('.form'); // Выбранная форма со всем содержимым.
    this._formInputs = Array.from(this._popupForm);
  }

  _getInputValues() {
    const formInputsValue = {};
    this._formInputs.forEach((formInput) => {
      formInputsValue[formInput.id.slice(6)] = formInput.value;
    });
    return formInputsValue
  }

  _setInputValues(values) {
    this._formInputs.forEach((inputElement) => {

      inputElement.value = values[inputElement.id.slice(6)];
    })
  }

  setEventListeners() {
    this._popup.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._submitButtonSelector.textContent = 'Сохранение...';
      this._submitButtonSelector.disabled = true;
      this._submitCallBack(this._getInputValues(), this);
    });
    super.setEventListeners();
  }

  open = () => {
    if (this._getterCallBack) {
      this._setInputValues(this._getterCallBack());
    } else {
      this._form.reset();
    }
    this._errorsResetCallBack();
    super.open();
  }

  close() {
    super.close();
    this._submitButtonSelector.textContent = this._submitButtonName;
    this._form.reset();
  }
}
