// Информация о пользователе
export default class UserInfo {
  constructor({ nameSelector, jobSelector }) {
    this._nameSelector = nameSelector;
    this._jobSelector = jobSelector;
    this._nameElement = document.querySelector(`.${this._nameSelector}`);
    this._jobElement = document.querySelector(`.${this._jobSelector}`);
  }

  // Создаём пустой объект и наполняем его данными о пользователе.
  getUserInfo() {
    this._userData = {};
    this._userData.name = this._nameElement.textContent;
    this._userData.job = this._jobElement.textContent;
    return this._userData;
  }

  setUserInfo(formData) {
    this._nameElement.textContent = formData.name;
    this._jobElement.textContent = formData.vocation;
  }

}
