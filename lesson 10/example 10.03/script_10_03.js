const url = 'https://tsvetyzhizni.ru/wp-content/uploads/2018/04/all-2143148_960_720.jpg'
const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

canvas.width = 500
canvas.height = 500



console.log('----------- 1 -----------')
// https://developer.mozilla.org/ru/docs/Web/API/CanvasRenderingContext2D/drawImage

const img = new Image()

img.src = url

img.onload = () => {
	context.drawImage(
		image,
		0, 0,
		image.width, image.height,
		0, 0,
		image.width, image.height
	)
}

console.log('----------- 3 -----------')
loadImage1(url, image => {
	context.drawImage(image, 100, 100, 200, 200)
})



console.log('----------- 4 -----------')

loadImage2(url)
	.then(image => {
		context.drawImage(image, 100, 100, 200, 200)
	})



console.log('----------- 5 -----------')

main()

async function main () {
	const image = await loadImage2(url)
	context.drawImage(image, 100, 100, 200, 200)
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