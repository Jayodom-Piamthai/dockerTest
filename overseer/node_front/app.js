const express = require('express')
import { PrismaClient } from "@prisma/client";
const app = express()
const prisma = new PrismaClient()



app.get('/',(req,res)=>  res.send('good evening'))

app.get('/base', async (req,res)=>{
    const allUser = await prisma.user.findMany()
    res.send(allUser)
})

app.listen(33312,() => console.log('node server ready at 3012'));
