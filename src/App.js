import { faker } from "@faker-js/faker";
import React from "react";
import  CardDetail  from "./component/CardDetail";
import Wrapper from "./component/Wrapper";
import CardList from "./component/CardList";
import Counter from "./component/Counter";
//function greet(){
//   return "Hello from Greet";
//}

const App =()=>{
   const title = {name:"Joy",}

   //const title = "Hey Welcome"
    return  (
     // <h1 style={{color:'red'}}>{title.name} Bright</h1>

    //<CardList/>
    <Counter/>
    )
};
export default App;