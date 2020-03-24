const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('../utils/geocode.js')
const forecast = require('../utils/forecast.js')

console.log(__dirname)
// console.log(__filename)
// console.log(path.join(__dirname, '../public'))

const app = express()
const port = process.env.PORT || 8080
//Define path for config
const viewPath = path.join(__dirname, '../templates/views')
const publicDir = path.join(__dirname, '../public')
const partialPath = path.join(__dirname, '../templates/partials')
//Setup hadelbars engine and views
app.set('view engine', 'hbs')
app.set('views', viewPath)
hbs.registerPartials(partialPath)
app.use(express.static(publicDir))
app.get('/',(req, res)=>{
  res.render('index', {
    title:'index page',
    text: 'text text !!!',
    name: 'Max'
  })
})
app.get('/help',(req, res)=>{
  res.render('help', {
    text: 'Help help help',
    title:'help',
    name:'Max'
   })
})
app.get('/help/*',(req, res)=>{
  res.render('no-found')
})

app.get('/about',(req, res)=>{
 res.render('about', {
  title:'About page',
  name: 'Max max max'
 })
})

app.get('/weather',(req, res)=>{
  if(!req.query.address){
    res.send({
      error:'You must provide search'
    })
  }
  geocode(req.query.address, ({longitude,
    latitude, location}={})=>{
      forecast(longitude, latitude, (data)=>{
        // console.log(data, location)
        res.send({
          address: req.query,
          data,
          location
        })
      })
    })

})

app.get('*',(req, res) => {
  res.render('404')
})

app.listen(port, ()=>{
  console.log(`server run on port ${port}`)
})