
import {ReactNode} from "react"
interface IForm{
    children:ReactNode
}
const Form=({children}:IForm)=>{
return(
    <form >
       {children}
    </form>
)
}
export default Form