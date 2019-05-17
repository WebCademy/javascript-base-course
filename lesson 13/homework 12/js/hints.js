import dbRequest from './request'

document
	.querySelector('[data-reinit]')
	.addEventListener('click', event => {
		event.stopPropagation()
		dbRequest.reinit(() => location.replace('index.html'))
	})