const trElementTemplate = `
<tr class="bid-row">
	<td scope="row">
		<a href="view-and-edit.html?id=%ID%">Заявка №%ID%</a>
	</td>
	<td>%CLIENT_NAME%</td>
	<td>
		<span class="badge badge-light badge-lg">
			<span class="icon">🛴</span> %GOOD%
		</span>
	</td>
	<td>%PRICE%</td>
	<td>%REQUEST_STATUS%</td>
	<td><span class="badge badge-secondary">Нет оплаты</span></td>
</tr>`

main()

function main () {
	dbRequest.getList(data => {
		const rootDir = document.getElementById('listViewer')

		for (const item of data) {
			const tbodyElement = document.createElement('tbody')
			const requestStatusSpanElement = getElementByRequestStatusNumber(item.requestStatus)

			tbodyElement.innerHTML = trElementTemplate
				.replace('%ID%', item.id)
				.replace('%ID%', item.id)
				.replace('%GOOD%', item.good)
				.replace('%PRICE%', getPriceNormalize(item.price))
				.replace('%CLIENT_NAME%', item.clientName)
				.replace('%REQUEST_STATUS%', requestStatusSpanElement.outerHTML || '')

			rootDir.append(tbodyElement.firstElementChild)
		}

		console.log(data)
	})
}

function getPriceNormalize (price) {
	const fractional = (price % 100).toString().padStart(2, '0')
	const integer = parseInt(price / 100)

	return `${integer}.${fractional} руб.`
}

function getElementByRequestStatusNumber (number) {
	if (number === 3) {
		const spanElement = document.createElement('span')

		spanElement.className = "badge badge-warning"
		spanElement.textContent = 'Ожидается оплата'

		return spanElement
	}

	const spanElement = document.createElement('span')

	spanElement.className = "badge"
	spanElement.textContent = 'ERROR'

	return spanElement
}

// Получить все заказы
// GET /orders

// Получить заказ по ID
// GET /order/:id

// Создать новый заказ
// POST /order body

// Изменить заказ
// PUT /order/:id body

// Удалить заказ
// DELETE /order/:id

// Сброс базы данных
// POST /reinit