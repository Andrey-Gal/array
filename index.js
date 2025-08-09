const appNode = document.querySelector('.js-app');

function cardHTML(cat) {
  const hasImg = Boolean(cat.image);
  const href = cat.link; // относительные ссылки: auto.html и т.п.

  return `
    <a class="category ${hasImg ? '' : '--noimg'}" href="${href}" aria-label="${cat.title}">
      ${hasImg ? `<div class="category__bg" style="background-image:url('${cat.image}')"></div>
                  <div class="category__overlay" aria-hidden="true"></div>` : ''}
      <p class="category__title">${cat.title}</p>
    </a>
  `;
}

function render(categories) {
  appNode.innerHTML = categories.map(cardHTML).join('');
}

fetch('categories.json')
  .then(r => {
    if (!r.ok) throw new Error('Не удалось загрузить categories.json');
    return r.json();
  })
  .then(render)
  .catch(err => {
    console.error(err);
    appNode.innerHTML = `<p style="padding:16px">Ошибка загрузки категорий. Проверь файл <code>categories.json</code>.</p>`;
  });
