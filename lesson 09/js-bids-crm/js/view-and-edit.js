;(function () {
	'use strict'
	
	const searchParams = getSearchParams()

	// Базовая инициализация данных формы после запроса этих данных у сервера.
	dbRequest.getOrderById(searchParams.id, data => {
		document.querySelector('[data-order-request-status]').value = data.requestStatus
		document.querySelector('[data-order-payment-status]').value = data.paymentStatus
		document.querySelector('[data-order-client-name]').value = data.clientName
		document.querySelector('[data-order-price]').value = data.price
		document.querySelector('[data-order-id]').textContent = data.id
		document.querySelector('[data-order-good]').value = data.good
	})

	// Инициализация кнопки сохранение изменения.
	// TODO: Стоит ли заменить data-order-save на data-order-edit?
	document
		.querySelector('[data-order-save]')
		.addEventListener('click', event => {
			event.stopPropagation()

			dbRequest.editOrderById(
				searchParams.id,
				getOrderData(),
				() => location.replace('index.html')
			)
		})

	// Инициализация кнопки удаления заказа.
	document
		.querySelector('[data-order-delete]')
		.addEventListener('click', event => {
			event.stopPropagation()

			dbRequest.deleteOrderById(
				searchParams.id,
				() => location.replace('index.html')
			)
		})

	// Функция сбора и формирования объекта отредактированного заказа.
	function getOrderData () {
		return {
			requestStatus: parseInt(document.querySelector('[data-order-request-status]').value) || 1,
			paymentStatus: parseInt(document.querySelector('[data-order-payment-status]').value) || 1,
			clientName: document.querySelector('[data-order-client-name]').value || 'NotName',
			price: parseInt(document.querySelector('[data-order-price]').value) || 0,
			good: document.querySelector('[data-order-good]').value || 'NotGood'
		}
	}

	// Генерация параметров поиска из адресной строки.
	function getSearchParams () {
		return location.search
			.replace('?', '')
			.split('&')
			.reduce((acc, item) => {
				const [key, value] = item.split('=')
				acc[key] = value
				return acc
			}, {})
	}
})()