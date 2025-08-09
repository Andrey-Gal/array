const appNode = document.querySelector('.js-app');

function render(categories) {
  const cards = categories.map(c => {
    const bg = c.image ? ` style="background-image:url('${c.image}')"` : '';
    // link — относительный файл (auto.html и т.п.)
    return `
      <a class="category" href="${c.link}"${bg}>
        <p class="category__title">${c.title}</p>
      </a>
    `;
  });
  appNode.innerHTML = cards.join('');
}

fetch('categories.json')
  .then(r => r.json())
  .then(render)
  .catch(err => {
    console.error('Не удалось загрузить categories.json', err);
    appNode.innerHTML = '<p>Ошибка загрузки категорий.</p>';
  });
