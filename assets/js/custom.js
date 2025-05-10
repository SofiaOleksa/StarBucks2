const burger = document.querySelector('.btn-burger')
const mobileContainer = document.querySelector('.mobile-container')

function toggleMobileContainer() {
    mobileContainer.classList.toggle('show')
    burger.classList.toggle('active')
}

burger.addEventListener('click', toggleMobileContainer)

const label = document.querySelectorAll('.label')

label.forEach(item => {
    item.addEventListener('mouseover', function() {
        item.classList.add('hovered')
    })

    item.addEventListener('mouseout', function() {
        item.classList.remove('hovered')
    })
})

const btn = document.querySelectorAll('.btn')

const swiper = new Swiper('.swiper-product', {
    slidesPerView: 4,
    loop: true,
    speed: 500,
    spaceBetween: 48,
    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
   
  });