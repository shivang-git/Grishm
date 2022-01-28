const express = require('express')
const app = express()
const hbs = require('hbs')
const path = require('path')
const port = process.env.PORT || 3000


const staticpath = path.join(__dirname, '../public')
console.log(staticpath);
app.use(express.static(staticpath));

app.set('view engine', 'hbs')


app.get('/', (req, res) => {
    res.render('index')

})
app.get('/weather', (req, res) => {
    res.render('weather')

})
app.get('/about', (req, res) => {
    res.render('about')

})


app.get('*', (req, res) => {
    res.render("404")
})

app.listen(port, () => {
    console.log("listening to server")
})