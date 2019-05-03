;(function () {
	'use strict'

	const buttonCreateOrder = document.querySelector('[data-create-order]')

	buttonCreateOrder.addEventListener('click', buttonCreateOrderClickHandler)

	function buttonCreateOrderClickHandler (event) {
		event.stopPropagation()

		const orderData = getOrderData()

		dbRequest.createOrder(orderData, () => {
			location.replace('index.html')
		})
	}

	function getOrderData () {
		const orderData = {
			clientName: document.querySelector('[data-new-order-client-name]').value || 'NotName',
			good: document.querySelector('[data-new-order-good]').value || 'NotGood',
			price: parseInt(document.querySelector('[data-new-order-price]').value) * 100 || 1,
			requestStatus: parseInt(document.querySelector('[data-new-order-request-status]').value) || 0,
			paymentStatus: parseInt(document.querySelector('[data-new-order-payment-status]').value) || 0
		}

		return orderData
	}
})()