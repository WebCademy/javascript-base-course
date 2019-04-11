console.log('----------- 1 -----------')
// this - контекст
// По умолчанию window

f1()

function f1 () {
	console.log(this === window)
	console.log(this)
}