import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OwnerDashboard from "./pages/OwnerDashboard";
import ManageVehicles from "./pages/ManageVehicles";
import AddVehicle from "./pages/AddVehicle";
import EditVehicle from "./pages/EditVehicle";
import Bookings from "./pages/Bookings";
import Earnings from "./pages/Earnings";
import BookingRequestDetails from "./pages/BookingRequestDetails";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<OwnerDashboard />} />
          <Route path="/vehicles" element={<ManageVehicles />} />
          <Route path="/add-vehicle" element={<AddVehicle />} />
          <Route path="/edit-vehicle/:id" element={<EditVehicle />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/earnings" element={<Earnings />} />
          <Route path="/booking-details/:id" element={<BookingRequestDetails />} />
          <Route path="/profile" element={<OwnerDashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
