import Layout from "@/components/layout/Layout";
import { Edit, Eye, EyeOff, Plus, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

const mockVehicles = [
  {
    id: "VH001",
    photo: "/placeholder-car.jpg",
    make: "Toyota",
    model: "Camry",
    licensePlate: "AA-123-456",
    pricePerDay: 1200,
    status: "Active",
  },
  {
    id: "VH002",
    photo: "/placeholder-car.jpg", 
    make: "Honda",
    model: "Accord",
    licensePlate: "BB-789-012",
    pricePerDay: 1100,
    status: "Active",
  },
  {
    id: "VH003",
    photo: "/placeholder-car.jpg",
    make: "BMW",
    model: "X3",
    licensePlate: "CC-345-678",
    pricePerDay: 2500,
    status: "Inactive",
  },
];

const ManageVehicles = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-foreground">Manage My Vehicles</h1>
          <Link to="/add-vehicle" className="rental-button-accent">
            <Plus className="h-4 w-4 mr-2 inline" />
            Add New Vehicle
          </Link>
        </div>

        <div className="rental-card">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 text-sm font-medium text-muted-foreground">Photo</th>
                  <th className="text-left py-3 text-sm font-medium text-muted-foreground">Make & Model</th>
                  <th className="text-left py-3 text-sm font-medium text-muted-foreground">License Plate</th>
                  <th className="text-left py-3 text-sm font-medium text-muted-foreground">Price/Day</th>
                  <th className="text-left py-3 text-sm font-medium text-muted-foreground">Status</th>
                  <th className="text-left py-3 text-sm font-medium text-muted-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {mockVehicles.map((vehicle) => (
                  <tr key={vehicle.id} className="rental-table-row">
                    <td className="py-3">
                      <img
                        src={vehicle.photo}
                        alt={`${vehicle.make} ${vehicle.model}`}
                        className="w-20 h-15 object-cover rounded-md bg-muted"
                        onError={(e) => {
                          e.currentTarget.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA4MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjgwIiBoZWlnaHQ9IjYwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0yOCAyNEwyMCAzMkgyOFYyNFoiIGZpbGw9IiM5Q0E0QjAiLz4KPC9zdmc+";
                        }}
                      />
                    </td>
                    <td className="py-3">
                      <Link 
                        to={`/edit-vehicle/${vehicle.id}`}
                        className="text-foreground hover:text-accent hover:underline font-medium"
                      >
                        {vehicle.make} {vehicle.model}
                      </Link>
                    </td>
                    <td className="py-3 text-sm text-foreground">{vehicle.licensePlate}</td>
                    <td className="py-3 text-sm text-foreground">ETB {vehicle.pricePerDay.toLocaleString()}</td>
                    <td className="py-3">
                      <span className={`rental-status-${vehicle.status.toLowerCase()}`}>
                        {vehicle.status}
                      </span>
                    </td>
                    <td className="py-3">
                      <div className="flex items-center space-x-2">
                        <Link
                          to={`/edit-vehicle/${vehicle.id}`}
                          className="p-1 hover:bg-muted rounded text-accent"
                          title="Edit"
                        >
                          <Edit className="h-4 w-4" />
                        </Link>
                        <button
                          className="p-1 hover:bg-muted rounded text-muted-foreground"
                          title={vehicle.status === "Active" ? "Set Inactive" : "Set Active"}
                        >
                          {vehicle.status === "Active" ? (
                            <EyeOff className="h-4 w-4" />
                          ) : (
                            <Eye className="h-4 w-4" />
                          )}
                        </button>
                        <button
                          className="p-1 hover:bg-muted rounded text-destructive"
                          title="Delete"
                          onClick={() => {
                            if (confirm("Are you sure you want to delete this vehicle?")) {
                              // Handle delete
                            }
                          }}
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
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

export default ManageVehicles;