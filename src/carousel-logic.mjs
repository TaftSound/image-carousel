import manipulateDom from './DOM-methods.mjs'

const imageArray = []

const addImageToArray = (image) => {
  imageArray.push(image)
}

addEventListener('DOMContentLoaded', () => {
  manipulateDom.setCurrentImage('0')
  if (imageArray.length < 2) { return }
  manipulateDom.setLeftImage(`${(imageArray.length - 1)}`)
  if (imageArray.length < 3) { return }
  manipulateDom.setRightImage('1')
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
