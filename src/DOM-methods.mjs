import './carousel-style.css'
import LeftIcon from './images/chevron-left.svg'
import RightIcon from './images/chevron-right.svg'

const createMainContainer = () => {
  const newContainer = document.createElement('div')
  newContainer.classList.add('CRSL-container')
  return newContainer
}

const domObjectFactory = () => {
  const imageMap = new Map()
  const mainContainer = createMainContainer()
  return {
    setCarouselDimensions: (height, width) => {
      mainContainer.style.height = height
      mainContainer.style.width = width
    },
    getDomElement: () => {
      return mainContainer
    },
    addImage: (newImage, idNumber) => {
      imageMap.set(idNumber, newImage)
      newImage.style.visibility = 'hidden'
      mainContainer.appendChild(newImage)
    },
    setCurrentImage: (idNumber) => {
      const image = imageMap.get(idNumber)
      image.style.visibility = 'visible'
      image.style.opacity = '100%'
      image.style.left = '0%'
    },
    setLeftImage: (idNumber) => {
      const image = imageMap.get(idNumber)
      image.style.visibility = 'hidden'
      image.style.left = '-100%'
    },
    setRightImage: (idNumber) => {
      const image = imageMap.get(idNumber)
      image.style.visibility = 'hidden'
      image.style.left = '100%'
    },
    setImageHidden: (idNumber) => {
      const image = imageMap.get(idNumber)
      image.style.visibility = 'hidden'
    },
    createBackButton: (eventFunction) => {
      const backButton = document.createElement('div')
      backButton.innerHTML = LeftIcon
      backButton.classList.add('CRSL-back-button')
      mainContainer.appendChild(backButton)
      backButton.addEventListener('click', eventFunction)
    },
    createForwardButton: (eventFunction) => {
      const forwardButton = document.createElement('div')
      forwardButton.innerHTML = RightIcon
      forwardButton.classList.add('CRSL-forward-button')
      mainContainer.appendChild(forwardButton)
      forwardButton.addEventListener('click', eventFunction)
    }
  }
}

const manipulateDom = {
  createNewCarousel: () => {
    return domObjectFactory()
  }
}

export default manipulateDom
