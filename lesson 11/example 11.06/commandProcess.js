;(function () {
	const canvas = document.createElement('canvas')
	const context = canvas.getContext('2d')

	const point = {
		x: canvas.width / 2,
		y: canvas.height / 2,
		color: 0xffffff,
		r: 2,
	}

	canvas.width = 200
	canvas.height = 200

	document.body.append(canvas)

	start()

	function start () {
		requestAnimationFrame(tick)
	}

	function tick () {
		clearCanvas()
		drawPoint()
		requestAnimationFrame(tick)
	}

	function clearCanvas () {
		canvas.width = canvas.width
	}

	function drawPoint () {
		context.fillStyle = point.color
		context.arc(point.x, point.y, point.r, 0, Math.PI * 2)
		context.fill()
	}

	function commandProcess (command) {
		if (command.type === 'move') {
			const { direct, dist } = command
			let [dx, dy] = [0, 0]

			if (direct === 'left') dx += dist
			if (direct === 'right') dx -= dist
			if (direct === 'top') dy -= dist
			if (direct === 'down') dy += dist

			point.x += dx
			point.y += dy

			return true
		}

		if (command.type === 'increase') {
			point.r += 1
		}
	}

	window.commandProcess = commandProcess
})();