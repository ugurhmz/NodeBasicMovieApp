const express = require('express')
const app = express()
const path = require('path')
require('dotenv').config()

const PORT = process.env.PORT

app.set("views",path.join(__dirname,"views"))
app.set("view engine","ejs")

//static folder
app.use(express.static('public'))



//_______________ basic usage______________
app.get('/', (req,res) => {
    res.render('search')
})


app.get('/movies', (req,res) => {
    res.render('movies')
})



app.listen(PORT, () => {
    console.log(`Connected...  http://localhost:${PORT}`)
})
