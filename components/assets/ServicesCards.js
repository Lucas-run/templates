export function ServicesCards(props) {
  return `${props.servicesCardsData
    .map((cardData) => props.Card(cardData))
    .join("")}`;
}
