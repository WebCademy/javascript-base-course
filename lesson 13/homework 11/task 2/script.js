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

const decreaseCommand = {
	type: 'decrease'
}

const colorizeCommand = {
	type: 'colorize',
	color: 'red'
}

const resetCommand = {
	type: 'reset'
}

const portalCommand = {
	type: 'portal'
}

const undoCommand = {
	type: 'undo'
}

const redoCommand = {
	type: 'redo'
}

commandProcess(increaseCommand)
commandProcess(colorizeCommand)
commandProcess(portalCommand)