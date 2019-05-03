const divElement = document.querySelector('div')
const buttonElement = document.querySelector('button')
const inputElement = document.querySelector('input')

// console.log('----------- 1 -----------')

// buttonElement.addEventListener('click', () => console.log('buttonElement'))
// divElement.addEventListener('click', () => console.log('divElement'))
// document.addEventListener('click', () => console.log('document'))



// console.log('----------- 2 -----------')

// buttonElement.addEventListener('click', () => console.log('buttonElement'), false)
// divElement.addEventListener('click', () => console.log('divElement'), false)
// document.addEventListener('click', () => console.log('document'), false)



// console.log('----------- 3 -----------')

// buttonElement.addEventListener('click', () => console.log('buttonElement'), true)
// divElement.addEventListener('click', () => console.log('divElement'), true)
// document.addEventListener('click', () => console.log('document'), true)



console.log('----------- 4 -----------')

buttonElement.addEventListener('click', clickHandler, {
	capture: false,
	once: false,
	passive: true // preventDefault может быть вызван
})

function clickHandler () {
	console.log('buttonElement')
}



console.log('----------- 5 -----------')

buttonElement.removeEventListener('click', clickHandler, {
	capture: false,
	once: false,
	passive: true // preventDefault может быть вызван
})