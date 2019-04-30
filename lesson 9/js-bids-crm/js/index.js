;(function () {
	const trElementTemplate = `
		<tr class="bid-row">
			<td scope="row">
				<a href="view-and-edit.html?id=%ID%">Заявка №%ID%</a>
			</td>
			<td>%CLIENT_NAME%</td>
			<td>
				<span class="badge badge-light badge-lg">%GOOD%</span>
			</td>
			<td>%PRICE%</td>
			<td>%REQUEST_STATUS%</td>
			<td>%PAYMENT_STATUS%</td>
		</tr>
	`

	const filterParams = {
		requestStatus: 0,
		paymentStatus: 0,
		good: 0
	}

	const originalData = []
	const goods = []

	dbRequest.getList(data => {
		updateOriginalData(data)
		filter()
	})

	document
		.querySelector('[data-sortbar-request-status]')
		.addEventListener('change', function (event) {
			filterParams.requestStatus = parseInt(this.value)
			event.stopPropagation()
			filter()
		})

	document
		.querySelector('[data-sortbar-payment-status]')
		.addEventListener('change', function (event) {
			filterParams.paymentStatus = parseInt(this.value)
			event.stopPropagation()
			filter()
		})

	document
		.querySelector('[data-sortbar-goods]')
		.addEventListener('change', function (event) {
			filterParams.good = parseInt(this.value)
			event.stopPropagation()
			filter()
		})

	document
		.querySelector('[data-generate]')
		.addEventListener('click', function (event) {
			event.stopPropagation()
			
			dbRequest.generate(5, data => {
				updateOriginalData(data)
				filter()
			})
		})

	function filter () {
		const rootDir = document.getElementById('listViewer')
		rootDir.innerHTML = ''

		const data = originalData.filter(item => {
			const isRequestStatusСoincide = filterParams.requestStatus === 0 || filterParams.requestStatus === item.requestStatus
			const isPaymentStatusCoincide = filterParams.paymentStatus === 0 || filterParams.paymentStatus === item.paymentStatus
			const isGoodCoincide = filterParams.good === 0 || filterParams.good === goods.indexOf(item.good)

			return isRequestStatusСoincide && isPaymentStatusCoincide && isGoodCoincide
		})

		for (const item of data) {
			const tbodyElement = document.createElement('tbody')
			const requestStatusSpanElement = getElementByRequestStatusNumber(item.requestStatus)
			const paymentStatusSpanElement = getElementByPaymentStatusNumber(item.paymentStatus)

			tbodyElement.innerHTML = trElementTemplate
				.replace('%ID%', item.id)
				.replace('%ID%', item.id)
				.replace('%GOOD%', item.good)
				.replace('%PRICE%', getPriceNormalize(item.price))
				.replace('%CLIENT_NAME%', item.clientName)
				.replace('%REQUEST_STATUS%', requestStatusSpanElement.outerHTML || '')
				.replace('%PAYMENT_STATUS%', paymentStatusSpanElement.outerHTML || '')

			rootDir.append(tbodyElement.firstElementChild)
		}
	}

	function updateOriginalData (data) {
		originalData.splice(0)
		originalData.push(...data)

		goods.splice(0)
		goods.push('Выберите...', ...new Set(data.map(i => i.good)))

		const goodsSortbar = document.querySelector('[data-sortbar-goods]')
		goodsSortbar.innerHTML = ''

		for (let i = 0; i < goods.length; i++) {
			const optionElement = document.createElement('option')

			optionElement.setAttribute('value', i)
			optionElement.textContent = goods[i]

			goodsSortbar.append(optionElement)
		}
	}

	function getPriceNormalize (price) {
		const fractional = (price % 100).toString().padStart(2, '0')
		const integer = parseInt(price / 100)

		return `${integer}.${fractional} руб.`
	}

	function getElementByRequestStatusNumber (number) {
		const spanElement = document.createElement('span')

		if (number === 1) {
			spanElement.className = 'badge badge-primary'
			spanElement.textContent = 'Новая'
		}

		else if (number === 2) {
			spanElement.className = 'badge badge-light'
			spanElement.textContent = 'В работе'
		}

		else if (number === 3) {
			spanElement.className = 'badge badge-warning'
			spanElement.textContent = 'Ожидается оплата'
		}

		else if (number === 4) {
			spanElement.className = 'badge badge-success'
			spanElement.textContent = 'Завершена'
		}

		else if (number === 5) {
			spanElement.className = 'badge badge-secondary'
			spanElement.textContent = 'Отказ'
		}

		else {
			spanElement.className = "badge"
			spanElement.textContent = 'ERROR'
		}

		return spanElement
	}

	function getElementByPaymentStatusNumber (number) {
		const spanElement = document.createElement('span')

		if (number === 1) {
			spanElement.className = 'badge badge-secondary'
			spanElement.textContent = 'Нет оплаты'
		}

		else if (number === 2) {
			spanElement.className = 'badge badge-warning'
			spanElement.textContent = 'Частично'
		}

		else if (number === 3) {
			spanElement.className = 'badge badge-success'
			spanElement.textContent = 'Оплачено'
		}

		else if (number === 4) {
			spanElement.className = 'badge badge-dark'
			spanElement.textContent = 'Возврат'
		}

		else  {
			spanElement.className = "badge"
			spanElement.textContent = 'ERROR'
		}

		return spanElement
	}
})();