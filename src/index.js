const express = require("express")

const app = express()

app.get("/", (request, response) => {
	return response.json({ message: "Hey World of Nodejs!!!" })
})

app.listen(3000)
