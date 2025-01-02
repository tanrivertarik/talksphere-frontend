import { Outlet } from 'react-router-dom';
import Sidebar from '../pages/dashboard/Sidebar';

const DashboardLayout = () => {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <main className="dashboard-content">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout; 