import Layout from "@/components/layout/Layout";
import { useState } from "react";
import { ArrowLeft, Car, User, Calendar, DollarSign, Phone, Mail } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const BookingRequestDetails = () => {
  const { id } = useParams();
  const [note, setNote] = useState("");
  
  // Mock booking data - in real app, this would be fetched based on ID
  const booking = {
    id: "BK001",
    vehicle: {
      make: "Toyota",
      model: "Camry",
      licensePlate: "AA-123-456",
      photo: "/placeholder-car.jpg",
      pricePerDay: 1200,
    },
    renter: {
      name: "Sarah Johnson",
      email: "sarah.johnson@email.com",
      phone: "+251-91-123-4567",
      profilePhoto: "/placeholder-avatar.jpg",
    },
    dates: {
      startDate: "March 15, 2025",
      endDate: "March 18, 2025",
      duration: 3,
    },
    totalAmount: 3600,
    status: "Pending",
    requestedAt: "March 10, 2025 at 2:30 PM",
  };

  const handleAccept = () => {
    // Handle accept request
    console.log("Request accepted with note:", note);
  };

  const handleDecline = () => {
    // Handle decline request
    console.log("Request declined with note:", note);
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center space-x-4">
          <Link to="/bookings" className="p-2 hover:bg-muted rounded-md transition-colors">
            <ArrowLeft className="h-5 w-5 text-muted-foreground" />
          </Link>
          <h1 className="text-3xl font-bold text-foreground">Booking Request Details</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Booking Info */}
            <div className="rental-card">
              <h2 className="text-xl font-semibold text-foreground mb-4">Booking Information</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Booking ID:</span>
                  <span className="font-mono text-foreground">{booking.id}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Requested on:</span>
                  <span className="text-foreground">{booking.requestedAt}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Status:</span>
                  <span className="rental-status-pending">{booking.status}</span>
                </div>
              </div>
            </div>

            {/* Vehicle Details */}
            <div className="rental-card">
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                <Car className="h-5 w-5 mr-2" />
                Vehicle Details
              </h2>
              <div className="flex items-start space-x-4">
                <img
                  src={booking.vehicle.photo}
                  alt={`${booking.vehicle.make} ${booking.vehicle.model}`}
                  className="w-24 h-18 object-cover rounded-md bg-muted"
                  onError={(e) => {
                    e.currentTarget.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTYiIGhlaWdodD0iNzIiIHZpZXdCb3g9IjAgMCA5NiA3MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9Ijk2IiBoZWlnaHQ9IjcyIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0zNiAzNkwyNCA0OEgzNlYzNloiIGZpbGw9IiM5Q0E0QjAiLz4KPC9zdmc+";
                  }}
                />
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">
                    {booking.vehicle.make} {booking.vehicle.model}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    License Plate: {booking.vehicle.licensePlate}
                  </p>
                  <p className="text-sm text-foreground">
                    ETB {booking.vehicle.pricePerDay.toLocaleString()} per day
                  </p>
                </div>
              </div>
            </div>

            {/* Renter Details */}
            <div className="rental-card">
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                <User className="h-5 w-5 mr-2" />
                Renter Information
              </h2>
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center">
                  <User className="h-8 w-8 text-muted-foreground" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">{booking.renter.name}</h3>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Mail className="h-4 w-4 mr-2" />
                    {booking.renter.email}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Phone className="h-4 w-4 mr-2" />
                    {booking.renter.phone}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Rental Details */}
            <div className="rental-card">
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                Rental Details
              </h2>
              <div className="space-y-4">
                <div>
                  <span className="text-sm text-muted-foreground">Start Date</span>
                  <p className="font-medium text-foreground">{booking.dates.startDate}</p>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">End Date</span>
                  <p className="font-medium text-foreground">{booking.dates.endDate}</p>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">Duration</span>
                  <p className="font-medium text-foreground">{booking.dates.duration} days</p>
                </div>
                <div className="border-t border-border pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Total Amount</span>
                    <span className="text-xl font-bold text-foreground flex items-center">
                      <DollarSign className="h-5 w-5 mr-1" />
                      ETB {booking.totalAmount.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Actions */}
            <div className="rental-card">
              <h2 className="text-xl font-semibold text-foreground mb-4">Respond to Request</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Optional Note
                  </label>
                  <textarea
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="Add a note for the renter..."
                    rows={3}
                    className="w-full px-3 py-2 border border-border rounded-md bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm"
                  />
                </div>
                
                <div className="space-y-3">
                  <button
                    onClick={handleAccept}
                    className="w-full rental-button-accent py-3 font-medium"
                  >
                    Accept Request
                  </button>
                  <button
                    onClick={handleDecline}
                    className="w-full px-4 py-3 border border-border rounded-md text-muted-foreground hover:bg-muted transition-colors"
                  >
                    Decline Request
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BookingRequestDetails;