var path = require("path")
const express = require("express")
const bodyParser = require("body-parser")

// meaningcloud api
const dotenv = require("dotenv")
dotenv.config()
const mcURL = process.env.BASE_URL
const mcAPI = process.env.API_KEY
console.log(`The API url is ${mcURL} and uses key ${mcAPI}`)

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

// post route setup
app.post("/api", async function (req, res) {
  userInput = req.body.url
})

const port = 8081

// designates what port the app will listen to for incoming requests
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})
