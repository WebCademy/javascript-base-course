;(function () {
	const searchParams = location.search
		.replace('?', '')
		.split('&')
		.reduce((acc, item) => {
			const [key, value] = item.split('=')
			acc[key] = value
			return acc
		}, {})

	dbRequest.getOrderById(searchParams.id, data => {
		document.querySelector('[data-order-id]').textContent = data.id
		document.querySelector('[data-order-client-name]').value = data.clientName
		document.querySelector('[data-order-good]').value = data.good
		document.querySelector('[data-order-price]').value = data.price
		document.querySelector('[data-order-request-status]').value = data.requestStatus
		document.querySelector('[data-order-payment-status]').value = data.paymentStatus

		main()
	})

	function main () {
		const buttonSave = document.querySelector('[data-order-save]')
		const buttonDelete = document.querySelector('[data-order-delete]')

		buttonSave.addEventListener('click', event => {
			event.stopPropagation()

			dbRequest.editOrderById(
				searchParams.id,
				getOrderData(),
				() => location.replace('index.html')
			)
		})

		buttonDelete.addEventListener('click', event => {
			event.stopPropagation()

			dbRequest.deleteOrderById(
				searchParams.id,
				() => location.replace('index.html')
			)
		})
	}

	function getOrderData () {
		const orderData = {
			clientName: document.querySelector('[data-order-client-name]').value || 'NotName',
			good: document.querySelector('[data-order-good]').value || 'NotGood',
			price: parseInt(document.querySelector('[data-order-price]').value) || 0,
			requestStatus: parseInt(document.querySelector('[data-order-request-status]').value) || 1,
			paymentStatus: parseInt(document.querySelector('[data-order-payment-status]').value) || 1
		}

		return orderData
	}
})()