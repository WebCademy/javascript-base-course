console.log('----------- 1 -----------')
// Singleton

window
document

bascket
database



console.log('----------- 2 -----------')

;(function () {
	const bascket = []

	function getBuscket () {
		return bascket
	}

	window.getBuscket = getBuscket
})();


const bascket1 = window.getBuscket()
const bascket2 = window.getBuscket()

console.log(bascket1 === bascket2)