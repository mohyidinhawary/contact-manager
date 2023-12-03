import FormInput from "../form-input/form-input.component"
import Form from "../form/form.component"

const AddForm=()=>{
return(
    <>
    <Form>
        <FormInput label="name" type='text'
          required
          
          name='name'
         />
    </Form>
    </>
)
}
export default AddForm