// Информация о пользователе
export default class UserInfo {
  constructor(profileConfiguration) {
    this._nameSelector = profileConfiguration.nameSelector;
    this._jobSelector = profileConfiguration.jobSelector;
    this._nameElement = document.querySelector(`.${this._nameSelector}`);
    this._jobElement = document.querySelector(`.${this._jobSelector}`);
  }

  getUserInfo = () => {
    return { title: this._nameElement.textContent, job: this._jobElement.textContent };
  }

  setUserInfo(formData) {
    this._nameElement.textContent = formData.name || '';
    this._jobElement.textContent = formData.vocation || '';
  }
}
