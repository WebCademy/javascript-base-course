console.log('----------- 1 -----------')
// Для решения домашней работы

const h2Element = document.querySelector('h2')

// h2Element.onClick = () => {
h2Element.onclick = () => {
	console.log('click')
}

// h2Element.onclick = () => {
// 	console.log('fired')
// }

h2Element.addEventListener('click', () => {
	console.log('fired1')
})

h2Element.addEventListener('click', () => {
	console.log('fired2')
})