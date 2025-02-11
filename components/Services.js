export function Services(Section, data) {
  const services = document.createElement("div");
  services.innerHTML = Section(data);
  return services;
}
