export function Navigation(id) {
  const navigation = document.createElement("div");
  navigation.innerHTML = `
    <div class="nav-container">
      <div id="nav-menu" class="nav-btn">≡</div>
    </div>
    <div id="nav-bar" class="hidden nav-bar">
      <ul class="nav-list">
        <li class="nav-link"><a href="#home">Início</a></li>
        <li class="nav-link"><a href="#about">Sobre</a></li>
        <li class="nav-link"><a href="#services">Serviços</a></li>
        <li class="nav-link"><a href="#testimonials">Depoimentos</a></li>
        <li class="nav-link"><a href="#contact">Contatos</a></li>
      </ul>
    </div>
  `;
  return navigation;
}
