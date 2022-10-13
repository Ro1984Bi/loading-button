const search = document.querySelector('#search')
const button = document.querySelector('#search div')

search.addEventListener('click', toggleButton)

function toggleButton() {
    button.classList.toggle('load')
}