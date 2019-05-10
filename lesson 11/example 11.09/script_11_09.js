console.log('----------- 1 -----------')

class Massiv extends Array {
	constructor (size) {
		super(size)

		this.fill(0)
	}

	randomize () {
		return this.map(() => Math.floor(100 * Math.random()))
	}

	uniqueize () {
		return this.filter((e, i, l) => l.lastIndexOf(e) === i)
	}

	even () {
		return this.filter(x => x % 2 === 0)
	}

	odd () {
		return this.filter(x => x % 2 !== 0)
	}

	asc () {
		return this.sort((a, b) => a - b)
	}

	desc () {
		return this.sort((a, b) => b - a)
	}
}

const array = new Massiv(100)
	.randomize()
	.asc()
	.uniqueize()
	

console.log(array)