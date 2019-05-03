const ulElement = document.querySelector('ul')

console.log('----------- 1 -----------')
// Создание нового элемента (createElement, createTextNode, cloneNode)

const newLiElement = document.createElement('li')
newLiElement.textContent = 'Я есть грут'
newLiElement.classList.add('imp')

console.log({ newLiElement })
// ulElement.appendChild(newLiElement)



console.log('----------- 2 -----------')
// Создание своего виртуального dom

const rootElement = document.createElement('body')
const pElement = document.createElement('p')

pElement.textContent = 'Hello world!'
rootElement.appendChild(pElement)

console.log(rootElement)
// document.body = rootElement



console.log('----------- 3 -----------')
// Декларативное создание виртуального dom

const greetingText = 'Вот как-то так'

const virtualDOM = createVirtualDOM(`
<div>
	<h1>Вот и пришло новое время!</h1>
	<table border='1px'>
		<tr>
			<td>${greetingText}</td>
		</tr>
	</table>
</div>
`)

console.log(virtualDOM)

function createVirtualDOM (str) {
	const div = document.createElement('div')
	div.innerHTML = str
	return div.firstElementChild
}

// document.body.appendChild(virtualDOM)