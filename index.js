const appNode = document.querySelector('.js-app')

function render(categories) {
    let categoriesHTML = ''

    for (i = 0; i < categories.length; i++) {
        categoriesHTML += `
            <a class="category" href="${categories[i].link}">
                <p class="category__title">${categories[i].title}</p>
            </a>
        `
    }

    appNode.innerHTML = categoriesHTML
}


fetch('categories.json')
    .then((response) => response.json())
    .then((categories) => {
        render(categories)
    })
