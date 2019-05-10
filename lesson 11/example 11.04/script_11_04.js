// https://refactoring.guru

console.log('----------- 1 -----------')
// Адаптер

sessionStorage.clear
sessionStorage.getItem
sessionStorage.removeItem
sessionStorage.setItem

cookieStorage.clear
cookieStorage.getItem
cookieStorage.removeItem
cookieStorage.setItem



console.log('----------- 2 -----------')

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
