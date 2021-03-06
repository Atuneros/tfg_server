const express = require('express')
const path = require("path")
const cors = require("cors")

const app = express()
const port = process.env.PORT || 30200

const corsOptions = {
  origin: "http://localhost:30200",
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions))
app.options('*', cors(corsOptions))

app.use(
  "/",
  express.static(path.join(__dirname, "public"))
)

app.use(
  "/api/models/classify",
  express.static(path.join(__dirname, "models/model.json"))
)

// this is required to get access to the shards
app.use(
  "/api/models",
  express.static(path.join(__dirname, "models"))
)

app.listen(port, () => {
  console.log(`Running on port ${port}`)
})