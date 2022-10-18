import React from 'react'
import { faker } from '@faker-js/faker';
import Wrapper from './Wrapper';
//import "./CardList.css"
//import NewCard from './NewCard';
 
const randomName = faker.name.fullName(); // Rowan Nikolaus
const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz


const  CardDetail = (props) => {
  return (
  <Wrapper>
<div className="max-w-sm ">
  <img className = "w-full" src={props.image} alt="Sunset in the mountains"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{props.title}</div>
    <p className="text-gray-700 text-base"> {props.description} </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
</div>
</Wrapper>
  )
}
{/* <NewCard/> */}
CardDetail.defaultProps ={
  title : "Testing Card Value",
  description:"Beautiful view always"
  
}
export  default CardDetail


