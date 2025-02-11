export function Sobre(Section, data) {
  const sobre = document.createElement("div");
  sobre.innerHTML = Section(data);
  return sobre;
}
