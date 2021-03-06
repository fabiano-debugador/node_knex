const express = require('express')

const routes = require('./routes')

const app = express()

const dotenv = require('dotenv')

app.use(express.json())
app.use(routes)

// notFound
app.use((req, res, next) => {
    const error = new Error('Not Found')
    error.status = 404
    next(error)
})

// catch all
app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({error: error.message})

})

dotenv.config()
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log('server is runningin port '+ PORT))