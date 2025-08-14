import Layout from "@/components/layout/Layout";
import StatsCard from "@/components/ui/StatsCard";
import { useState } from "react";
import { DollarSign, TrendingUp, Calendar, Settings, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const mockTransactions = [
  {
    id: "BK002",
    date: "Mar 25, 2025",
    vehicle: "Honda Accord",
    renter: "Michael Chen",
    gross: 5500,
    platformFee: 550,
    netEarning: 4950,
    status: "Paid Out",
  },
  {
    id: "BK003", 
    date: "Mar 24, 2025",
    vehicle: "BMW X3",
    renter: "Emma Wilson",
    gross: 5000,
    platformFee: 500,
    netEarning: 4500,
    status: "Pending",
  },
  {
    id: "BK005",
    date: "Mar 12, 2025", 
    vehicle: "Toyota Camry",
    renter: "David Lee",
    gross: 2400,
    platformFee: 240,
    netEarning: 2160,
    status: "Paid Out",
  },
];

const Earnings = () => {
  const [selectedMonth, setSelectedMonth] = useState("March 2025");

  const totalEarned = mockTransactions.reduce((sum, t) => sum + t.netEarning, 0);
  const thisMonthEarnings = mockTransactions
    .filter(t => t.date.includes("Mar"))
    .reduce((sum, t) => sum + t.netEarning, 0);
  const pendingPayout = mockTransactions
    .filter(t => t.status === "Pending")
    .reduce((sum, t) => sum + t.netEarning, 0);

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-foreground">Earnings</h1>
          <button className="rental-button-primary">
            <Settings className="h-4 w-4 mr-2 inline" />
            Payout Settings
          </button>
        </div>

        {/* Earnings Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatsCard
            title="Total Earned (All Time)"
            value={`ETB ${totalEarned.toLocaleString()}`}
            icon={<DollarSign className="h-6 w-6 text-accent" />}
          />
          <StatsCard
            title="This Month (March 2025)"
            value={`ETB ${thisMonthEarnings.toLocaleString()}`}
            icon={<TrendingUp className="h-6 w-6 text-accent" />}
          />
          <StatsCard
            title="Pending Payout"
            value={`ETB ${pendingPayout.toLocaleString()}`}
            icon={<Calendar className="h-6 w-6 text-accent" />}
          />
        </div>

        {/* Transactions Table */}
        <div className="rental-card">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-foreground">Transaction History</h2>
            
            {/* Month Filter */}
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-muted-foreground" />
              <select
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                className="px-3 py-2 border border-border rounded-md bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="March 2025">March 2025</option>
                <option value="February 2025">February 2025</option>
                <option value="January 2025">January 2025</option>
              </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 text-sm font-medium text-muted-foreground">Date</th>
                  <th className="text-left py-3 text-sm font-medium text-muted-foreground">Booking ID</th>
                  <th className="text-left py-3 text-sm font-medium text-muted-foreground">Vehicle</th>
                  <th className="text-left py-3 text-sm font-medium text-muted-foreground">Renter</th>
                  <th className="text-right py-3 text-sm font-medium text-muted-foreground">Gross</th>
                  <th className="text-right py-3 text-sm font-medium text-muted-foreground">Platform Fee</th>
                  <th className="text-right py-3 text-sm font-medium text-muted-foreground">Net Earning</th>
                  <th className="text-left py-3 text-sm font-medium text-muted-foreground">Status</th>
                  <th className="text-left py-3 text-sm font-medium text-muted-foreground">Action</th>
                </tr>
              </thead>
              <tbody>
                {mockTransactions.map((transaction) => (
                  <tr key={transaction.id} className="rental-table-row">
                    <td className="py-3 text-sm text-foreground">{transaction.date}</td>
                    <td className="py-3 text-sm font-mono">
                      <Link 
                        to={`/booking-details/${transaction.id}`}
                        className="text-accent hover:underline"
                      >
                        {transaction.id}
                      </Link>
                    </td>
                    <td className="py-3 text-sm text-foreground">{transaction.vehicle}</td>
                    <td className="py-3 text-sm text-foreground">{transaction.renter}</td>
                    <td className="py-3 text-sm text-right text-foreground">
                      ETB {transaction.gross.toLocaleString()}
                    </td>
                    <td className="py-3 text-sm text-right text-muted-foreground">
                      -ETB {transaction.platformFee.toLocaleString()}
                    </td>
                    <td className="py-3 text-sm text-right font-medium text-foreground">
                      ETB {transaction.netEarning.toLocaleString()}
                    </td>
                    <td className="py-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        transaction.status === "Paid Out" 
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}>
                        {transaction.status}
                      </span>
                    </td>
                    <td className="py-3">
                      <Link
                        to={`/booking-details/${transaction.id}`}
                        className="p-1 hover:bg-muted rounded text-accent"
                        title="View Details"
                      >
                        <Eye className="h-4 w-4" />
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

export default Earnings;