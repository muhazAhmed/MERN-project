const express = require ("express")
const app = express()
const dotenv = require ("dotenv")
const notes = require("./data/notes")

dotenv.config()

app.get('/', (req,res) => {
    res.send("Api is running")
})

app.get('/api/notes', (req,res) => {
    res.json(notes)
})

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))})