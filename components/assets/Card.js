export function Card(props) {
  return `
          <div class="${props.class}-card">
              <h2 class="${props.class}-card-subtitle">${props.title}</h2>
              <div class="${props.class}-card-content">${props.content}</div>
              <div class="${props.class}-card-assets"></div>
          </div>`;
}
