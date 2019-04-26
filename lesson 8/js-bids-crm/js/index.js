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
	<td><span class="badge badge-primary">Новая</span></td>
	<td><span class="badge badge-secondary">Нет оплаты</span></td>
</tr>`

main()

function main () {
	const url = 'http://localhost:3000'
	const key = '?key=testtesttest'
	const address = '/orders'

	const newOrder = JSON.stringify({
		good: "Микроволновка",
		price: 12500,
		clientName: "Дмитрий",
		managerName: "Анастасия",
		paymentStatus: 0,
		requestStatus: 0
	})

	fetch(url + address + key, {
		method: 'GET',
		// body: newOrder
	})
		.then(answer => answer.json())
		.then(data => {
			const rootDir = document.getElementById('listViewer')

			for (const item of data) {
				const tbodyElement = document.createElement('tbody')

				tbodyElement.innerHTML = trElementTemplate
					.replace('%ID%', item.id)
					.replace('%ID%', item.id)
					.replace('%GOOD%', item.good)
					.replace('%PRICE%', priceNormalize(item.price))
					.replace('%CLIENT_NAME%', item.clientName)

				rootDir.append(tbodyElement.firstElementChild)
			}

			console.log(data)
		})
}

function priceNormalize (price) {
	const fractional = (price % 100).toString().padStart(2, '0')
	const integer = parseInt(price / 100)

	return `${integer}.${fractional} руб.`
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