let basket, value

console.log('----------- 1 -----------')

console.log({ localStorage })

localStorage.setItem('key', 'value')

value = localStorage.getItem('key')
console.log({ value })

localStorage.clear()



console.log('----------- 2 -----------')

basket = []
basket.push({ type: 'Футболка', price: 15000, count: 2 })
basket.push({ type: 'Куртка', price: 650000, count: 0 })
basket.push({ type: 'Носки', price: 4500, count: 9 })

// localStorage.setItem('basket', basket)
localStorage.setItem('basket', JSON.stringify(basket))

console.log(localStorage)



console.log('----------- 3 -----------')

basket = JSON.parse(localStorage.getItem('basket'))
console.log({ basket })



console.log('----------- 4 -----------')

localStorage.clear
localStorage.getItem
localStorage.removeItem
localStorage.setItem