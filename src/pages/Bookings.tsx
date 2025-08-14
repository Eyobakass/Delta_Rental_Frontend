import Layout from "@/components/layout/Layout";
import { useState } from "react";
import { Eye, Filter } from "lucide-react";
import { Link } from "react-router-dom";

const mockBookings = [
  {
    id: "BK001",
    vehicle: "Toyota Camry",
    renter: "Sarah Johnson",
    renterContact: "+251-91-123-4567",
    dates: "Mar 15-18, 2025",
    status: "Pending",
    totalAmount: "ETB 3,600",
  },
  {
    id: "BK002",
    vehicle: "Honda Accord", 
    renter: "Michael Chen",
    renterContact: "+251-91-234-5678",
    dates: "Mar 20-25, 2025",
    status: "Confirmed",
    totalAmount: "ETB 5,500",
  },
  {
    id: "BK003",
    vehicle: "BMW X3",
    renter: "Emma Wilson",
    renterContact: "+251-91-345-6789",
    dates: "Mar 22-24, 2025",
    status: "Confirmed", 
    totalAmount: "ETB 5,000",
  },
  {
    id: "BK004",
    vehicle: "Toyota Camry",
    renter: "David Lee",
    renterContact: "+251-91-456-7890",
    dates: "Mar 10-12, 2025",
    status: "Cancelled",
    totalAmount: "ETB 2,400",
  },
];

const Bookings = () => {
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredBookings = statusFilter === "All" 
    ? mockBookings 
    : mockBookings.filter(booking => booking.status === statusFilter);

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-foreground">Bookings</h1>
          
          {/* Filter */}
          <div className="flex items-center space-x-2">
            <Filter className="h-5 w-5 text-muted-foreground" />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-3 py-2 border border-border rounded-md bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            >
              <option value="All">All Status</option>
              <option value="Pending">Pending</option>
              <option value="Confirmed">Confirmed</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>
        </div>

        <div className="rental-card">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 text-sm font-medium text-muted-foreground">Booking ID</th>
                  <th className="text-left py-3 text-sm font-medium text-muted-foreground">Vehicle</th>
                  <th className="text-left py-3 text-sm font-medium text-muted-foreground">Renter</th>
                  <th className="text-left py-3 text-sm font-medium text-muted-foreground">Contact</th>
                  <th className="text-left py-3 text-sm font-medium text-muted-foreground">Dates</th>
                  <th className="text-left py-3 text-sm font-medium text-muted-foreground">Total</th>
                  <th className="text-left py-3 text-sm font-medium text-muted-foreground">Status</th>
                  <th className="text-left py-3 text-sm font-medium text-muted-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredBookings.map((booking) => (
                  <tr key={booking.id} className="rental-table-row">
                    <td className="py-3 text-sm font-mono text-foreground">{booking.id}</td>
                    <td className="py-3 text-sm text-foreground">{booking.vehicle}</td>
                    <td className="py-3 text-sm text-foreground">{booking.renter}</td>
                    <td className="py-3 text-sm text-muted-foreground">{booking.renterContact}</td>
                    <td className="py-3 text-sm text-foreground">{booking.dates}</td>
                    <td className="py-3 text-sm text-foreground font-medium">{booking.totalAmount}</td>
                    <td className="py-3">
                      <span className={`rental-status-${booking.status.toLowerCase()}`}>
                        {booking.status}
                      </span>
                    </td>
                    <td className="py-3">
                      <div className="flex items-center space-x-2">
                        <Link
                          to={`/booking-details/${booking.id}`}
                          className="p-1 hover:bg-muted rounded text-accent"
                          title="View Details"
                        >
                          <Eye className="h-4 w-4" />
                        </Link>
                        {booking.status === "Pending" && (
                          <button className="px-3 py-1 text-xs bg-accent text-accent-foreground rounded hover:opacity-80 transition-opacity">
                            Respond
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredBookings.length === 0 && (
            <div className="text-center py-8">
              <p className="text-muted-foreground">No bookings found for the selected filter.</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Bookings;