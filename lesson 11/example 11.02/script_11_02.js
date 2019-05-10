let basket, value

console.log('----------- 1 -----------')

console.log({ sessionStorage })

basket = []
basket.push({ type: 'Футболка', price: 15000, count: 2 })
basket.push({ type: 'Куртка', price: 650000, count: 0 })
basket.push({ type: 'Носки', price: 4500, count: 9 })

sessionStorage.setItem('basket', JSON.stringify(basket))

console.log({ sessionStorage })



console.log('----------- 3 -----------')

basket = JSON.parse(sessionStorage.getItem('basket'))
console.log({ basket })



console.log('----------- 4 -----------')

sessionStorage.clear
sessionStorage.getItem
sessionStorage.removeItem
sessionStorage.setItem