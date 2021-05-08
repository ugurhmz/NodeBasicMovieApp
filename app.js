const express = require('express')
const app = express()
const path = require('path')
require('dotenv').config()
const request = require('request')

const PORT = process.env.PORT

app.set("views",path.join(__dirname,"views"))
app.set("view engine","ejs")

//static folder
app.use(express.static('public'))



//_______________ basic usage______________
app.get('/', (req,res) => {
    res.render('search')
})


app.get('/results', (req,res) => {
    
    const query = req.query.search

    //we can use Axios... 
    request('https://api.themoviedb.org/3/search/movie?api_key=6fe8370265c396656c58d7dd9ff3e712&query='+query,(error,response,body) => {

        if(error){
            console.log(error)
        }

        let data = JSON.parse(body)
        

        res.render('movies', {
            data:data,
            searchQuery:query
        })


    })

})



app.listen(PORT, () => {
    console.log(`Connected...  http://localhost:${PORT}`)
})
