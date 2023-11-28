interface IInput{
    label:string;
}
const FormInput=({label,...props}:IInput)=>{
return(
    <input {...props} />
    
)
}
export default FormInput