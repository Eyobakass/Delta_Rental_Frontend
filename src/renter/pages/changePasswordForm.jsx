import React from 'react'

const changePasswordForm = () => {
  return (
    <div>
      <h2>Change Password</h2>
      <form>
        <div>
          <label htmlFor="currentPassword">Current Password</label>
          <input type="password" id="currentPassword" name="currentPassword" required />
        </div>
        <div>
          <label htmlFor="newPassword">New Password</label>
          <input type="password" id="newPassword" name="newPassword" required />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm New Password</label>
          <input type="password" id="confirmPassword" name="confirmPassword" required />
        </div>
        <button type="submit">Change Password</button>
      </form>
    </div>
  )
}

export default changePasswordForm
