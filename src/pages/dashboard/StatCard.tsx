interface StatCardProps {
  icon: string;
  title: string;
  value: string;
}

const StatCard = ({ icon, title, value }: StatCardProps) => {
  return (
    <div className="stat-card bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-center space-x-4">
        <i className={`${icon} text-2xl text-primary`}></i>
        <div className="stat-info">
          <h3 className="text-gray-600 text-sm">{title}</h3>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
        </div>
      </div>
    </div>
  );
};

export default StatCard; 