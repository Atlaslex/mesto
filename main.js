(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var n=function(){function n(e,r,o,i,c,a,u){var s=this,l=e.name,f=e.link,p=e._id,h=e.likes,_=e.owner._id;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),t(this,"_openPopup",(function(){s._openDeletePopup(s)})),t(this,"_isLiked",(function(){return s._likes.map((function(e){return e._id})).includes(s._userId)})),t(this,"_likeCard",(function(){s._isLiked(s._likes)?s._removeLikesCallback(s):s._setLikes(s)})),t(this,"removeImage",(function(){s._newItemElement.remove()})),t(this,"updateLike",(function(e){s._cardCounter.textContent=e.likes.length,s._cardLikeButton.classList.toggle("element__like_on"),s._likes=e.likes})),this._link=f,this._name=l,this._likes=h,this._numberLikes=h.length,this._id=p,this._isOwner=r===_,this._userId=r,this._setLikes=c,this._openDeletePopup=u,this._cardSelector=o,this._handleCardClick=i,this._removeLikesCallback=a,this.getItemElement=this.getItemElement.bind(this),this.updateLike=this.updateLike.bind(this)}var r,o;return r=n,(o=[{key:"_activeRemoveButton",value:function(){this._isOwner&&this._newItemElement.querySelector(".element__delete-button").classList.add("element__delete-button-on")}},{key:"_setEventListeners",value:function(){var e=this;this._cardDeleteButton.addEventListener("click",this._openPopup),this._newItemPhoto.addEventListener("click",(function(){e._handleCardClick(e._name,e._link)})),this._cardLikeButton.addEventListener("click",this._likeCard)}},{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(!0)}},{key:"getItemElement",value:function(){return this._newItemElement=this._getTemplate(),this._newItemPhoto=this._newItemElement.querySelector(".element__element-img"),this._newItemPlaceName=this._newItemElement.querySelector(".element__text"),this._cardDeleteButton=this._newItemElement.querySelector(".element__delete-button"),this._cardLikeButton=this._newItemElement.querySelector(".element__like"),this._cardCounter=this._newItemElement.querySelector(".element__counter"),this._newItemPhoto.src=this._link,this._newItemPhoto.alt="Фото ".concat(this._name),this._newItemPlaceName.textContent=this._name,this._cardCounter.textContent=this._numberLikes,this._setEventListeners(),this._isLiked(this._likes)&&this._cardLikeButton.classList.add("element__like_on"),this._activeRemoveButton(),this._newItemElement}}])&&e(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),n}();function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=o((function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),i(this,"_showInputError",(function(e,t){var n=r._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(r._settings.inputErrorClass),n.textContent=t,n.classList.add(r._settings.errorClass)})),i(this,"_hideInputError",(function(e){var t=r._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(r._settings.inputErrorClass),t.classList.remove(r._settings.errorClass),t.textContent=""})),i(this,"_checkInputValidity",(function(e){e.validity.valid?r._hideInputError(e):r._showInputError(e,e.validationMessage)})),i(this,"_hasInvalidInput",(function(e){return r._inputList.some((function(e){return!e.validity.valid}))})),i(this,"_inactiveButtonSave",(function(){r._buttonElement.classList.add(r._settings.inactiveButtonClass),r._buttonElement.setAttribute("disabled",!0)})),i(this,"_toggleButtonState",(function(){r._hasInvalidInput()?r._inactiveButtonSave():(r._buttonElement.classList.remove(r._settings.inactiveButtonClass),r._buttonElement.removeAttribute("disabled",!0))})),i(this,"_setEventListeners",(function(){r._inputList=Array.from(r._formElement.querySelectorAll(r._settings.inputSelector)),r._toggleButtonState(),r._inputList.forEach((function(e){e.addEventListener("input",(function(){r._checkInputValidity(e),r._toggleButtonState()}))}))})),i(this,"clearForm",(function(){r._inactiveButtonSave(),r._inputList.forEach((function(e){r._hideInputError(e)}))})),i(this,"enableValidation",(function(){r._setEventListeners()})),this._settings=t,this._formElement=n,this._buttonElement=this._formElement.querySelector(this._settings.submitButtonSelector)}));function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=t,this._containerSelector=n,this._container=document.querySelector(".".concat(this._containerSelector))}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container.prepend(this._renderer(e))}},{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t.addItem(e)}))}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l=function(){function e(t){var n,r,o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=function(e){"Escape"===e.key&&o.close()},(n="_handleEscClose")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[n]=r,this._popup=document.querySelector(t),this._popupCloseBtn=this._popup.querySelector(".popup__close")}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._popupCloseBtn.addEventListener("click",(function(){e.close()})),this._popup.addEventListener("mousedown",(function(t){t.target===t.currentTarget&&e.close()}))}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _(e,t){return _=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},_(e,t)}function d(e,t){if(t&&("object"===f(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return y(e)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(){return m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=v(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},m.apply(this,arguments)}function v(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=b(e)););return e}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_(e,t)}(c,e);var t,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=b(r);if(o){var n=b(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return d(this,e)});function c(e,t,n,r){var o,a,u=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;return p(this,c),g(y(a=i.call(this,e)),"open",(function(){a._getterCallBack?a._setInputValues(a._getterCallBack()):a._form.reset(),a._errorsResetCallBack(),m((o=y(a),b(c.prototype)),"open",o).call(o)})),a._errorsResetCallBack=t,a._submitCallBack=n,a._getterCallBack=u,a._submitButtonName=r,a._submitButtonSelector=a._popup.querySelector(".form__save"),a._popupForm=a._popup.querySelectorAll(".form__item"),a._form=a._popup.querySelector(".form"),a._formInputs=Array.from(a._popupForm),a}return t=c,(n=[{key:"_getInputValues",value:function(){var e={};return this._formInputs.forEach((function(t){e[t.id.slice(6)]=t.value})),e}},{key:"_setInputValues",value:function(e){this._formInputs.forEach((function(t){t.value=e[t.id.slice(6)]}))}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("submit",(function(t){t.preventDefault(),e._submitButtonSelector.textContent="Сохранение...",e._submitButtonSelector.disabled=!0,e._submitCallBack(e._getInputValues(),e)})),m(b(c.prototype),"setEventListeners",this).call(this)}},{key:"close",value:function(){m(b(c.prototype),"close",this).call(this),this._submitButtonSelector.textContent=this._submitButtonName,this._form.reset()}}])&&h(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(l);function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function E(e,t,n){return t&&k(e.prototype,t),n&&k(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var O=E((function e(t){var n=this,r=t.nameSelector,o=t.jobSelector,i=t.avatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),S(this,"getUserInfo",(function(){return{title:n._nameElement.textContent,job:n._jobElement.textContent,avatar:n._avatarElement}})),S(this,"setUserInfo",(function(e){var t=e.title,r=e.job,o=e.avatar,i=e._id;n._nameElement.textContent=t||"",n._jobElement.textContent=r||"",n._avatarElement.src=o||"",n._id=i})),S(this,"getUserId",(function(){return n._id})),this._nameSelector=r,this._jobSelector=o,this._avatarSelector=i,this._nameElement=document.querySelector(this._nameSelector),this._jobElement=document.querySelector(this._jobSelector),this._avatarElement=document.querySelector(this._avatarSelector)}));function j(e){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},j(e)}function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function C(){return C="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=L(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},C.apply(this,arguments)}function L(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=q(e)););return e}function P(e,t){return P=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},P(e,t)}function B(e,t){if(t&&("object"===j(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function q(e){return q=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},q(e)}var R=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&P(e,t)}(c,e);var t,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=q(r);if(o){var n=q(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return B(this,e)});function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=i.call(this,e))._popupImg=t._popup.querySelector(".popup__image"),t._popupImgName=t._popup.querySelector(".popup__title"),t}return t=c,(n=[{key:"open",value:function(e,t){this._popupImg.src=t,this._popupImg.alt="Фото ".concat(e),this._popupImgName.textContent=e,C(q(c.prototype),"open",this).call(this)}}])&&I(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(l);function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var T=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._configApi=t,this._serverUrl=this._configApi.serverUrl,this._headers=this._configApi.headers}var t,n;return t=e,(n=[{key:"_checkAnswer",value:function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._serverUrl,"/cards"),{headers:this._headers}).then((function(t){return e._checkAnswer(t)}))}},{key:"addNewCard",value:function(e){var t=this;return fetch("".concat(this._serverUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return t._checkAnswer(e)}))}},{key:"getUserInfo",value:function(){var e=this;return fetch("".concat(this._serverUrl,"/users/me"),{headers:this._headers}).then((function(t){return e._checkAnswer(t)}))}},{key:"patchUserInfo",value:function(e){var t=this;return fetch("".concat(this._serverUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.title,about:e.job})}).then((function(e){return t._checkAnswer(e)}))}},{key:"patchAvatarInfo",value:function(e){var t=this;return fetch("".concat(this._serverUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then((function(e){return t._checkAnswer(e)}))}},{key:"setLike",value:function(e){var t=this;return fetch("".concat(this._serverUrl,"/cards/").concat(e._id,"/likes"),{method:"PUT",headers:this._headers}).then((function(e){return t._checkAnswer(e)}))}},{key:"toggleLike",value:function(e,t){var n=this;return fetch("".concat(this._serverUrl,"/cards/").concat(e,"/likes"),{headers:this._headers,method:t?"DELETE":"PUT"}).then((function(e){n._checkAnswer(e),console.log(e)}))}},{key:"deleteLike",value:function(e){var t=this;return fetch("".concat(this._serverUrl,"/cards/").concat(e._id,"/likes"),{method:"DELETE",headers:this._headers}).then((function(e){return t._checkAnswer(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._serverUrl,"/cards/").concat(e._id),{method:"DELETE",headers:this._headers}).then((function(e){return t._checkAnswer(e)}))}}])&&A(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function U(e){return U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},U(e)}function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function D(){return D="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=N(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},D.apply(this,arguments)}function N(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=H(e)););return e}function V(e,t){return V=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},V(e,t)}function F(e,t){if(t&&("object"===U(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return J(e)}function J(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function H(e){return H=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},H(e)}var M=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&V(e,t)}(c,e);var t,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=H(r);if(o){var n=H(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return F(this,e)});function c(e,t){var n,r,o,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),a=function(){n._removeCardCallback(n._data),n.close()},(o="_removeCard")in(r=J(n=i.call(this,e)))?Object.defineProperty(r,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[o]=a,n._confirmationButton=n._popup.querySelector(".form__save"),n._removeCardCallback=t,n}return t=c,(n=[{key:"setEventListeners",value:function(){D(H(c.prototype),"setEventListeners",this).call(this),this._confirmationButton.addEventListener("click",this._removeCard)}},{key:"open",value:function(e){this._data=e,D(H(c.prototype),"open",this).call(this)}},{key:"close",value:function(){D(H(c.prototype),"close",this).call(this)}}])&&x(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(l);function z(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var $={formSelector:".form",inputSelector:".form__item",submitButtonSelector:".form__save",inactiveButtonClass:"form__save_inactive",inputErrorClass:"form__input_type_error",errorClass:"form__input-error"},G=document.querySelector(".profile__edit-button"),K=document.querySelector(".popup_type_edit-profile").querySelector(".form"),Q=document.querySelector(".form_type_add"),W=document.querySelector(".profile__add-button"),X=document.querySelector(".profile__avatar-edit-button"),Y=(document.querySelector(".popup_type_edit-avatar"),document.querySelector(".form_type_edit-avatar")),Z=new c($,K),ee=new c($,Q),te=new c($,Y),ne=new T({serverUrl:"https://mesto.nomoreparties.co/v1/cohort-45",headers:{authorization:"5bbfedaa-4f8d-4bb6-adea-81a84541445e","Content-Type":"application/json"}});Promise.all([ne.getUserInfo(),ne.getInitialCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],c=!0,a=!1;try{for(n=n.call(e);!(c=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);c=!0);}catch(e){a=!0,o=e}finally{try{c||null==n.return||n.return()}finally{if(a)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return z(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?z(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];le.setUserInfo({title:o.name,job:o.about,avatar:o.avatar,_id:o._id}),se.renderItems(i.reverse())})).catch((function(e){console.log(e)}));var re=new R(".popup_type_img");function oe(e,t){re.open(e,t)}re.setEventListeners();var ie=new M(".popup_type_delete",(function(e){ne.deleteCard(e).then((function(){e.removeImage()})).catch((function(e){console.log(e)}))})),ce=function(e){ie.open(e)};ie.setEventListeners();var ae=function(e){ne.setLike(e).then((function(t){e.updateLike(t)})).catch((function(e){console.log(e)}))},ue=function(e){ne.deleteLike(e).then((function(t){e.updateLike(t)})).catch((function(e){console.log(e)}))},se=new u((function(e){return new n(e,le.getUserId(),".template",oe,ae,ue,ce).getItemElement()}),"elements"),le=new O({nameSelector:".profile__title",jobSelector:".profile__subtitle",avatarSelector:".profile__avatar"}),fe=new w(".popup_type_add-card",ee.clearForm,(function(e){ne.addNewCard(e).then((function(e){se.addItem(e),fe.close()})).catch((function(e){console.log(e)}))}),"Создать");fe.setEventListeners();var pe=new w(".popup_type_edit-profile",Z.clearForm,(function(e){ne.patchUserInfo(e).then((function(e){le.setUserInfo({title:e.name,job:e.about,avatar:e.avatar}),pe.close()})).catch((function(e){console.log(e)}))}),"Сохранить",le.getUserInfo);pe.setEventListeners();var he=new w(".popup_type_edit-avatar",te.clearForm,(function(e){ne.patchAvatarInfo(e).then((function(e){le.setUserInfo({title:e.name,job:e.about,avatar:e.avatar}),he.close()})).catch((function(e){console.log(e)}))}),"Сохранить");he.setEventListeners(),W.addEventListener("click",(function(){Q.reset(),ee.clearForm(),fe.open()})),G.addEventListener("click",(function(e){pe.open()})),X.addEventListener("click",(function(e){he.open()})),ee.enableValidation(),Z.enableValidation(),te.enableValidation()})();