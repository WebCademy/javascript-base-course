console.log('----------- 1 -----------')
// IIFE (Immediately Invoked Function Expressions)
// Немедленно вызываемая фукнция
// Обратим внимание, что можно сделать анонимную и именнованную IIFE

;(function () {
	console.log('fired 1')
})()

;(function withName () {
	console.log('fired 2')
})()



console.log('----------- 2 -----------')
// У IIFE тоже есть arguments

;(function (a, b, c, d, e, f, g, h) {
	console.log(this, arguments)
})(1, 2, 3, 4)