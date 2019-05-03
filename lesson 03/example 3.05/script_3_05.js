const numbers = [-10, 57, -16, -56, 48, 93, 31, -27, 98, 44, 33, 76, 7, 3, -13, -9, 16, -88, -26, -13, -63, -33, -86, 21, 67, 65, -86, -61, -11, -53, -51, -17, 4, 56, 40, 2, -14, 60, -35, -14, 11, -21, 90, -21, 63, -5, -64, 85, -38, -24, -80, -86, 78, 40, -96, 54, -50, 80, -16, -51, -43, -2, -66, 71, 44, -87, 53, 39, -92, 96, -89, 87, -95, 43, -85, 25, 100, -72, -87, 79, 47, -79, -59, 92, 12, 29, 3, 8, 3, 1, 55, -95, 68, -96, 78, 33, 34, 17, -39, -16]



console.log('------------- 1 -------------')


// По модулю не превосходит 20
const result1 = numbers.filter(function (element, index, array) {
	if (-20 <= element && element <= 20) {
		return true
	}
})


console.log(result1)

// Отрицательные числа возводим в квадрат
const result2 = result1.map(function (element, index, array) {
	if (element < 0) {
		return element ** 2
	} else {
		return element
	}

	// return element < 0 ? element**2 : element
})

console.log(result2)


// Находим сумму
const result3 = result2.reduce(function (acc, element, index, array) {
	return acc + element
})

console.log(result3)



console.log('------------- 2 -------------')


let sum = numbers.filter(function (element, index, array) {
	if (-20 <= element && element <= 20) {
		return true
	}
}).map(function (element, index, array) {
	if (element < 0) {
		return element ** 2
	} else {
		return element
	}

	// return element < 0 ? element**2 : element
}).reduce(function (acc, element, index, array) {
	return acc + element
})

console.log(sum)





console.log('------------- 3 -------------')

sum = numbers
	.filter(function (element, index, array) {
		if (-20 <= element && element <= 20) {
			return true
		}
	})
	.map(function (element, index, array) {
		if (element < 0) {
			return element ** 2
		} else {
			return element
		}

		// return element < 0 ? element**2 : element
	})
	.reduce(function (acc, element, index, array) {
		return acc + element
	})

console.log(sum)





console.log('------------- 4 -------------')

// sum = numbers.filter(isAbs20).map(negativeSquareNumber).reduce(sum)
sum = numbers
	.filter(isAbs20)
	.map(negativeToSquareNumber)
	.reduce(getSum)

console.log(sum)

function isAbs20 (element, index, array) {
	if (-20 <= element && element <= 20) {
		return true
	}
}

function negativeToSquareNumber(element, index, array) {
	if (element < 0) {
		return element ** 2
	} else {
		return element
	}

	// return element < 0 ? element**2 : element
}

function getSum (acc, element, index, array) {
	return acc + element
}