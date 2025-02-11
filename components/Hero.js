export function Hero(Section, data) {
  const hero = document.createElement("div");
  hero.innerHTML = Section(data);
  return hero;
}
