import React from 'react';
import Card from '../component/Card';
import users from '../Data';

const Home = () => {

  return (
    <div className='App'>
     <h1>User Cards</h1>
     {users.map((user) => (
         <Card key={user.id} user={user} />
         ))}
    </div>
    
  )
}

export default Home;

