;(function () {
	'use strict'
	
	const searchParams = getSearchParams()

	// Базовая инициализация данных формы после запроса этих данных у сервера.
	dbRequest.getOrderById(searchParams.id, data => {
		document.querySelector('[data-order-id]').textContent = data.id
		document.querySelector('[data-order-client-name]').value = data.clientName
		document.querySelector('[data-order-good]').value = data.good
		document.querySelector('[data-order-price]').value = data.price
		document.querySelector('[data-order-request-status]').value = data.requestStatus
		document.querySelector('[data-order-payment-status]').value = data.paymentStatus
	})

	// Инициализация кнопки сохранение изменения.
	// TODO: Стоит ли заменить data-order-dave на data-order-edit?
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
			clientName: document.querySelector('[data-order-client-name]').value || 'NotName',
			good: document.querySelector('[data-order-good]').value || 'NotGood',
			price: parseInt(document.querySelector('[data-order-price]').value) || 0,
			requestStatus: parseInt(document.querySelector('[data-order-request-status]').value) || 1,
			paymentStatus: parseInt(document.querySelector('[data-order-payment-status]').value) || 1
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