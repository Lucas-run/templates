export function ContactCards(props) {
  return `${props.contactCardsData
    .map((cardData) => props.Card(cardData))
    .join("")}`;
}
