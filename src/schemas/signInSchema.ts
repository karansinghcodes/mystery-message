import z from "zod"


export const signInSchema = z.object({
    //email
    identifier:z.string(),
    password:z.string()

});