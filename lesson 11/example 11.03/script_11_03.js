// https://learn.javascript.ru/article/cookie/cookie.js
// php -S localhost:8080

console.log('----------- 1 -----------')

console.log(document.cookie)

document.cookie = 'Привет мир!'

console.log(document.cookie)



console.log('----------- 2 -----------')

basket = []
basket.push({ type: 'Футболка', price: 15000, count: 2 })
basket.push({ type: 'Куртка', price: 650000, count: 0 })
basket.push({ type: 'Носки', price: 4500, count: 9 })

setCookie('basket', JSON.stringify(basket), {
	expires: 1 * 365 * 24 * 60 * 60, // 1 year
	path: '/',
	domain: 'yoursite',
	secure: false
})

console.log(document.cookie)



console.log('----------- 3 -----------')

basket = JSON.parse(getCookie('basket'))

console.log({ basket })



console.log('----------- 4 -----------')

deleteCookie('basket')
console.log(document.cookie)