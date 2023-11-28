import { cva } from "class-variance-authority";

export const buttonVariants=cva("rounded-md",{
    variants:{
variant:{
    new:"text-white bg-green-500",
    create:"text-white bg-green-500",
    cancel:"text-white bg-black-500",
    search:"border-2 border-black text-black",
    show:"text-white bg-yellow-500",
    back:"text-black bg-yellow-500",
    edit:"text-white bg-blue-500",
    update:"text-white bg-blue-500",
    delete:"text-white bg-red-500",

},
size:{
    sm:"text-sm px-1 py-0",
    md:"text-base px-2 py-1",
    lg:"text-xl px-4 py-2",

},
icons:{
plus:"fa fa-plus-circle",
eye: "fa fa-eye",
edit:"fa fa-edit",
trash: "fa fa-trash",
}

    }
})