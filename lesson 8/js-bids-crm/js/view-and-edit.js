;(function () {
	const searchParams = location.search
		.replace('?', '')
		.split('&')
		.reduce((acc, item) => {
			const [key, value] = item.split('=')
			acc[key] = value
			return acc
		}, {})

	const url = 'http://localhost:3000'
	const key = '?key=testtesttest'
	const address = '/order/' + searchParams.id
	
	fetch(url + address + key)
		.then(answer => answer.json())
		.then(data => {
			document.querySelector('[data-order-id]').textContent = data.id
			document.querySelector('[data-order-client-name]').value = data.clientName
			document.querySelector('[data-new-order-good]').value = data.good
			document.querySelector('[data-new-order-price]').value = data.price

			main()
		})

	function main () {
		const buttonSave = document.querySelector('[data-order-save]')

		buttonSave.addEventListener('click', buttonSaveClickHandler)
	}

	function buttonSaveClickHandler (event) {
		event.stopPropagation()

		const orderData = JSON.stringify(getOrderData())

		const fetchParams = {
			method: 'PUT',
			body: orderData
		}

		fetch(url + address + key, fetchParams)
			.then(answer => answer.json())
			.then(data => {
				location.replace('index.html')
			})
	}

	function getOrderData () {
		const orderData = {
			clientName: document.querySelector('[data-order-client-name]').value || 'NotName',
			good: document.querySelector('[data-new-order-good]').value || 'NotGood',
			price: parseInt(document.querySelector('[data-new-order-price]').value) || 1,
		}

		return orderData
	}
})()