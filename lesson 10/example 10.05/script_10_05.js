const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

canvas.width = 500
canvas.height = 500



console.log('----------- 1 -----------')

let i = 0

setInterval(() => {
	clearCanvas()

	const angle = i * Math.PI / 1000

	drawCircle(250 + 150 * Math.cos(angle), 250 + 150 * Math.sin(angle))

	i++
})

function clearCanvas () {
	// context.clearRect(0, 0, canvas.width, canvas.height)
	canvas.width = canvas.width
}

function drawCircle (x, y, r = 100, strokeStyle = 'red') {
	context.lineWidth = 5
	context.strokeStyle = strokeStyle
	context.arc(x, y, r, 0, Math.PI * 2)
	context.stroke()
}