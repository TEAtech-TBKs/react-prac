import { useState } from "react"
// import { Button } from "bootstrap"
import Navbar from "./component/Navbar"
import Productpage from "./component/productpage"
import ButtonComponent from "./component/ButtonComponent"
import CardsComponent from "./component/CardsComponent"

const functionName = ()=>{
  const triggerAction = ()=> {
    alert("working")
     // var myName = "Esther"
  // var myAge = 10

  const [myName, setmyName] = useState("")
  const [myAge, setmyAge] = useState(10)
  const [displayName, setdisplayName] = useState("")
  const [students, setstudents] = useState([])
  const [modal, setmodal] = useState(false)

  // const [first, setfirst] = useState(second)

  const handleChange = (event) =>{
    // console.log(event.target.value)
    setmyName(event.target.value)
  }

  const handleSubmit = () =>{
    setdisplayName(myName)
  }


  // const increaseAge = (num) =>{
  //   // myAge++
  //   // setmyAge(myAge+1)
  //   console.log(myAge)
  //   // console.log(myName)
  //   // myAge = myAge + 1
  //   // myAge += 1
  // }

  }
  return(
    <>
    <Navbar/>
    <CardsComponent title="Cards Section" style="text-center text-success"/>

    




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
