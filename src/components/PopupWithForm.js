import Popup from "./Popup.js";

// Попап с формой.
export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleSubmitBtn) {
    super(popupSelector);
    this._popupFormInput = this._popup.querySelector(".form__input");
    this.handleSubmitBtn = handleSubmitBtn;
    this._popupForm = this._popup.querySelectorAll('.form__item'); //Инпуты выбранной формы.
    this._form = this._popup.querySelector('.form'); // Выбранная форма со всем содержимым.

  }

  _getInputValues() {
    const formInputsValue = {};
    const formInputs = Array.from(
      this._popupForm
    )

    formInputs.forEach((formInput) => {
      const inputName = formInput.getAttribute("name");
      formInputsValue[inputName] = formInput.value;
    });
    return formInputsValue;

  }

  setEventListeners() {
    this._popup.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this.handleSubmitBtn(this._getInputValues());
      this.close();
    });
    super.setEventListeners();
  }

  close() {
    super.close();
    this._form.reset();
  }
}
