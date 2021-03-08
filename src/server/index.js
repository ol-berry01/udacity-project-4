var path = require("path")
const express = require("express")
const bodyParser = require("body-parser")
const mockAPIResponse = require("./mockAPI.js")

// meaningcloud api
const dotenv = require("dotenv")
dotenv.config()

// use express
const app = express()

// cors enables scripts running on a browser client to interact with resources from a different origin
const cors = require("cors")
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static("dist"))

console.log(__dirname)

app.get("/", (req, res) => {
  res.sendFile("dist/index.html")
})

// get route setup
app.get("/test", (req, res) => {
  res.send(mockAPIResponse)
})

// test env connection
console.log(`Your API key is ${process.env.API_KEY}`)

const port = 8081

// designates what port the app will listen to for incoming requests
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})

app.get("/test", (req, res) => {
  res.send(mockAPIResponse)
})
