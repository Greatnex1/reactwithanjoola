import React from 'react'
import CardDetail from './CardDetail'
import { faker } from '@faker-js/faker'

const CardList=(props) => {
  return (  
    <div>
    {/* <h1 style={{color:'red'}}>{title.name} Bright</h1> */}
    <CardDetail 
    title="First card"  image={faker.image.city()} description={faker.lorem.paragraphs()}/>;
    <CardDetail image={faker.image.animals()}/>;
    <CardDetail image={faker.image.sports()}/>;
    </div>
  )
}

export default CardList