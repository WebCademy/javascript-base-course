const names = ["Алексей", "Петр", "Серьгей", "Дмитрий", "Ольга", "Тимофей", "Алексей", "Михаил", "Анна", "Ольга"]

console.log('------------- 1 -------------')

for (let i = 0; i < names.length; i++) {
	console.log(i, names[i])
}





console.log('------------- 2 -------------')

for (let i = 0; i < names.length; i++) {
	names[i] = `Имя "${names[i]}" очень крутое!`
}

for (let i = 0; i < names.length; i++) {
	console.log(i, names[i])
}