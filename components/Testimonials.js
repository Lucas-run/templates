export function Testimonials(Section, data) {
  const testimonials = document.createElement("div");
  testimonials.innerHTML = Section(data);
  return testimonials;
}
