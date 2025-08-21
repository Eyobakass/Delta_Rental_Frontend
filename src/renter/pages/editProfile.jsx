import React from 'react'

const editProfile = () => {
  return (
    <div>
      <h1>Edit Profile</h1>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input type="tel" id="phone" name="phone" required />
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input type="text" id="address" name="address" required />
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  )
}

export default editProfile
