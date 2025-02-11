import { Card } from "./components/assets/Card.js";
import { ContactCards } from "./components/assets/ContactCards.js";
import { Section } from "./components/assets/Section.js";
import { ServicesCards } from "./components/assets/ServicesCards.js";
import { TestimonialCards } from "./components/assets/TestimonialCards.js";
import { Contact } from "./components/Contact.js";
import { FuncTest } from "./components/FuncTest.js";
import { Hero } from "./components/Hero.js";
import { Navigation } from "./components/Navigation.js";
import { Services } from "./components/Services.js";
import { Sobre } from "./components/Sobre.js";
import { Testimonials } from "./components/Testimonials.js";

function renderiza(parent, child) {
  parent.appendChild(child);
}

const header = document.getElementById("header");
const main = document.getElementById("main");
const footer = document.getElementById("footer");

const testimonialsCardsData = [
  {
    class: "depoimentos",
    title: "Denise, humana Mãe",
    content: "Diana é uma gata que dorme muito.",
  },
  {
    class: "depoimentos",
    title: "Lucas, melhor humano",
    content: "Citação minha sobre a Diana",
  },
  {
    class: "depoimentos",
    title: "Maria, humana mais incrível",
    content: "Citação sobre a Diana",
  },
];

const servicesCardsData = [
  {
    class: "services",
    title: "Contabilidade de Ração",
    content: "Gerenciamento do estoque de ração",
  },
  {
    class: "services",
    title: "Conformidade Felina",
    content: "Auditoria contínua dos padrões felinos do ambiente",
  },
  {
    class: "services",
    title: "Registro de Gato",
    content: "Consultoria jurídica junto ao sindicato dos felídeos",
  },
];

const contactCardsData = [
  {
    class: "contact",
    title: "Telefone",
    content: "(xx) xxxxx-xxxx",
  },
  {
    class: "contact",
    title: "E-mail",
    content: "consultoriafelina@felideos.br",
  },
  {
    class: "contact",
    title: "LinkedIn",
    content: "Diana-dev",
  },
];

const sectionsData = [
  {
    id: "home",
    class: "hero",
    title: "Diana Lily",
    content: "Como gato de apartamento, vou dormir e existir",
    button: "FALE COMIGO",
  },
  {
    id: "about",
    class: "sobre",
    title: "Sobre",
    content:
      "Neste espaço, adicione uma breve biografia falando da pessoa. Você pode falar sobre sua especialização ou sua experiência. Convença o leitor de que essa é a pessoa certa.",
    button: "",
  },
  {
    id: "services",
    class: "services",
    title: "Serviços",
    content: ServicesCards({ Card, servicesCardsData }),
    button: "",
  },
  {
    id: "testimonials",
    class: "depoimentos",
    title: "Depoimentos",
    content: TestimonialCards({ Card, testimonialsCardsData }),
    button: "",
  },
  {
    id: "contact",
    class: "contact",
    title: "Trabalhe Comigo!",
    content: ContactCards({ Card, contactCardsData }),
    button: "Minhas Redes Sociais",
  },
];

const navigation = Navigation();
const hero = Hero(Section, sectionsData[0]);
const sobre = Sobre(Section, sectionsData[1]);
const services = Services(Section, sectionsData[2]);
const testimonials = Testimonials(Section, sectionsData[3]);
const contact = Contact(Section, sectionsData[4]);

renderiza(header, navigation);

renderiza(main, hero);
renderiza(main, sobre);
renderiza(main, services);
renderiza(main, testimonials);
renderiza(main, contact);

// lidando com os botões renderizados:

const navBtn = document.getElementById("nav-menu");
const navBar = document.getElementById("nav-bar");

const sectionsBtn = sectionsData
  .map((section) => document.getElementById(section.id + "-btn"))
  .filter((btn) => btn !== null);
// console.log(navBtn);

sectionsBtn.map((button) =>
  button.addEventListener("click", () => {
    FuncTest();
  })
);

navBtn.addEventListener("click", () => navBar.classList.toggle("hidden"));

navBar.addEventListener("click", () => navBar.classList.toggle("hidden"));
