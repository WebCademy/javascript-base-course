let flag, n

function fn () {
	console.log('fired')
}

console.log('----------- 1 -----------')

console.log(1)
setTimeout(fn, 1000)
console.log(2)



console.log('----------- 2 -----------')

flag = setTimeout(fn, 1000)
clearTimeout(flag)



console.log('----------- 3 -----------')

setInterval(fn, 1000)



console.log('----------- 4 -----------')

n = 0

flag = setInterval(() => {
	n++

	console.log('fired', n)

	if (n > 10) {
		clearInterval(flag)
	}
}, 1000)