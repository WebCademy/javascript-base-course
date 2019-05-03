console.log('------------- 1 -------------')

const names = ['Алексей', 'Андрей', 'Серьгей', 'Дмитрий', 'Ольга', 'Тимофей']

console.log(names)
console.log(names.length)




console.log('------------- 2 -------------')

names[1] = 'Петр' // 'Андрей' заменяем на 'Петр'
console.log(names)





console.log('------------- 3 -------------')

names[6] = 'Алексей' // Добавляем в конец
console.log(names)





console.log('------------- 4 -------------')

names[10] = 'Игорь'
console.log(names)
console.log(names[7])





console.log('------------- 5 -------------')

names.length = 7
console.log(names)





console.log('------------- 6 -------------')

names.push('Михаил')
console.log(names)


names.push('Анна', 'Ольга', 'Станислав')
console.log(names)




console.log('------------- 7 -------------')

let result = names.pop() // Но только 1 элемент
console.log(result)
console.log(names)





console.log('------------- 8 -------------')


console.log(names)
names.unshift('Вераника')
console.log(names)


result = names.shift() // Но только 1 элемент
console.log(result)
console.log(names)