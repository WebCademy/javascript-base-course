const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

canvas.width = 500
canvas.height = 500



console.log('----------- 1 -----------')

const mouse = getMouse(canvas)

setInterval(() => {
	clearCanvas()

	drawCircle(mouse.x, mouse.y)
})

function clearCanvas () {
	// context.clearRect(0, 0, canvas.width, canvas.height)
	canvas.width = canvas.width
}

function drawCircle (x, y, r = 50, strokeStyle = 'red') {
	context.lineWidth = 5
	context.strokeStyle = strokeStyle
	context.arc(x, y, r, 0, Math.PI * 2)
	context.stroke()
}

function getMouse (element) {
	const mouse = {
		dx: 0, x: 0,
		dy: 0, y: 0,
		prevLeft: false, left: false,
		prevRight: false, right: false
	}

	element.addEventListener('mousemove', event => {
		const rect = element.getBoundingClientRect()
		const x = event.clientX - rect.left
		const y = event.clientY - rect.top

		mouse.dx = x - mouse.x
		mouse.dy = y - mouse.y
		mouse.x = x
		mouse.y = y
		mouse.prevLeft = mouse.left
		mouse.prevRight = mouse.right
		mouse.left = event.buttons & 1
		mouse.right = event.buttons & 2
	})

	return mouse
}