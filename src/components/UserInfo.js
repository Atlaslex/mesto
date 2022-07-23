// Информация о пользователе
export default class UserInfo {
  constructor({ nameSelector, jobSelector, avatarSelector }) {
    this._nameSelector = nameSelector;
    this._jobSelector = jobSelector;
    this._avatarSelector = avatarSelector;
    this._nameElement = document.querySelector(this._nameSelector);
    this._jobElement = document.querySelector(this._jobSelector);
    this._avatarElement = document.querySelector(this._avatarSelector);
  }

  getUserInfo = () => {
    return {
      title: this._nameElement.textContent,
      job: this._jobElement.textContent,
      avatar: this._avatarElement
    };
  }

  setUserInfo = ({ title, job, avatar, _id }) => {
    this._nameElement.textContent = title || '';
    this._jobElement.textContent = job || '';
    this._avatarElement.src = avatar || '';
    this._id = _id;
  }
  getUserId = () => {
    return this._id;
  }

}
