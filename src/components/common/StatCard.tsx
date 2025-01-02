interface StatCardProps {
    title: string;
    value: string | number;
    icon?: React.ReactNode;
    trend?: {
      value: number;
      isPositive: boolean;
    };
  }
  
  const StatCard = ({ title, value, icon, trend }: StatCardProps) => {
    return (
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">{title}</p>
            <h4 className="text-2xl font-bold mt-1">{value}</h4>
            {trend && (
              <div className={`flex items-center mt-2 ${trend.isPositive ? 'text-green-500' : 'text-red-500'}`}>
                <span className="text-sm">
                  {trend.isPositive ? '↑' : '↓'} {Math.abs(trend.value)}%
                </span>
              </div>
            )}
          </div>
          {icon && (
            <div className="text-gray-400">
              {icon}
            </div>
          )}
        </div>
      </div>
    );
  };
  
  export default StatCard;