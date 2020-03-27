import "./style.css";
import {Api} from './js/api';
import {CardList} from './js/card-list.js';
import {Card} from './js/card.js';
import {FormValidator} from './js/form-validator.js';
import {Popup} from './js/popup.js';
import {UserInfo} from './js/user-info.js';

(function() {

// Объявляем переменные
const placesList = document.querySelector('.places-list');
const popupForm = document.forms.new;
const editProfileForm = document.forms.profile;
const addCardButton = document.querySelector('.user-info__button');
const addCardSubmit = document.querySelector('.popup__button');
const userInfoButton = document.querySelector('.user-info__edit-profile');
const profileButton = document.querySelector('.edit-profile__button');
const closePopup = document.querySelectorAll('.popup-block__close');
const formUserName = editProfileForm.elements.name;
const formAboutUser = editProfileForm.elements.about;
const formCardName = popupForm.elements.title;
const formPictureLink = popupForm.elements.link;

const userName = document.querySelector('.user-info__name');
const userJob = document.querySelector('.user-info__job');
const userAvatar = document.querySelector('.user-info__photo');
const popupEditProfile = document.querySelector('.edit-profile');
const popupAddCard = document.querySelector('.popup');

const card = new Card();
const addCard = card.create;
const popup = new Popup();
const userInfo = new UserInfo(userName, userJob);
const validateAddCardForm = new FormValidator(popupForm);
const validateEditProfileForm = new FormValidator(editProfileForm);
const api = new Api('4b70a63a-218c-4b4c-9259-0286cc25ee55', 'https://praktikum.tk/cohort8/');

// Объект для передачи параметров функции открытия попапа
const popupObj = {
  editProfileForm,
  popupForm,
  addCardSubmit,
  popupAddCard,
  profileButton,
  formUserName,
  formAboutUser,
  userName,
  userJob,
  popupEditProfile
}

// 1. Загрузка первоначальных карточек с сервера
api.getCards()
  .then((res) => {
    const initialCards = res;
    const cardList = new CardList(placesList, initialCards, card);
    cardList.render();
  })

// 2. Загрузка информации о пользователе с сервера
api.getUserInfo()
  .then((user) => {
    userName.textContent = user.name;
    userJob.textContent = user.about;
    userAvatar.style.backgroundImage = `url(${user.avatar})`;
  })

// 3. Форма редактирования профиля
editProfileForm.addEventListener('submit', function(event) {
  event.preventDefault();
  api.postUser(formUserName.value, formAboutUser.value)
    .then((res) => {
      userInfo.updateUserInfo(res);
      popup.close(event);
    })
});

// 4. Добавление карточки
popupForm.addEventListener('submit', function(event) {
  event.preventDefault();
  api.postCard(formCardName.value, formPictureLink.value)
    .then((res) => {
      placesList.appendChild(addCard(res.name, res.link));
      popup.close(event);  
    })
});

// Добавляем обработчики событий
addCardButton.addEventListener('click', (event) => {
  const element = event.target;
  popupObj.element = element;
  popup.open(popupObj);
});

userInfoButton.addEventListener('click', (event) => {
  const element = event.target;
  popupObj.element = element;
  popup.open(popupObj);
  userInfo.setUserInfo(formUserName, formAboutUser);
  popup.resetError();
});

closePopup.forEach((element) => {
  element.addEventListener('click', popup.close);
})

document.addEventListener('click', function(event) {
  if (event.target.classList.contains('place-card__image')) {
    popup.zoomImage(event.target);
  }
  if (event.target.classList.contains('place-card__like-icon')) {
    card.like(event)
  }  
  if (event.target.classList.contains('place-card__delete-icon')) card.remove(event);
});

validateEditProfileForm.setEventListeners(); // Валидация формы редактирования данных пользователя
validateAddCardForm.setEventListeners(); // Валидация формы добавления карточки
})();