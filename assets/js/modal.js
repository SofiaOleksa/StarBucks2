const triger = document.querySelector('#triger')
const modal = document.querySelector('.modal')
const closew = document.querySelector('.btn-close')
const body = document.querySelector('body')

function showModal() {
    modal.classList.add('d-flex')
    body.classList.add('overflow-hidden')
}

function hideModal() {
    modal.classList.remove('d-flex')
    body.classList.remove('overflow-hidden')
}


triger.addEventListener('click', showModal)
closew.addEventListener('click', hideModal)