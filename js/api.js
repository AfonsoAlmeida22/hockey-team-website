const dogImage = document.querySelector('#dog-image')
const dogStatus = document.querySelector('#dog-status')
const dogButton = document.querySelector('#dog-button')

function showStatus(text) {
  dogStatus.textContent = text
  dogStatus.hidden = false
  dogImage.hidden = true
}

async function loadDog() {
  dogButton.disabled = true

  try {
    const response = await fetch('https://dog.ceo/api/breeds/image/random')
    if (!response.ok) throw new Error(`HTTP ${response.status}`)

    const data = await response.json()
    if (data.status !== 'success') throw new Error('Resposta inválida da API')

    const nextImage = new Image()
    nextImage.src = data.message
    await nextImage.decode()

    dogImage.src = data.message
    dogImage.hidden = false
    dogStatus.hidden = true
  } catch (error) {
    console.error(error)
    showStatus('Não foi possível carregar a imagem. Tenta novamente.')
  } finally {
    dogButton.disabled = false
  }
}

dogButton.addEventListener('click', loadDog)
loadDog()
