import { NavLink, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Car,
  Plus,
  Calendar,
  DollarSign,
  User,
  LogOut
} from "lucide-react";

const navigationItems = [
  { path: "/", label: "Dashboard", icon: LayoutDashboard },
  { path: "/vehicles", label: "My Vehicles", icon: Car },
  { path: "/add-vehicle", label: "Add New", icon: Plus },
  { path: "/bookings", label: "Bookings", icon: Calendar },
  { path: "/earnings", label: "Earnings", icon: DollarSign },
  { path: "/profile", label: "Profile", icon: User },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className="bg-card border-r border-border w-64 min-h-screen p-4">
      <nav className="space-y-2">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={`flex items-center space-x-3 px-4 py-3 rounded-md transition-colors ${
                isActive
                  ? "bg-secondary text-secondary-foreground font-medium"
                  : "text-muted-foreground hover:bg-muted hover:text-accent"
              }`}
            >
              <Icon className="h-5 w-5" />
              <span>{item.label}</span>
            </NavLink>
          );
        })}
        
        <div className="pt-4 mt-4 border-t border-border">
          <button className="flex items-center space-x-3 px-4 py-3 rounded-md transition-colors text-muted-foreground hover:bg-muted hover:text-accent w-full">
            <LogOut className="h-5 w-5" />
            <span>Logout</span>
          </button>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;