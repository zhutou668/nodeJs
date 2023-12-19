const path = require('path')
const express = require('express')
const morgan = require('morgan')
const { engine } = require('express-handlebars')
const app = express()
const port = 3000

//HTTP logger
app.use(morgan('combined'))

app.use(express.static(path.join(__dirname,'public')))

console.log(__dirname,'public','images')

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


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})