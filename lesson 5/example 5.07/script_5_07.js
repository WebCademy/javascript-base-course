const ulElement = document.querySelector('ul')
const liElement = document.querySelector('li')
let removedElement

console.log('----------- 1 -----------')
// Проверка вложенности contains

console.log(ulElement.contains(liElement))
console.log(document.contains(liElement))
console.log(liElement.contains(ulElement))



console.log('----------- 2 -----------')
// Проверка вложенности compareDocumentPosition
// Изучить самостоятельно!



console.log('----------- 3 -----------')
// Вставить элемент
// insertBefore

const newLiElement = document.createElement('li')
newLiElement.textContent = 'Я есть грут!'
newLiElement.classList.add('imp')

ulElement.appendChild(newLiElement)
// ulElement.insertBefore(newLiElement, null)

// ulElement.insertBefore(newLiElement, ulElement.children[3])

// ulElement.insertBefore(newLiElement, ulElement.lastChild)
// ulElement.insertBefore(newLiElement, ulElement.lastElementChild)

// ulElement.insertBefore(newLiElement, ulElement.firstChild)
// ulElement.insertBefore(newLiElement, ulElement.firstElementChild)



console.log('----------- 4 -----------')
// Удаление узла

// removedElement = liElement.parentElement.removeChild(liElement)
// console.log({ removedElement })

// removedElement = null
// console.log({ removedElement })



console.log('----------- 5 -----------')
// Замена узла
const anotherLiElement = document.createElement('li')
anotherLiElement.textContent = 'Здравствуй!'

removedElement = liElement.parentElement.replaceChild(anotherLiElement, liElement)
console.log({ removedElement })



console.log('----------- 6 -----------')
// Важно! replaceChild, appendChild, insertBefore удаляет элемент из родительского элемента

const li = document.querySelector('li.imp')
const ul = document.querySelectorAll('ul')[1]

const x = ul.appendChild(li)
//const x = ul.insertBefore(li, null)
//const x = ul.replaceChild(li, ul.lastChild)
//const x = ul.replaceChild(li, ul.lastElementChild)

console.log({ x })



console.log('----------- 7 -----------')
// Самостоятельно изучить: insertAdjacentHTML, DocumentFragment, append, prepend, after, before, replaceWith
// Они делают тоже самое, но позволяют манипулировать сразу с множеством элементов и более короткие в написание