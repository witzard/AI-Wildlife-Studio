import prisma from "@/utils/db"
// const prisma = require("./utils/db")
import hashPassword from "./hashPassword"
// const hashPassword = require("./hashPassword")

export default async function seed() {

    const password = await hashPassword('password')

    const posts = await prisma.user.create({
        data: {
            email: 'winzent@qmail.com',
            name: 'winzent@witzard',
            dateOfBirth: new Date('2004-04-17'),
            role: 'ADMIN',
            password, 
            posts: {
                create: [
                    {
                        topic: 'Subject',
                        detail: 'Lorem ipsum dol epturi! Fugit numquam, veritatis cumque nobis minima at. Deserunt, vel eum!',
                        like: 0
                    },
                ],
            },
        },
    })

}

export async function seedPost() {
    const newPost = await prisma.post.create({
        data: {
            topic: 'New Subject',
            detail: 'Lorem ipsum dol epturi! Fugit numquam, veritatis cumque nobis minima at. Deserunt, vel eum!',
            userId: 1,  // Assuming a user with ID 1 exists
            like: 0,
        },
    }) 
 
console.log(newPost)
}

