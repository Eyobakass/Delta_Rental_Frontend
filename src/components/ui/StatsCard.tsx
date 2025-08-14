interface StatsCardProps {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
  className?: string;
}

const StatsCard = ({ title, value, icon, className = "" }: StatsCardProps) => {
  return (
    <div className={`rental-card ${className}`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-muted-foreground">{title}</p>
          <p className="text-2xl font-semibold text-foreground mt-1">{value}</p>
        </div>
        {icon && (
          <div className="p-3 bg-secondary rounded-full">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
};

export default StatsCard;