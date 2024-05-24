const express = require('express')
const app = express()
const cors = require ('cors')

app.use(cors({
    origin: 'http://localhost:3000'
}))
app.use(express.json())

const FormRoutes = require('./Routes/FormRoutes')
app.use('/api/formulariosite', FormRoutes)

const port = process.env.PORT || 5000
app.listen(port, () =>{
    console.log(`Server Running on port ${port}`)
})