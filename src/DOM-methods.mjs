import './style.css'
import LeftIcon from './images/chevron-left.svg'
import RightIcon from './images/chevron-right.svg'

let mainContainer

const createMainContainer = (height, width) => {
  const newContainer = document.createElement('div')
  newContainer.classList.add('carousel-container')
  newContainer.style.height = height
  newContainer.style.width = width
  mainContainer = newContainer
}

createMainContainer('250px', '400px')

const manipulateDom = {
  getMainContainer: () => {
    return mainContainer
  },
  addImage: (newImage, idNumber) => {
    newImage.setAttribute('id', idNumber)
    newImage.style.visibility = 'hidden'
    mainContainer.appendChild(newImage)
  },
  setCurrentImage: (idNumber) => {
    const image = document.getElementById(idNumber)
    image.style.visibility = 'visible'
    image.style.opacity = '100%'
    image.style.left = '0%'
  },
  setLeftImage: (idNumber) => {
    const image = document.getElementById(idNumber)
    image.style.visibility = 'hidden'
    // image.style.opacity = '0%'
    image.style.left = '-100%'
  },
  setRightImage: (idNumber) => {
    const image = document.getElementById(idNumber)
    image.style.visibility = 'hidden'
    // image.style.opacity = '0%'
    image.style.left = '100%'
  },
  setImageHidden: (idNumber) => {
    const image = document.getElementById(idNumber)
    image.style.visibility = 'hidden'
  },
  createBackButton: (eventFunction) => {
    const backButton = document.createElement('div')
    backButton.innerHTML = LeftIcon
    backButton.classList.add('carousel-back-button')
    mainContainer.appendChild(backButton)
    backButton.addEventListener('click', eventFunction)
  },
  createForwardButton: (eventFunction) => {
    const forwardButton = document.createElement('div')
    forwardButton.innerHTML = RightIcon
    forwardButton.classList.add('carousel-forward-button')
    mainContainer.appendChild(forwardButton)
    forwardButton.addEventListener('click', eventFunction)
  }
}

export default manipulateDom
