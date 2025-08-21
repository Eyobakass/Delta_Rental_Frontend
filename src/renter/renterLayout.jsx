import React from 'react'
import { Outlet, NavLink} from 'react-router-dom'
const RenterLayout = () => {
  return (
    <div>
      <aside className="bg-[#FFFBF4] border-b border-[#11120D88]">
        <ul className="flex space-x-8 px-6 py-3">
          <li>
            <NavLink
              to="/renter/dashboard"
              className={({ isActive }) =>
                `text-[#565449] hover:text-[#565449] hover:underline hover:opacity-80 transition ${
                  isActive ? "font-bold text-[#11120D]" : ""
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/renter/reservations"
              className={({ isActive }) =>
                `text-[#565449] hover:text-[#565449] hover:underline hover:opacity-80 transition ${
                  isActive ? "font-bold text-[#11120D]" : ""
                }`
              }
            >
              Reservations
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/renter/rentalHistory"
              className={({ isActive }) =>
                `text-[#565449] hover:text-[#565449] hover:underline hover:opacity-80 transition ${
                  isActive ? "font-bold text-[#11120D]" : ""
                }`
              }
            >
              Rental History
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/">
              <button className="bg-transparent text-[#565449] px-2 rounded-lg border border-[#11120D88] hover:bg-[#D8CFBC] hover:text-[#11120D] transition">
                Log Out
              </button>
            </NavLink>
          </li>
        </ul>
      </aside>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RenterLayout
