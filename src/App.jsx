import { BrowserRouter, Routes } from "react-router-dom";
import RenterRoutes from "./renter/renterRoutes";
import ownerRoutes from "./owner/ownerRoutes";
import publicRoutes from "./public/publicRoutes";
import adminRoutes from "./admin/adminRoutes";

function App() {
  return (
    <BrowserRouter>
        <publicRoutes />
        <ownerRoutes />
        <RenterRoutes />
        <adminRoutes />
    </BrowserRouter>
  );
}

export default App;
