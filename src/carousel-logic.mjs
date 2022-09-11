import manipulateDom from './DOM-methods.mjs'

const carouselFactory = () => {
  const imageArray = []
  let currentIndex = 0
  const carousel = manipulateDom.createNewCarousel()

  const addImageToArray = (image) => {
    imageArray.push(image)
  }
  const setCurrentImages = () => {
    checkForIndexReset()
    carousel.setCurrentImage(currentIndex)
    if (imageArray.length < 2) { return }
    carousel.setRightImage(getNextIndex(currentIndex))
    if (imageArray.length < 3) { return }
    carousel.setLeftImage(getLastIndex(currentIndex))
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
      carousel.setImageHidden(+index)
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
    carousel.createBackButton(shiftBack)
    carousel.createForwardButton(shiftForward)
  })

  return {
    setDimentions: (height, width) => {
      carousel.setCarouselDimensions(height, width)
    },
    addImage: (image) => {
      addImageToArray(image)
      const imageId = (imageArray.length - 1)
      carousel.addImage(image, imageId)
    },
    getCarousel: () => {
      return carousel.getDomElement()
    }
  }
}

const imageCarousel = {
  createNewCarousel: () => {
    return carouselFactory()
  }
}

export default imageCarousel
