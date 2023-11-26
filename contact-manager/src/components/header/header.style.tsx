import { cva } from "class-variance-authority";

export const titleVariants=cva("",{
    variants:{
variant:{
    contacts:"text-2xl font-bold text-center text-black",
    add:"text-2xl font-bold text-center text-green-500",
    edit:"text-2xl font-bold text-center text-blue-500",
    view:"text-2xl font-bold text-center text-yellow-500",
},
    }
})