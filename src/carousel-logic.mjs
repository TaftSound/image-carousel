import manipulateDom from './DOM-methods.mjs'

const imageArray = []
let currentIndex = 0

const carouselOne = manipulateDom.createNewCarousel()
carouselOne.setCarouselDimensions('250px', '400px')

const addImageToArray = (image) => {
  imageArray.push(image)
}
const setCurrentImages = () => {
  checkForIndexReset()
  carouselOne.setCurrentImage(currentIndex)
  if (imageArray.length < 2) { return }
  carouselOne.setRightImage(getNextIndex(currentIndex))
  if (imageArray.length < 3) { return }
  carouselOne.setLeftImage(getLastIndex(currentIndex))
  if (imageArray.length > 3) { setHiddenImages(currentIndex) }
}
const checkForIndexReset = () => {
  if (currentIndex >= imageArray.length) { currentIndex = 0 }
  if (currentIndex < 0) { currentIndex = (imageArray.length - 1) }
}
const setHiddenImages = (currentIndex) => {
  for (const index in imageArray) {
    if (+index === currentIndex) { return }
    if (+index === getNextIndex(currentIndex)) { return }
    if (+index === getLastIndex(currentIndex)) { return }
    carouselOne.setImageHidden(+index)
    console.log('image hidden')
  }
}
const getNextIndex = () => {
  let nextIndex = currentIndex + 1
  if (nextIndex >= imageArray.length) {
    nextIndex = nextIndex - imageArray.length
  }
  return nextIndex
}
const getLastIndex = () => {
  let lastIndex = currentIndex - 1
  if (lastIndex < 0) {
    lastIndex = lastIndex + imageArray.length
  }
  return lastIndex
}

const shiftForward = () => {
  currentIndex++
  setCurrentImages()
}

const shiftBack = () => {
  currentIndex--
  setCurrentImages()
}

addEventListener('DOMContentLoaded', () => {
  setCurrentImages()
  carouselOne.createBackButton(shiftBack)
  // manipulateDom.createBackButton(shiftBack)
  carouselOne.createForwardButton(shiftForward)
  // manipulateDom.createForwardButton(shiftForward)
})

const imageCarousel = {
  addImage: (image) => {
    addImageToArray(image)
    const imageId = (imageArray.length - 1)
    carouselOne.addImage(image, imageId)
    // manipulateDom.addImage(image, imageId)
  }
}

export default imageCarousel

document.body.appendChild(carouselOne.getDomElement())
// document.body.appendChild(manipulateDom.getMainContainer())
