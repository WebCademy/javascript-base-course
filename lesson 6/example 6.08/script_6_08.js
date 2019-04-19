const url1 = 'https://gist.githubusercontent.com/Aleksey-Danchin/5c119f02e39cfb6f6d7774dc2a714eae/raw/f94faf714a8dd1f846dabc637db9c62bc570aba8/data.json'
const url2 = 'https://gist.githubusercontent.com/Aleksey-Danchin/8f143f744c558487659235ab07aeb7d6/raw/f4a51a081b5dd8c74db2de8c3529858d9b8ca66b/data.json'
let promise

console.log('----------- 1 -----------')

promise = new Promise((resolve, reject) => {
	// return 12

	console.log(1)

	resolve(1)
	resolve(2)

	console.log(2)
})

promise.then((answer) => {
	console.log({ promise })
})



console.log('----------- 2 -----------')

promise = new Promise((resolve, reject) => {
	resolve('Hello')
})

promise
	.then(str => {
		return str + ' World'
	})
	.then(str => {
		console.log(str)
	})



console.log('----------- 3 -----------')

const request = fetch(url1, { method: 'get' })

request
	.then(result => {
		console.log({ result })
		return result.text()
	})
	.then(text => {
		console.log({ text })

		const preElement = document.createElement('pre')
		preElement.textContent = text
		document.body.append(preElement)
	})



console.log('----------- 4 -----------')

promise = new Promise((resolve, reject) => {
	// resolve('Hello')
	reject('Hello')
})

promise
	.then(str => {
		return str + ' World'
	})
	.then(str => {
		console.log(str)
	})
	.catch(err => {
		console.log({ err })
	})
