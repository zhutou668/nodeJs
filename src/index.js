const path = require('path')
const express = require('express')
const morgan = require('morgan')
const { engine } = require('express-handlebars')
const app = express()
const port = 3000

//HTTP logger
app.use(morgan('combined'))


app.use(express.urlencoded({
	extended: true
}))
app.use(express.json())

app.use(express.static(path.join(__dirname,'public')))


//Template Engine
app.engine('hbs',engine({
	extname: '.hbs'
}))
app.set('view engine','hbs')
app.set('views',path.join(__dirname, 'resources', 'views'))
// console.log((__dirname, 'resources/views'))

app.get('/', (req, res) => {
  res.render('home')
  // res.send('123')
})


app.get('/news', (req, res) => {
  res.render('news')
  // res.send('123')
})

app.get('/search', (req, res) => {
  res.render('search')
  // res.send('123')
})

app.post('/search', (req, res) => {
  res.render('search')
  console.log(req.body)
  console.log(req.hostname)
  // res.send('123')
})



app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})