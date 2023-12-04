import Button from "../button/button.component"
import FormInput from "../form-input/form-input.component"
import Form from "../form/form.component"

const UpdateForm=()=>{
return(
    <>
    <Form>
        <FormInput 
        label="name" 
        type='text'
        required
        name='name'
         />
        <FormInput 
        label="photo url" 
        type='text'
         required
        name='photo url'
         />
        <FormInput 
        label="Mobile" 
        type='number'
        required
        name='Mobile'
         />
        <FormInput 
        label="Email" 
        type='email'
        required
        name='Email'
         />
        <FormInput 
        label="Company" 
        type='text'
        required
        name='Company'
         />
        <FormInput 
        label="Title" 
        type='text'
        required
        name='Title'
         />
       <Button variant="update" size="lg" className=" mt-6 mr-72"  >Update</Button>
       
    </Form>
    
    </>
)
}
export default UpdateForm