import Layout from "@/components/layout/Layout";
import { useState } from "react";
import { ArrowLeft, Upload } from "lucide-react";
import { Link } from "react-router-dom";

const AddVehicle = () => {
  const [formData, setFormData] = useState({
    photo: "",
    make: "",
    model: "",
    licensePlate: "",
    year: "",
    pricePerDay: "",
    status: "Active",
    description: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Vehicle data:", formData);
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center space-x-4">
          <Link to="/vehicles" className="p-2 hover:bg-muted rounded-md transition-colors">
            <ArrowLeft className="h-5 w-5 text-muted-foreground" />
          </Link>
          <h1 className="text-3xl font-bold text-foreground">Add New Vehicle</h1>
        </div>

        <div className="rental-card max-w-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Photo Upload */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Vehicle Photo
              </label>
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-accent transition-colors">
                <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground mb-2">Click to upload or drag and drop</p>
                <p className="text-xs text-muted-foreground">PNG, JPG up to 10MB</p>
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
                  placeholder="Toyota"
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
                  placeholder="Camry"
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
                  placeholder="AA-123-456"
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
                  placeholder="2022"
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
                placeholder="1200"
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
                placeholder="Describe your vehicle..."
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end space-x-4">
              <Link to="/vehicles" className="px-6 py-2 border border-border rounded-md text-muted-foreground hover:bg-muted transition-colors">
                Cancel
              </Link>
              <button type="submit" className="rental-button-primary px-8 py-2">
                Add Vehicle
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default AddVehicle;