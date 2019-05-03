const url = 'https://tsvetyzhizni.ru/wp-content/uploads/2018/04/all-2143148_960_720.jpg'
const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

canvas.width = 500
canvas.height = 500



console.log('----------- 1 -----------')

drawLine(context, 100, 100, 300, 400)
drawPoint(context, 250, 250)
drawStar(context, 250, 250)

function drawLine (ctx, x1, y1, x2, y2, strokeStyle = 'black') {
	ctx.strokeStyle = strokeStyle
	ctx.beginPath()
	ctx.moveTo(x1, y1)
	ctx.lineTo(x2, y2)
	ctx.closePath()
	ctx.stroke()
}

function drawPoint (ctx, x, y, r = 2, fillStyle = 'red') {
	ctx.fillStyle = fillStyle
	ctx.arc(x, y, r, 0, Math.PI * 2)
	ctx.fill()
}

function drawStar (ctx, x, y, R = 50, r = 25) {
	const points = Array(11).fill(0).map((e, i) => {
		const angle = Math.PI * (2.5 - i) / 5

		return {
			x: x + (i % 2 ? r : R) * Math.cos(angle),
			y: y - (i % 2 ? r : R) * Math.sin(angle)
		}
	})

	for (let i = 0; i < 10; i++) {
		drawLine(ctx, points[i].x, points[i].y, points[i + 1].x, points[i + 1].y)
	}
}