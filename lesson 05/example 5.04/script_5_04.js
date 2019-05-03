// Относительность поиска

console.log('----------- 1 -----------')

const applicationElement = document.getElementById('application')
const liElements = applicationElement.querySelectorAll('li')

console.log(liElements)



console.log('----------- 2 -----------')

const rootHTML = document.querySelector('html')
console.log(rootHTML.parentNode === document)
// console.log(rootHTML.parentElement === document)