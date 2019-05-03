// Тема: проверка типов, typeof, математические операции над переменными разных типов
// Примечание: не рекомендуется использовать ==

console.log('--------------- 1 ---------------')

let a = 'Привет'
console.log({ a }, typeof a)

let b = 5
console.log({ b }, typeof b)

let c = false
console.log({ c }, typeof c)

let d = {}
console.log({ d }, typeof d)

let e = []
console.log({ e }, typeof e)

let f = window
console.log({ f }, typeof f)

let g = function () {}
console.log({ g }, typeof g)




console.log('--------------- 2 ---------------')

a = 5
b = '5'
console.log(a + b, b + a)
console.log(a == b)
console.log(a === b)
console.log(parseInt(b) + a)
console.log(Number(b) + a)
console.log(+b + a) // не рекомендую



console.log('--------------- 3 ---------------')

a = 5
b = {}
console.log(a + b)





console.log('--------------- 4 ---------------')
console.log(1 + '1' - 1) // ЧТО ЗА?!