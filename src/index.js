const express = require('express')
const hbs = require('hbs')

const app = express()
const port = 8000

/* handlebars */
app.set('view engine', 'hbs')
app.set('views', `${__dirname}/views`)
hbs.registerPartials(`${__dirname}/views/partials`, function(error){})

function Bienvenida(port){
    console.log(`Servidor Corriendo en el puert ${port}`)
    console.log(`${__dirname}/public`)
}
app.listen(port, Bienvenida(port))

/* middleware */
app.use('/static', express.static(`${__dirname}/public`))
app.use('/bootstrap', express.static(`node_modules/bootstrap/dist`))

app.get('/', (request, response) =>{
    response.render('index',{
        titulo: 'Yo'
    })
})

app.get('/ejemplos', (request, response) =>{
    response.render('proyectos',{
        titulo: 'Ejemplos'
    })
})

app.get('/contacto', (request, response) =>{
    response.render('contacto',{
        titulo: 'Contacto'
    })
})