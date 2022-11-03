//import React from 'react'
import "./Button.css";
import styled from 'styled-components';

export const  Button = styled.button`
    background-color: ${props => props.bg ? props.bg :'#55d'};
    color: ${props => props.color || 'black'};
    padding: 5px;
    font-size: 1.2rem;
    margin:2px; 

    @media (max-width:600px){

    }
    
    &:hover{

    }

`;


// const Button = ({displayName, onClick,bg,color}) => {
//   return (

//     <button className='btn__button' onClick={onClick} style={{backgroudColor:bg, color: color}}>{displayName} </button>

//   )
// }

//export default Button