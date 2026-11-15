const menuButton = document.querySelector('.menu-icon')
const sideMenu = document.querySelector('.side-menu')
const closeButton = document.querySelector('.side-menu-close')

function openMenu() {
  sideMenu.classList.add('open')
  sideMenu.setAttribute('aria-hidden', 'false')
  menuButton.setAttribute('aria-expanded', 'true')
  document.body.classList.add('menu-open')
}

function closeMenu() {
  sideMenu.classList.remove('open')
  sideMenu.setAttribute('aria-hidden', 'true')
  menuButton.setAttribute('aria-expanded', 'false')
  document.body.classList.remove('menu-open')
}

menuButton.addEventListener('click', openMenu)
closeButton.addEventListener('click', closeMenu)

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeMenu()
})
