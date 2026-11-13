const headers = document.querySelectorAll('.join-options h3')
const texts = document.querySelectorAll('.join-options p')

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