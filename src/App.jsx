import { BrowserRouter, Routes } from "react-router-dom";
import renterRoutes from "./renter/renterRoutes";
import ownerRoutes from "./owner/ownerRoutes";
import publicRoutes from "./public/publicRoutes";
import adminRoutes from "./admin/adminRoutes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {publicRoutes}
        {renterRoutes}
        {ownerRoutes}
        {adminRoutes}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
