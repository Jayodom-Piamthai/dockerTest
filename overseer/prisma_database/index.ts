import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

//async func for query 
async function main(){
    //insert data into the base
    const createUser = await prisma.user.create({
        data: {
            userName: "ace",
        },
    });
    console.log("successfully create new user" , createUser)


    //find data in user table and display in console
    const allUser = await prisma.user.findMany()

    console.log(allUser)
}


//prisma await for error detection
main()
    .then(async()=>{
        await prisma.$disconnect()
    })
    .catch(async (e)=>{
        console.log(e)
        await prisma.$disconnect()
        process.exit(1)
    })