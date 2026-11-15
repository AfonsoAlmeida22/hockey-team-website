const headers = document.querySelectorAll('.join-options h3')
const texts = document.querySelectorAll('.join-options p')
const cards = document.querySelectorAll('.player-card')
const prevBtn = document.querySelector('.carousel-btn.prev')
const nextBtn = document.querySelector('.carousel-btn.next')
let current = 1

headers.forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling
    const isOpen = content.classList.contains('show')
    
    texts.forEach(text => text.classList.remove('show'))
    headers.forEach(h => h.classList.remove('open'))
    
    if (!isOpen) {
      content.classList.add('show')
      header.classList.add('open')
    }
  })
})

function updateCarousel() {
  const total = cards.length

  cards.forEach((card, i) => {
    let offset = i - current
    if (offset > total / 2) offset -= total
    if (offset < -total / 2) offset += total

    card.classList.remove('far-left', 'prev2', 'prev', 'active', 'next', 'next2', 'far-right')

    if (offset === 0) card.classList.add('active')
    else if (offset === -1) card.classList.add('prev')
    else if (offset === 1) card.classList.add('next')
    else if (offset === -2) card.classList.add('prev2')
    else if (offset === 2) card.classList.add('next2')
    else if (offset < 0) card.classList.add('far-left')
    else card.classList.add('far-right')
  })
}

nextBtn.addEventListener('click', () => {
  current = (current + 1) % cards.length
  updateCarousel()
})

prevBtn.addEventListener('click', () => {
  current = (current - 1 + cards.length) % cards.length
  updateCarousel()
})

updateCarousel()