import Layout from "@/components/layout/Layout";
import StatsCard from "@/components/ui/StatsCard";
import { Car, Clock, DollarSign, Plus, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const mockRecentBookings = [
  {
    id: "BK001",
    car: "Toyota Camry",
    renter: "Sarah Johnson",
    dates: "Mar 15-18, 2025",
    status: "Pending",
  },
  {
    id: "BK002", 
    car: "Honda Accord",
    renter: "Michael Chen",
    dates: "Mar 20-25, 2025",
    status: "Confirmed",
  },
  {
    id: "BK003",
    car: "BMW X3",
    renter: "Emma Wilson",
    dates: "Mar 22-24, 2025", 
    status: "Confirmed",
  },
];

const OwnerDashboard = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <div className="flex space-x-3">
            <Link to="/add-vehicle" className="rental-button-accent">
              <Plus className="h-4 w-4 mr-2 inline" />
              Add Vehicle
            </Link>
            <Link to="/vehicles" className="rental-button-primary">
              <Settings className="h-4 w-4 mr-2 inline" />
              Manage Vehicles
            </Link>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatsCard
            title="Active Listings"
            value={3}
            icon={<Car className="h-6 w-6 text-accent" />}
          />
          <StatsCard
            title="Pending Requests"
            value={1}
            icon={<Clock className="h-6 w-6 text-accent" />}
          />
          <StatsCard
            title="Total Earnings This Month"
            value="ETB 5,500"
            icon={<DollarSign className="h-6 w-6 text-accent" />}
          />
        </div>

        {/* Recent Bookings */}
        <div className="rental-card">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-foreground">Recent Bookings</h2>
            <Link to="/bookings" className="text-accent hover:underline text-sm">
              View All
            </Link>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 text-sm font-medium text-muted-foreground">Car</th>
                  <th className="text-left py-3 text-sm font-medium text-muted-foreground">Renter</th>
                  <th className="text-left py-3 text-sm font-medium text-muted-foreground">Dates</th>
                  <th className="text-left py-3 text-sm font-medium text-muted-foreground">Status</th>
                  <th className="text-left py-3 text-sm font-medium text-muted-foreground">Action</th>
                </tr>
              </thead>
              <tbody>
                {mockRecentBookings.map((booking) => (
                  <tr key={booking.id} className="rental-table-row">
                    <td className="py-3 text-sm text-foreground">{booking.car}</td>
                    <td className="py-3 text-sm text-foreground">{booking.renter}</td>
                    <td className="py-3 text-sm text-foreground">{booking.dates}</td>
                    <td className="py-3">
                      <span className={`rental-status-${booking.status.toLowerCase()}`}>
                        {booking.status}
                      </span>
                    </td>
                    <td className="py-3">
                      <Link 
                        to={`/booking-details/${booking.id}`}
                        className="text-accent hover:underline text-sm"
                      >
                        View Details
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OwnerDashboard;