
import { Button } from "bootstrap"
import Navbar from "./component/Navbar"
import Productpage from "./component/productpage"
import ButtonComponent from "./component/ButtonComponent"


const functionName = ()=>{
  const triggerAction = ()=> {
    alert("working")
  }
  return(
    <>
    {/* can also trigger it TEST BELLOW */}
    
      {/* title is a property of button component */}
      <ButtonComponent title="Edit"color="btn btn-danger"
      test={triggerAction}
      />
      <br/>
      <ButtonComponent title="Delete" color="btn btn-warning"/>
      <br/>
      <ButtonComponent title="More details" color="btn btn-success"/>
      <ButtonComponent title="Edit"/>
    <Navbar/>
      <div>
        <h1>Hello World</h1>
        <button>Click me</button>
      </div>
      <Productpage/>
      
    </>
  )
}

export default functionName
