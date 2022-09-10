import manipulateDom from './DOM-methods.mjs'

const imageArray = []
let currentIndex = 0

const addImageToArray = (image) => {
  imageArray.push(image)
}
const setCurrentImages = (currentIndex) => {
  manipulateDom.setCurrentImage(`${currentIndex}`)
  if (imageArray.length < 2) { return }
  manipulateDom.setRightImage(`${getNextIndex(currentIndex)}`)
  if (imageArray.length < 3) { return }
  manipulateDom.setLeftImage(`${getLastIndex(currentIndex)}`)
}
const setHiddenImages = (currentIndex) => {
  imageArray.forEach((index) => {
    if (index === currentIndex) { return }
    if (index === getNextIndex(currentIndex)) { return }
    if (index === getLastIndex(currentIndex)) { return }
    manipulateDom.setImageHidden(index)
  })
}
const getNextIndex = (currentImageIndex) => {
  let nextIndex = currentImageIndex + 1
  if (nextIndex >= imageArray.length) {
    nextIndex = nextIndex - imageArray.length
  }
  return nextIndex
}
const getLastIndex = (currentImageIndex) => {
  let lastIndex = currentImageIndex - 1
  if (lastIndex < 0) {
    lastIndex = lastIndex + imageArray.length
  }
  return lastIndex
}

const shiftForward = () => {
  currentIndex++
  setCurrentImages(currentIndex)
  setHiddenImages(currentIndex)
}

const shiftBack = () => {
  currentIndex--
  setCurrentImages(currentIndex)
  setHiddenImages(currentIndex)
}

addEventListener('DOMContentLoaded', () => {
  setCurrentImages(currentIndex)
  manipulateDom.createBackButton(shiftBack)
  manipulateDom.createForwardButton(shiftForward)
})

const imageCarousel = {
  addImage: (image) => {
    addImageToArray(image)
    const imageId = (imageArray.length - 1)
    manipulateDom.addImage(image, imageId)
  }
}

export default imageCarousel

document.body.appendChild(manipulateDom.getMainContainer())
