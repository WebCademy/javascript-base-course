// switch, case, ==, ===, !=, <, <=, >=, >, {, }, &&, ||, confirm, while, do while

console.log('---------------------------')

const X = 1
const Y = 100
{
	const X = 2
	{
		const X = 3
		console.log(X, Y)
	}
	console.log(X, Y)
}
console.log(X, Y)


console.log('---------------------------')


let i = 1
let j = 100
{
	let i = 2
	{
		let i = 3
		console.log(i, j)
	}

	j = 200
	console.log(i, j)
}
console.log(i, j)


console.log('---------------------------')



let a = 1
let b = 100
{
	let a = 2
	{
		let a = 3
		let b = 200
		let c = 500
		console.log(a, b, c)
	}
	// console.log(a, b, c)
	console.log(a, b)
}
// console.log(a, b, c)
console.log(a, b)



console.log('---------------------------')



{
	{
		{
			var foo = 'bar'
			console.log(foo)
		}
		console.log(foo)
	}
	console.log(foo)
}
console.log(foo)



console.log('---------------------------')


function fn () {
	var name = 'Aleksey'
	console.log(foo)
	console.log(name)
}

fn()

console.log(name)