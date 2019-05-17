;(function () {
	window.cookieStorage = {
		clear () {
			document.cookie = ''
		},

		getItem (name) {
			const raw = getCookie(name)

			if (raw) {
				return JSON.parse(raw).data
			}
		},

		removeItem (name) {
			deleteCookie(name)
		},

		setItem (name, value) {
			const params = {
				expires: 1 * 365 * 24 * 60 * 60, // 1 year
				path: '/',
				domain: 'yoursite',
				secure: false
			}

			const raw = JSON.stringify({ data: value })

			setCookie(name, raw, params)
		}		
	}
})();

// sessionStorage.clear
// sessionStorage.getItem
// sessionStorage.removeItem
// sessionStorage.setItem

// localStorage.clear
// localStorage.getItem
// localStorage.removeItem
// localStorage.setItem

// cookiStorage.clear
// cookiStorage.getItem
// cookiStorage.removeItem
// cookiStorage.setItem


function reinterface (storage) {
	// Очистить весь список
	storage.clear = (...args) => storage.clear(...args)

	// получить элемент списка
	storage.get = (...args) => storage.getItem(...args)

	// удалить элемент списка
	storage.delete = (...args) => storage.removeItem(...args)

	// задать элемент списка
	storage.set = (...args) => storage.setItem(...args)
}


reinterface(cookieStorage)
reinterface(sessionStorage)
reinterface(localStorage)