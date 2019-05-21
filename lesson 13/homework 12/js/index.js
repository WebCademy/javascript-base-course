import dbRequest from './request'

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

// Параметры фильтрации. 0 - отсутствует фильтрация
const filterParams = {
	requestStatus: 0,
	paymentStatus: 0,
	good: 0,
	maxPrice: Infinity
}

// Массив всех товаров на сервере
const originalData = []

// Массив наименований всех товаров
const goods = []

// Стартовая иницализация данных
dbRequest.getList(data => {
	updateOriginalData(data)
	filter()
})

// Включение фильтрации по статусу заказа
document
	.querySelector('[data-sortbar-request-status]')
	.addEventListener('change', function (event) {
		filterParams.requestStatus = parseInt(this.value)
		event.stopPropagation()
		filter()
	})

// Включение фильтрации по статусу оплаты
document
	.querySelector('[data-sortbar-payment-status]')
	.addEventListener('change', function (event) {
		filterParams.paymentStatus = parseInt(this.value)
		event.stopPropagation()
		filter()
	})

// Включение фильтрации по имени товара
document
	.querySelector('[data-sortbar-goods]')
	.addEventListener('change', function (event) {
		filterParams.good = parseInt(this.value)
		event.stopPropagation()
		filter()
	})

const sortBarPrice = document.querySelector('[data-sortbar-price]')
sortBarPrice.addEventListener('mousemove', function (event) {
	filterParams.maxPrice = Number(event.target.value)
	document.querySelector('[data-sortbar-price-show]').textContent = getPriceNormalize(filterParams.maxPrice)
	filter()
})


// Инициализация кнопки генерации новых заказов.
document
	.querySelector('[data-generate]')
	.addEventListener('click', async function (event) {
		event.stopPropagation()

		// После генерации реинициализация стартовых данных
		const {data} = await dbRequest.generate(5)
		updateOriginalData(data)
		filter()
		// dbRequest.generate(5, data => {
		// 	updateOriginalData(data)
		// 	filter()
		// })
	})

// Фильтрация отображаемых товаров
function filter () {
	// Очистка текущего списка товаров
	const rootDir = document.getElementById('listViewer')
	rootDir.innerHTML = ''

	// Выборка отображаемых товаров по параметрам фильтрации.
	const data = originalData.filter(item => {
		const isRequestStatusCoincide = filterParams.requestStatus === 0 || filterParams.requestStatus === item.requestStatus
		const isPaymentStatusCoincide = filterParams.paymentStatus === 0 || filterParams.paymentStatus === item.paymentStatus
		const isGoodCoincide = filterParams.good === 0 || filterParams.good === goods.indexOf(item.good)
		const isCoincidenPrice = Number(item.price) <= filterParams.maxPrice

		return isRequestStatusCoincide && isPaymentStatusCoincide && isGoodCoincide && isCoincidenPrice
	})

	// Непосредственное отображение товаров после выборки с использование тектового шаблона.
	for (const item of data) {
		const tbodyElement = document.createElement('tbody')
		const requestStatusSpanElement = getElementByRequestStatusNumber(item.requestStatus)
		const paymentStatusSpanElement = getElementByPaymentStatusNumber(item.paymentStatus)

		// Обработка строкового шаблона
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

// Функция обновления и инициализации базовых данных: массива всех товаров и массива наименования товаров
function updateOriginalData (data) {
	originalData.splice(0)
	originalData.push(...data)

	goods.splice(0)
	goods.push('Выберите...', ...new Set(data.map(i => i.good)))

	// Переформирование фильтр-бара по массиву наименования всех товаров.
	const goodsSortbar = document.querySelector('[data-sortbar-goods]')
	goodsSortbar.innerHTML = ''

	for (let i = 0; i < goods.length; i++) {
		const optionElement = document.createElement('option')

		optionElement.setAttribute('value', i)
		optionElement.textContent = goods[i]

		goodsSortbar.append(optionElement)
	}

	const prices = originalData.map(x => x.price)
	sortBarPrice.setAttribute('min', Math.min(...prices))
	sortBarPrice.setAttribute('max', Math.max(...prices))
}

// Функция нормализации цены для отображения на странице.
function getPriceNormalize (price) {
	const fractional = (price % 100).toString().padStart(2, '0')
	const integer = parseInt(price / 100)

	return `${integer}.${fractional} руб.`
}

// Генерация span элемента для статуса заказа по служебному номеру.
function getElementByRequestStatusNumber (number) {
	const spanElement = document.createElement('span')

	spanElement.className = "badge"
	spanElement.textContent = 'ERROR'

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

	return spanElement
}

// Генерация span элемента для статуса оплаты по служебному номеру.
function getElementByPaymentStatusNumber (number) {
	const spanElement = document.createElement('span')

	spanElement.className = "badge"
	spanElement.textContent = 'ERROR'

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

	return spanElement
}