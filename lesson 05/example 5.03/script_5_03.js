// Поиск элементов

console.log('----------- 1 -----------')

const applicationElement = document.getElementById('application')

console.log(applicationElement)
console.log({ applicationElement })



console.log('----------- 2 -----------')

const ulElements = document.getElementsByTagName('ul')

console.log({ ulElements })

// ulElements[1].parentNode.removeChild(ulElements[1])
// console.log({ ulElements })



console.log('----------- 3 -----------')

const okyCollection = document.getElementsByName('oky') // редко используется
console.log(okyCollection)



console.log('----------- 4 -----------')

const impCollection = document.getElementsByClassName('imp')
console.log(impCollection)



console.log('----------- 5 -----------')

const liElement = document.querySelector('li')
console.log(liElement)




console.log('----------- 6 -----------')

const liElements = document.querySelectorAll('li')
console.log(liElements)



console.log('----------- 7 -----------')

console.log(liElements[0].matches('.imp'))
console.log(liElements[1].matches('.imp'))

const liElementsWithImpClass = Array.from(liElements).filter(e => e.matches('.imp'))
console.log(liElementsWithImpClass)



console.log('----------- 8 -----------')

console.log(liElement.closest('div'))


console.log('----------- 9 -----------')
// XPath - для работы с XML