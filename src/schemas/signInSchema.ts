import z from "zod"


export const signInSchema = z.object({
    //here the identifier mean email
    identifier:z.string(),
    password:z.string()

});