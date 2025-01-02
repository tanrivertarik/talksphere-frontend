import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleSignOut = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const navItems = [
    { path: '/dashboard', icon: 'fas fa-home', label: 'Dashboard' },
    { path: '/dashboard/conversations', icon: 'fas fa-comments', label: 'Conversations' },
    { path: '/dashboard/analytics', icon: 'fas fa-chart-line', label: 'Analytics' },
    { path: '/dashboard/ai-workflow', icon: 'fas fa-robot', label: 'AI Workflow' },
    { path: '/dashboard/team', icon: 'fas fa-users', label: 'Team' },
    { path: '/dashboard/settings', icon: 'fas fa-cog', label: 'Settings' },
  ];

  return (
    <nav className="fixed left-0 top-0 h-screen w-64 bg-white shadow-lg z-10">
        <div className="logo flex items-center space-x-2">
          <img src="/assets/image.png" alt="TalkSphere Logo" className="h-32 w-32 object-contain rounded-full" />
        </div>
        <div className="nav-menu p-4 overflow-y-auto h-[calc(100vh-180px)]">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-item flex items-center space-x-2 p-3 rounded-lg mb-2 transition-colors
                ${location.pathname === item.path 
                 ? 'bg-primary text-white' 
                  : 'text-gray-600 hover:bg-gray-100'}`}
            >
              <i className={item.icon}></i>
              <span>{item.label}</span>
            </Link>
          ))}
        </div>

        <div className="user-profile absolute bottom-0 w-full border-t bg-white">
          <div className="p-3 hover:bg-gray-50 transition-colors">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <img 
                  src={user?.avatar || 'https://e7.pngegg.com/pngimages/348/800/png-clipart-man-wearing-blue-shirt-illustration-computer-icons-avatar-user-login-avatar-blue-child.png'} 
                  alt="User Avatar" 
                  className="h-10 w-10 rounded-full object-cover border-2 border-gray-200"
                />
                <span className="absolute bottom-0 right-0 h-3 w-3 bg-green-400 rounded-full border-2 border-white"></span>
              </div>
              <div className="user-info flex-1 min-w-0">
                <div className="font-medium text-gray-900 truncate">{user?.name}</div>
                <div className="text-sm text-gray-500">Admin</div>
              </div>
            </div>
          </div>
          
          <button
            onClick={handleSignOut}
            className="w-full p-3 flex items-center space-x-3 text-gray-600 hover:bg-red-50 hover:text-red-600 transition-colors border-t"
          >
            <i className="fas fa-sign-out-alt ml-1"></i>
            <span>Sign Out</span>
          </button>
        </div>
      </nav>
    );
  };

export default Sidebar; 