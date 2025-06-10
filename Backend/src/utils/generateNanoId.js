import { nanoid } from "nanoid" 

export const generateNanoId= async (length)=>{
    const id= nanoid(length);
    return id;
}