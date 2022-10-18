import { faker } from "@faker-js/faker";
import React,{useState} from "react";
//import  CardDetail  from "./component/CardDetail";
//import Wrapper from "./component/Wrapper";
import CardList from "./component/CardList";
import NewCard from "./component/NewCard";
//import styles from "./CardList.module.css"
//import Counter from "./component/Counter";
//function greet(){
//   return "Hello from Greet";
//}

const App =()=>{
    const style={color:'blue'}
   const title = {name:"First React", quality:"Project"}
   const cardData =[
    {
    id: faker.datatype.uuid(),
    image: faker.image.animals(),
    title:faker.random.word(),
    desciption:faker.random.words(faker.random.numeric())

   },
   {
   id: faker.datatype.uuid(),
   image: faker.image.city(),
   title:faker.random.word(),
   desciption:faker.random.words(faker.random.numeric())
  },
  {
    id: faker.datatype.uuid(),
    image: faker.image.fashion(),
    title:faker.random.word(),
    desciption:faker.random.words(faker.random.numeric())
   },
]

const [data,setData] =useState(cardData)
   //const title = "Hey Welcome"
    return  (
        <div>
     <h1 style={style}>{title.name} 
     {title.quality}</h1>
     <NewCard setData={setData}/>
    <CardList data={data}/>
  
    {/* <CardDetail/> */}
    </div>
    )
};
export default App;