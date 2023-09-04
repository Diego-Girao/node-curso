const express = require("express")

const app = express()

app.use(express.json())

app.get("/teams", (request, response) => {
	const query = request.query
	console.log(query)
	return response.json([
		"Benfica",
		"FC Porto",
		"Sporting",
		"SC Braga",
		"FC Famalicão",
	])
})

app.post("/teams", (request, response) => {
	const body = request.body
	console.log(body)
	return response.json([
		"Benfica",
		"FC Porto",
		"Sporting",
		"SC Braga",
		"FC Famalicão",
		"Est. Amadora",
	])
})

app.put("/teams/:id", (request, response) => {
	return response.json([
		"Benfica",
		"FC Porto",
		"Sporting Lisboa",
		"SC Braga",
		"FC Famalicão",
		"Est. Amadora",
	])
})
app.patch("/teams/:id", (request, response) => {
	return response.json([
		"Benfica",
		"FC Porto",
		"Sporting Lisboa",
		"SC Braga",
		"FC Famalicão",
		"Estrela Amadora",
	])
})

app.delete("/teams/:id", (request, response) => {
	return response.json([
		"Benfica",
		"FC Porto",
		"Sporting Lisboa",
		"SC Braga",
		"Est. Amadora",
	])
})

app.listen(3000)
