console.log('----------- 1 -----------')

// obj.paprica()

try {
	console.log('try first')
	// obj.paprica()
	console.log('try second')
} catch (error) {
	console.log('error', { error })
} finally {
	console.log('finally')
}



console.log('----------- 2 -----------')

// main()

try {
	main()
} catch (err) {
	console.log(err)
}

function main () {
	throw Error('Ну тут как бы мой косяк')
}