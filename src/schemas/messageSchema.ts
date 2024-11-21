import {z} from "zod"


export const messageSchema = z.object({
    content:z.string().min(5,{message:"message be must of 5 character"}).max(300,{message:"message should not be no longer than 300 characters"})
}) 