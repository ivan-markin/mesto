export class Popup {
  constructor(validateForm) {
    this.validateForm = validateForm;
  }
  open(popupObj) {
    if (popupObj.element.classList.contains('user-info__button')) {
      popupObj.popupAddCard.classList.add('popup-block__is-opened');
      document.addEventListener('keydown', (event) => {
        if (event.keyCode === 27) popupObj.popupAddCard.classList.remove('popup-block__is-opened');
      });
      popupObj.popupForm.reset();
      popupObj.addCardSubmit.setAttribute('disabled', true);
    }
    if (popupObj.element.classList.contains('user-info__edit-profile')) {
      popupObj.popupEditProfile.classList.add('popup-block__is-opened');
      document.addEventListener('keydown', (event) => {
        if (event.keyCode === 27) popupEditProfile.classList.remove('popup-block__is-opened');
      });

      if (popupObj.formUserName.checkValidity() && popupObj.formAboutUser.checkValidity()) popupObj.profileButton.removeAttribute('disabled');
    }
  }
  close(event) {
    event.target.closest('.popup-block').classList.remove('popup-block__is-opened');
  }
  zoomImage(element) {
    const bigImageContent = document.querySelector('.big-image');
    const bigImageContainer = document.querySelector('.big-image__container');
    const imgUrl = element.style.backgroundImage.slice(5, (element.style.backgroundImage.length - 2));
    const bigImage = document.createElement('img');
    const bigImageClose = document.createElement('img');

    if (bigImageContainer.hasChildNodes()) {
      while (bigImageContainer.firstChild) {
        bigImageContainer.removeChild(bigImageContainer.firstChild);
      }
    };

    bigImage.classList.add('big-image__image');
    bigImageClose.classList.add('big-image__close');

    bigImageContainer.appendChild(bigImage);
    bigImageContainer.appendChild(bigImageClose);

    bigImage.setAttribute('src', `${imgUrl}`);
    bigImage.setAttribute('alt', '');

    bigImageClose.setAttribute('src', './images/close.svg');
    bigImageClose.setAttribute('alt', '');

    bigImageContent.classList.toggle('big-image_is-opened');

    bigImageClose.addEventListener('click', () => {
      bigImageContent.classList.remove('big-image_is-opened')
    });
    document.addEventListener('keydown', (event) => {
      if (event.keyCode === 27) bigImageContent.classList.remove('big-image_is-opened');
    });
  }
  resetError() {
    const errorMessages = document.getElementsByClassName('error-message');
    const errorArray = Array.from(errorMessages);
    errorArray.forEach((element) => {
      element.classList.remove('error-message_active');
    });
  }
}