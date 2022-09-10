import imageCarousel from './carousel-logic.mjs'

import Beach from './images/beach.jpg'
import Lanscape from './images/landscape.jpg'
import Sea from './images/sea.jpg'
import Sunrise from './images/sunrise.jpg'
import Tree from './images/tree.jpg'

const beachImage = new Image()
const landscapeImage = new Image()
const seaImage = new Image()
const sunriseImage = new Image()
const treeImage = new Image()

beachImage.src = Beach
landscapeImage.src = Lanscape
seaImage.src = Sea
sunriseImage.src = Sunrise
treeImage.src = Tree

imageCarousel.addImage(beachImage)
imageCarousel.addImage(landscapeImage)
imageCarousel.addImage(seaImage)
imageCarousel.addImage(sunriseImage)
imageCarousel.addImage(treeImage)

// In this module we are going to
