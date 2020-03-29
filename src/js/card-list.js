export class CardList {
  constructor(container, cardsArray, card) {
    this.cardsArray = cardsArray;
    this.container = container;
    this.card = card;
  }
  addCard(cardElement) {
    this.container.appendChild(cardElement);  
  }
  render() {
    for (const element of this.cardsArray) {
      const card = this.card.create(element.name, element.link);
      this.container.appendChild(card);
    }  
  }
};