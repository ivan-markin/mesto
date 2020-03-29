export class Card {
  constructor(name, image) {
    this.name = name;
    this.image = image;
    this.create = this.create.bind(this);
  }
  like(event) {
      event.target.classList.toggle('place-card__like-icon_liked');
  }
  remove(event) {
    if (event.target.classList.contains('place-card__delete-icon')) {
      event.target.closest('.places-list').removeChild(event.target.closest('.place-card'));
    }
  }
  create(cardTitle, imageLink) {
    const placeCard = document.createElement('div');
    const placeCardImage = document.createElement('div');
    const placeCardDeleteIcon = document.createElement('button');
    const placeCardDescription = document.createElement('div');
    const placeCardName = document.createElement('h4');
    const placeCardLikeIcon = document.createElement('button');
    const placeCardLikeContainer = document.createElement('div');
    const placeCardLikeCounter = document.createElement('p');

    placeCard.classList.add('place-card');
    placeCardImage.classList.add('place-card__image');
    placeCardDeleteIcon.classList.add('place-card__delete-icon');
    placeCardDescription.classList.add('place-card__description');
    placeCardName.classList.add('place-card__name');
    placeCardLikeIcon.classList.add('place-card__like-icon');
    placeCardLikeContainer.classList.add('place-card__like-container');
    placeCardLikeCounter.classList.add('place-card__like-counter');

    placeCardName.textContent = cardTitle;
    placeCardImage.style.backgroundImage = `url(${imageLink})`;

    placeCard.appendChild(placeCardImage);
    placeCard.appendChild(placeCardDescription);
    placeCardImage.appendChild(placeCardDeleteIcon);
    placeCardDescription.appendChild(placeCardName);
    // placeCardDescription.appendChild(placeCardLikeContainer);
    placeCardDescription.appendChild(placeCardLikeIcon);
    // placeCardLikeContainer.appendChild(placeCardLikeCounter);

    return placeCard;
  }
}