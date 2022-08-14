const { Router } = require("express")
const express = require("express")
const cors = require('cors')
const app = express()
const path = require("path")
app.use(express.json())
app.use(express.static('public'))
app.use(cors())

const router = Router()

router.get("/ejemplo", (req, res) => {
    res.status(200).json({ saludo: "hola" })
})

app.use("/app", router)
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname,"public/index.html"))
})

app.listen(3000)