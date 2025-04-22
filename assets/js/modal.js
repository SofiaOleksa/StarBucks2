const body = document.querySelector('body')
const trigers = document.querySelectorAll('[data-modal]')
const closeTrigers = document.querySelectorAll('[data-close-modal]')

function closeModal(event) {
    event.preventDefault()

    if (event.target.hasAttribute('data-close-modal')) {
        event.target.closest('.modal').classList.remove('d-flex')
        body.classList.remove('overflow-hidden')

        if (event.target.closest('.modal').id == 'cooking') {
            stopVideo()
        }
    }
}

function showModal(modal) {
    modal.classList.add('d-flex')
    body.classList.add('overflow-hidden')

    if (modal.id == 'cooking') {
        playVideo()
    }
}

trigers.forEach(
    function(element) {
        const modalId = element.getAttribute('data-modal')
        element.addEventListener('click', function(event) {
            event.preventDefault()
            const modal = document.getElementById(modalId)
            showModal(modal)
        })
    }
)

closeTrigers.forEach(function(element) {
    element.addEventListener('click', function(event) {
        closeModal(event)
    })
})


/*

EXAMPLE:

Button trigger modal
<a href="#" data-modal="feedback">feedback</a>

Modal 
<div id="feedback" class="modal">
    <a href="#" class="btn-close" data-close-modal></a>
    <h2>feedback</h2>
</div> 
.
.
.
.
.
.
TRIGER
<a href="#" data-modal="qwerty">qwerty</a>

MODAL WINDOW
<div id="qwerty" class="modal">
    <a href="#" class="btn-close" data-close-modal></a>
    <h2>qwerty</h2>
</div> 

*/