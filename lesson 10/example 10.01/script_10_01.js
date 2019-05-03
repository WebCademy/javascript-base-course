const urlPlane = 'https://deita.ru/media/images/plane-841441_960_720.2e16d0ba.fill-900x600.jpg'
const urlFlower = 'https://uwalls.ru/gallery/19/source/1533.jpg'

let imgElement, mainResult



console.log('----------- 1 -----------')

imgElement = document.createElement('img')
// imgElement = new Image()

imgElement.src = urlPlane

document.body.append(imgElement)



console.log('----------- 2 -----------')

imgElement = document.createElement('img')
// imgElement = new Image()

imgElement.src = urlPlane

imgElement.onload = () => {
	document.body.append(imgElement)	
}




console.log('----------- 3 -----------')

loadImage1(urlPlane, img => document.body.append(img))



console.log('----------- 4 -----------')

loadImage1(urlPlane, img1 => {
	loadImage1(urlFlower, img2 => {
		document.body.append(img1, img2)
	})
})


console.log('----------- 5 -----------')

loadImage2(urlPlane).then(image => document.body.append(image))
loadImage2(urlFlower).then(image => document.body.append(image))





console.log('----------- 6 -----------')

loadImage2(urlPlane)
	.then(image => {
		document.body.append(image)
	})
	.then(() => {
		return delay(3000)
	})
	.then(() => {
		return 'Hello world'
	})
	.then(str => {
		console.log(str)
	})
	.then(() => {
		return delay(3000)
	})
	.then(() => {
		return loadImage(urlFlower)
	})
	.then(image => {
		document.body.append(image)
	})



console.log('----------- 7 -----------')

mainResult = main1()

console.log({ mainResult })

async function main1 () {
	const image1 = await loadImage2(urlPlane)

	document.body.append(image1)

	await delay(3000)

	console.log('Hello world')

	await delay(3000)

	const image2 = await loadImage2(urlFlower)

	document.body.append(image2)
}



console.log('----------- 8 -----------')

mainResult = main2()

async function main2 () {
	const image1 = await loadImage2(urlPlane)
	const image2 = await loadImage2(urlFlower)

	document.body.append(image1)
	document.body.append(image2)
}



console.log('----------- 9 -----------')

mainResult = main3()

async function main3 () {
	const promises = []

	promises.push(loadImage2(urlPlane))
	promises.push(loadImage2(urlFlower))

	console.log({ promises })

	const images = await Promise.all(promises)

	document.body.append(...images)
}








function loadImage1 (urlPlane, callback) {
	imgElement = document.createElement('img')
	// imgElement = new Image()

	imgElement.src = urlPlane
	imgElement.onload = () => callback(imgElement)
}

function loadImage2 (url) {
	return new Promise((resolve, reject) => {
		const image = new Image()
		image.src = url
		image.onload = () => resolve(image)
	})
}

function delay (milliseconds) {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve()
		}, milliseconds)
	})
}