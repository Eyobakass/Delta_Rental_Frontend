import React from 'react'
import { Route, Routes } from 'react-router-dom'
import RenterLayout from './renterLayout'
import Dashboard from './pages/dashboard'
import Reservations from './pages/reservations'
import RentalHistory from './pages/rentalHistory'
const RenterRoutes = () => {
  return (
    <Routes>
      <Route path="/renter" element={<RenterLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="reservations" element={<Reservations />} />
        <Route path="rentalHistory" element={<RentalHistory />} />
      </Route>
    </Routes>
  )
}

export default RenterRoutes
