import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()
import express from 'express'; //we use import instead of const so express and prisma can both work
const app = express()


app.get('/',(req,res)=>  res.send('good evening'))

app.get('/user/find', async (req,res)=>{
    const allUser = await prisma.user.findMany();
    res.send({data: allUser});
})
app.get('/user/create/:name', async (req,res)=>{
    const newName = req.params.name ;
    const allUser = await prisma.user.create({
        data: {
            userName: newName
        }
    });
    res.send({data: allUser});
})

// main()
//     .then(async()=>{
//         await prisma.$disconnect()
//     })
//     .catch(async (e)=>{
//         console.log(e)
//         await prisma.$disconnect()
//         process.exit(1)
//     })

app.listen(33312,() => console.log('node server ready at 33312'));
