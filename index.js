const express = require("express")
const path = require("path")

const app = express()

//const generateLayout = () => {
//	const layoutDiv = document.createElement('div')
//	layoutDiv.textContent = "Hello World"
//
//	const root = document.getElementById('root')
//	root.insertBefore(layoutDiv)
//}


const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);

app.use(express.static(path.join(__dirname, 'src')))

app.get('/', (req, res) => {
	//const test = pipe(
	//	({ctx, data}) => ({ctx, data: [
	//		{name: "Kyler Figgins", age: 34},
	//		{name: "Mildred Marvin", age: 72},
	//		{name: "Bye Bye", age: 101},
	//		{name: "Forget Me Not", age: 85},
	//		{name: "Drake Man", age: 12},
	//	]}),
	//	({ctx, data}) => `<ul>${data.map(user => `<li>${user.name} (${user.age})`)}</ul>` 
	//
	//)({ctx: {userId: 45}, data: []})
	//
	//res.send(test)
	res.sendFile(path.join(__dirname, 'index.html'))
})

const port = 3008
app.listen(port)

console.log(`listening on ${port}`)

