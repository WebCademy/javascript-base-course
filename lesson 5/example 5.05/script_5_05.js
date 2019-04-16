const applicationElement = document.getElementById('application')
const h2Element = document.querySelector('h2')

console.log('----------- 1 -----------')
// Внутренности элемента dom

console.log(applicationElement)
console.log({ applicationElement })

// обратим внимание на следующие свойства:
// attributes
// data
// childElementCount
// childNodes
// children
// classListt
// className
// firstChild
// firstElementChild
// hidden
// id
// innerHTML
// innerText
// lastChild
// lastElementChild
// localName
// nextElementSibling
// nextSibling
// nodename
// nodeType
// nodeValue
// on*
// ownerDocument
// parentElement
// parentNode
// previousElementSibling
// previousSibling
// style
// tagName
// textContent



console.log('----------- 2 -----------')
// Манипуляция с элемнтом DOM

console.log(h2Element)
console.log({ h2Element })

// Управление стилями
h2Element.style.color = 'green'

// cssText
h2Element.style.cssText = `
	color: red;
	padding: 1.2px;
`

// getComputedStyle
const computedStyle = window.getComputedStyle(h2Element)
console.log({ computedStyle })

// Управление классами
h2Element.className = 'imp'
h2Element.className = 'giga'

// Но лучше использовать
// h2Element.classList.add()
// h2Element.classList.remove()
// h2Element.classList.item()
// h2Element.classList.toggle()
// h2Element.classList.contains()

// Но лучше так не делать!
// Оставьте манипуляцию с id декларативным языкам
h2Element.id = 'h2Element'

// Работа с атрибутами
console.log(h2Element.attributes)
// h2Element.getAttribute
// h2Element.setAttribute
// h2Element.hasAttribute
// h2Element.removeAttribute



console.log('----------- 3 -----------')
// Работа с телом элемента DOM

console.log(h2Element.innerText)
console.log(h2Element.innerHTML)
console.log(h2Element.outerText)
console.log(h2Element.outerHTML)
console.log(h2Element.textContent)

// Так конечно лучше не делать, но если уж очень хочется, то можно )))
h2Element.outerHTML = h2Element.outerHTML.replace(/h2/gi, 'h1')



console.log('----------- 4 -----------')
// Не сущствующий поля и свойства

h2Element.myParams = {
	name: 'Aleksey'
}

console.log({ h2Element })



console.log('----------- 5 -----------')
// Особенности input

const inputElement = document.querySelector('input')
inputElement.value = 'Приветики из скрипта =)'

console.log({ inputElement })