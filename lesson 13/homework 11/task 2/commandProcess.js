;(function () {
	const canvas = document.createElement('canvas')
	const context = canvas.getContext('2d')

	const states = []
	let index = 0

	const point = {
		x: canvas.width / 2,
		y: canvas.height / 2,
		color: 0xffffff,
		r: 2,
	}

	states.push(Object.assign({}, point))

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

			states.splice(index + 1)
			states.push(Object.assign({}, point))
			index += 1
		}

		if (command.type === 'increase') {
			point.r += 1

			states.splice(index + 1)
			states.push(Object.assign({}, point))
			index += 1
		}

		if (command.type === 'decrease') {
			point.r -= 1

			states.splice(index + 1)
			states.push(Object.assign({}, point))
			index += 1
		}

		if (command.type === 'colorize') {
			point.color = command.color

			states.splice(index + 1)
			states.push(Object.assign({}, point))
			index += 1
		}

		if (command.type === 'reset') {
			Object.assign(point, states[0])
			states.splice(1)
		}

		if (command.type === 'portal') {
			point.x = Math.random() * canvas.width
			point.y = Math.random() * canvas.height
		
			states.splice(index + 1)
			states.push(Object.assign({}, point))
			index += 1
		}

		if (command.type === 'undo') {
			index = Math.max(0, index - 1)
			Object.assign(point, states[index])
		}

		if (command.type === 'redo') {
			if (states[index + 1]) {
				Object.assign(point, states[index + 1])
				index += 1
			}
		}
	}

	window.commandProcess = commandProcess
})();