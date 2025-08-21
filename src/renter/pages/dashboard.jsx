import React from 'react'
import ProfileCard from '../components/profileCard'
const Dashboard = () => {
  const name = "John Doe";
  const email = "john.doe@example.com";
  const phone = "(123) 456-7890";
  return (

    <div className='p-6'>
      <ProfileCard
        name={name.trim()}
        email={email.trim()}
        phone={phone.trim()}
      />
    </div>
  )
}

export default Dashboard
