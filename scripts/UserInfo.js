export default class UserInfo {
  constructor(profileTitle, profileSubtitle) {
    this._profileTitle = document.querySelector(profileTitle);
    this._profileSubtitle = document.querySelector(profileSubtitle);
  }

  getUserInfo() {
    const profileInfo = {};

    profileInfo[''] = this._profileTitle.textContent;
    profileInfo[''] = this._profileSubtitle.textContent;

    return profileInfo;
  }

  setUserInfo = (nameInput, descriptionInput) => {
    this._profileTitle.textContent = nameInput;
    this._profileSubtitle.textContent = descriptionInput;
  };
}
