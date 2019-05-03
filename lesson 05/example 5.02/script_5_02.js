console.log('----------- 1 -----------')
// Наследование

class Point {
	constructor (x, y) {
		this.x = x
		this.y = y
	}

	dist (point) {
		return ((this.x - point.x)**2 + (this.y - point.y)**2)**0.5
	}
}

class Vector extends Point {
	constructor (x, y, dx, dy) {
		super(x, y)

		this.dx = dx
		this.dy = dy
	}

	get length () {
		return super.dist({
			x: this.dx,
			y: this.dy
		})
	}
}

const point = new Point(0, 0)
const vector = new Vector(0, 0, 5, 4)

console.log(vector)

console.log(vector.dist(point))



console.log('----------- 2 -----------')

console.log(typeof vector)
console.log(vector instanceof Vector)
console.log(vector instanceof Point)

console.log(typeof point)
console.log(point instanceof Vector)
console.log(point instanceof Point)



console.log('----------- 3 -----------')

console.log(vector)
// console.log(vector.__proto__)
console.log(vector.constructor === Vector)

console.log(Vector.name)
// console.log(vector.constructor.name)



console.log('----------- 4 -----------')

console.log([])
console.log(Array.prototype)
console.log(Array.prototype.join)