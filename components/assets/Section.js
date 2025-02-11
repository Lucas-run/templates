export function Section(props) {
  return `
        <section id=${props.id} class="${props.class}-class">
            <h1 class="${props.class}-title">${props.title}</h1>
            <p class="${props.class}-content">${props.content}</p>
            <button id="${props.id}-btn" class="hidden ${props.class}-btn">${props.button}</button>
            <div class="${props.class}-assets"></div>
        </section>`;
}
