
const generateLayout = () => {
	const layoutDiv = document.createElement('div')
	layoutDiv.textContent = "Hello World"

	const root = document.getElementById('root')
	root.appendChild(layoutDiv)
}

generateLayout();
