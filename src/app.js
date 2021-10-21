const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

// Define paths for express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

// Setup handlebars and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)




app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Harrison'
    })
})


app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About this app',
        name: 'Harrison'
    })
})


app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help page',
        name: 'Harrison'
    })
})


app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address'
        })
    }

    console.log(req.query.address)
    res.send([{
        forecast: "it is raining",
        location: 'Florida',
        address: req.query.address
    }])
}) 

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404 Error: Help article not found'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404 Error: Page not found'
    })
})

app.listen(3000, () => {
    console.log('server is up on port 3000')
})