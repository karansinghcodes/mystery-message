import {z }from "zod"

export const usernameValidation = z.string().min(2,"username must be of 2 characters").max(20,"username should not exceed more than 20 characters").regex(/[^a-zA-Z0-9\s]/,"username should not contain special characters");

export const signUpSchema = z.object({
    username:usernameValidation,
    email:z.string().email({message:'invalid email address'}),
    password:z.string().min(6,{message:"password must be of 6 characters"})

});