import React from 'react';
import logo from '../logo.svg';

const Card = ({user}) => {
  return (

    <div style={
        { border: '4px solid orange',
         boxShadow: '4px 4px 4px orange',
         padding: '4rem',
         color : 'orange',
         display: 'inline-block',
        }
    }>
      <img src={logo} alt=""  className='App-logo'/>
       <h3> Name: {user.name}</h3>
      <p>Email: {user.email}</p>
      <p>Age: {user.age}</p>
      <h2>City: {user.city} </h2>

    </div>

  )
}
export default Card;
