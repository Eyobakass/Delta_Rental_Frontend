import { User, Settings } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-card border-b border-border px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold text-foreground">Delta Rental</h1>
          <span className="text-sm text-muted-foreground">Owner Portal</span>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-muted rounded-md transition-colors">
            <Settings className="h-5 w-5 text-muted-foreground" />
          </button>
          <button className="flex items-center space-x-2 p-2 hover:bg-muted rounded-md transition-colors">
            <User className="h-5 w-5 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">John Doe</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;