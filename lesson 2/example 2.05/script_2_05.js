// Тема: типы данных, особенности Boolean

console.log('------------ 1 ------------')
console.log(true, false)


console.log('------------ 2 ------------')
console.log(false, Boolean(false))
console.log(0, Boolean(0))
console.log('', Boolean(''))
console.log(NaN, Boolean(NaN))
console.log(null, Boolean(null))
console.log(undefined, Boolean(undefined))



console.log('------------ 3 ------------')
console.log(0, Boolean(0))
console.log(1, Boolean(1))
console.log(-1, Boolean(-1))
console.log(Number.POSITIVE_INFINITY, Boolean(Number.POSITIVE_INFINITY))
console.log(Number.NEGATIVE_INFINITY, Boolean(Number.NEGATIVE_INFINITY))



console.log('------------ 4 ------------')
console.log('Привет', Boolean('Привет'))
console.log(' ', Boolean(' '))
console.log('\t', Boolean('\t'))
console.log('\n', Boolean('\n'))




console.log('------------ 5 ------------')
console.log([], Boolean([]))
console.log({}, Boolean({}))
console.log(Object, Boolean(Object))
console.log(window, Boolean(window))
console.log(console, Boolean(console))