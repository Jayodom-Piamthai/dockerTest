const express = require('express')
const app = express()

app.get('/',(req,res)=> res.send('good evening'))
app.listen(1359,() => console.log('node server ready at 1359'));