export function Contact(Section, data) {
  const contact = document.createElement("div");
  contact.innerHTML = Section(data);
  return contact;
}
