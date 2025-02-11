export function TestimonialCards(props) {
  return `${props.testimonialsCardsData
    .map((cardData) => props.Card(cardData))
    .join("")}`;
}
