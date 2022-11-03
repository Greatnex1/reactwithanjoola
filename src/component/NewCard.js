import React, {useState} from 'react'
//import CardDetails from './CardDetail'
//import CardList from './CardList'
import {faker} from "@faker-js/faker"

import {Button} from './Button'
import './NewCard.css'

const NewCard = ({setData}) => {
   const [inputs, setInputs] = useState({
    title: "", 
   description:"",
  });
  
 //  const titleChangeHandler = (event)
 //  setTitle(event.target.value)

 const inputChangedHandler = (event)=>{
  setInputs((prevState)=>{
    return{...prevState, [event.target.value]:event.target.value}
    
  })
 }

 const formSubmitHandler =(event) =>{
  event.preventDefault()
  console.log(inputs);

  const cardObj ={
    id:faker.datatype.uuid(),
    image:faker.image.avatar(),
    ...inputs,
  }
  setData((prevData)=>[cardObj, ...prevData])
  setInputs({title: "", description: ""})
//console.log(cardObj);
 }
 
  return (
   
  
      <form className='new-card' on Submit={formSubmitHandler}>
         <div>

         <label htmlFor='title'>Card Title</label>
        <input name='title' type="text" id="title"value={inputs.title} onChange={inputChangedHandler} />
         </div>
    
  
    <div>
    <label htmlFor='description'>Card Description</label>
        <input name='description' type="text" id="description" />
         </div>
      
      
  <Button color='white'>Add Card</Button>
    </form>
  )
  }
  


export default NewCard