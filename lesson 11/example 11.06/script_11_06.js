console.log('----------- 1 -----------')
// Comand

const moveToLeftCommand = {
	type: 'move',
	direct: 'left',
	dist: 5
}

const increaseCommand = {
	type: 'increase'
}

commandProcess(increaseCommand)