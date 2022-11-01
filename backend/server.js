const express = require ("express")
const app = express()
const dotenv = require ("dotenv")

dotenv.config()

app.get('/', (req,res) => {
    res.send("Api is running")
})

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))})