const POINTS_NUMBER = 1000

const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

canvas.width = 500
canvas.height = 500

const points = []
for (let i = 0; i < POINTS_NUMBER; i++) {
	points.push({
		x: getRandomBetween(0, canvas.width),
		y: getRandomBetween(0, canvas.height),
		color: getRandomColor()
	})
}

setInterval(() => {
	for (const point of points) {
		moveRandom(point)
		drawPoint(point)
	}
})

function drawPoint (point) {
	context.beginPath()
	context.arc(point.x, point.y, 5, 0, Math.PI * 2)
	context.fillStyle = point.color
	context.fill()
}

function moveRandom (point) {
	const dx = getRandomBetween(-1, 1)
	const dy = getRandomBetween(-1, 1)

	if (0 < point.x + dx && point.x + dx < canvas.width) {
		point.x += dx
	}

	if (0 < point.y + dy && point.y + dy < canvas.height) {
		point.y += dy
	}
}

function getRandomBetween (min, max) {
	return min + Math.floor(Math.random() * (max - min + 1))
}

function getRandomColor () {
	const r = getRandomBetween(0, 255)
	const g = getRandomBetween(0, 255)
	const b = getRandomBetween(0, 255)

	return 'rgb(' + r +', ' + g + ', ' + b + ')'
}