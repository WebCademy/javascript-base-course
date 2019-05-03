const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

canvas.width = 500
canvas.height = 500




console.log('----------- 1 -----------')

context.beginPath()
context.fillRect(10, 10, 100, 100)
context.clearRect(20, 20, 80, 80)
context.strokeRect(10, 10, 100, 100)

context.beginPath()
context.moveTo(250, 250)
context.lineTo(450, 250)
context.lineTo(450, 450)
context.closePath()
context.stroke()
context.fill()

context.beginPath()
context.arc(125, 400, 95, 0, Math.PI, true)
context.stroke()



console.log('----------- 2 -----------')

context.lineWidth = 10

context.fillStyle = 'blue'
context.strokeStyle = 'green'
context.beginPath()
context.fillRect(10, 10, 100, 100)
context.clearRect(20, 20, 80, 80)
context.strokeRect(10, 10, 100, 100)

context.fillStyle = 'red'
context.beginPath()
context.moveTo(250, 250)
context.lineTo(450, 250)
context.lineTo(450, 450)
context.closePath()
context.stroke()
context.fill()

context.strokeStyle = 'orange'
context.beginPath()
context.arc(125, 400, 95, 0, Math.PI, true)
context.stroke()
context.fill()