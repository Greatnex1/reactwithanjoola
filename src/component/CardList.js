import React from 'react'
import CardDetail from './CardDetail'
import { faker } from '@faker-js/faker'
import "./CardList.css"

const CardList=(props) => {
  return (  
    
      
    <div className="card-list">
    <CardDetail 
    title="First card"  image={faker.image.city()} description={faker.lorem.paragraphs()}/>;
    <CardDetail image={faker.image.animals()}/>;
    <CardDetail image={faker.image.sports()}/>;
    </div>
  )
}

export default CardList