
let mainContainer

const createMainContainer = (height, width) => {
  const newContainer = document.createElement('div')
  newContainer.classList.add('main-container')
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
    image.style.left = '0%'
  },
  setLeftImage: (idNumber) => {
    const image = document.getElementById(idNumber)
    image.style.visibility = 'visible'
    image.style.left = '-100%'
  },
  setRightImage: (idNumber) => {
    const image = document.getElementById(idNumber)
    image.style.visibility = 'visible'
    image.style.left = '100%'
  },
  setImageHidden: (idNumber) => {
    const image = document.getElementById(idNumber)
    image.style.visibility = 'hidden'
  }
}

export default manipulateDom
