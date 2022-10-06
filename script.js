const input = document.querySelector(`.search`)
const drinksAll = document.querySelectorAll(`li`)

const searchList = () => {
	drinksAll.forEach(drink => {
		if (!drink.textContent.toUpperCase().includes(input.value.toUpperCase())) {
			drink.style.display = 'none'
		} else {
			drink.style.display = 'block'
		}
	})
}

input.addEventListener(`keyup`, searchList)
