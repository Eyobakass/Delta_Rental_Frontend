import Layout from "@/components/layout/Layout";
import { useState } from "react";
import { ArrowLeft, Upload } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const EditVehicle = () => {
  const { id } = useParams();
  
  // Mock data - in real app, this would be fetched based on ID
  const [formData, setFormData] = useState({
    photo: "/placeholder-car.jpg",
    make: "Toyota",
    model: "Camry",
    licensePlate: "AA-123-456",
    year: "2022",
    pricePerDay: "1200",
    status: "Active",
    description: "Comfortable sedan, perfect for city driving and long trips.",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Updated vehicle data:", formData);
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center space-x-4">
          <Link to="/vehicles" className="p-2 hover:bg-muted rounded-md transition-colors">
            <ArrowLeft className="h-5 w-5 text-muted-foreground" />
          </Link>
          <h1 className="text-3xl font-bold text-foreground">Edit Vehicle</h1>
        </div>

        <div className="rental-card max-w-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Current Photo */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Vehicle Photo
              </label>
              <div className="space-y-4">
                <img
                  src={formData.photo}
                  alt="Current vehicle"
                  className="w-32 h-24 object-cover rounded-md bg-muted"
                  onError={(e) => {
                    e.currentTarget.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9Ijk2IiB2aWV3Qm94PSIwIDAgMTI4IDk2IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9Ijk2IiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik00NCA0MEwzMiA1Mkg0NFY0MFoiIGZpbGw9IiM5Q0E0QjAiLz4KPC9zdmc+";
                  }}
                />
                <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-accent transition-colors">
                  <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground mb-1">Upload new photo</p>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      // Handle file upload
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Make & Model */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Make
                </label>
                <input
                  type="text"
                  name="make"
                  value={formData.make}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-border rounded-md bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Model
                </label>
                <input
                  type="text"
                  name="model"
                  value={formData.model}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-border rounded-md bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  required
                />
              </div>
            </div>

            {/* License Plate & Year */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  License Plate
                </label>
                <input
                  type="text"
                  name="licensePlate"
                  value={formData.licensePlate}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-border rounded-md bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Year
                </label>
                <input
                  type="number"
                  name="year"
                  value={formData.year}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-border rounded-md bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  required
                />
              </div>
            </div>

            {/* Price Per Day */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Price per Day (ETB)
              </label>
              <input
                type="number"
                name="pricePerDay"
                value={formData.pricePerDay}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-border rounded-md bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                required
              />
            </div>

            {/* Availability Status */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Availability Status
              </label>
              <select
                name="status"
                value={formData.status}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-border rounded-md bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-3 py-2 border border-border rounded-md bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end space-x-4">
              <Link to="/vehicles" className="px-6 py-2 border border-border rounded-md text-muted-foreground hover:bg-muted transition-colors">
                Cancel
              </Link>
              <button type="submit" className="rental-button-primary px-8 py-2">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default EditVehicle;