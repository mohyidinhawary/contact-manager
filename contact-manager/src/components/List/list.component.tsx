import { IList } from "../../types/list"
const List=({items,resourceName,ItemComponent}:IList)=>{
return(
    <>
    {items.map((item,i)=>(
        <ItemComponent key={i} {...{[resourceName]:item}} />
    ))}
    </>
)
}
export default List