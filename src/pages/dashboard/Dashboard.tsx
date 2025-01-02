import { useAuth } from '../../hooks/useAuth';
import StatCard from './StatCard';

// Alt bileşenler
const ActiveConversations = () => (
  <div className="dashboard-card bg-white p-6 rounded-lg shadow-sm">
    <div className="card-header">
      <h2 className="text-lg font-semibold"><i className="fas fa-comments mr-2"></i>Active Conversations</h2>
      <button className="view-all">View All</button>
    </div>
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <img src="/assets/avatar1.png" alt="User" className="h-10 w-10 rounded-full" />
            <span className="absolute bottom-0 right-0 h-3 w-3 bg-green-400 rounded-full border-2 border-white"></span>
          </div>
          <div>
            <h3 className="font-medium">John Doe</h3>
            <p className="text-sm text-gray-500">Product inquiry about...</p>
          </div>
        </div>
        <span className="text-sm text-gray-500">2m ago</span>
      </div>
    </div>
  </div>
);

const OnlineUsers = () => (
  <div className="dashboard-card bg-white p-6 rounded-lg shadow-sm">
    <div className="card-header">
      <h2 className="text-lg font-semibold"><i className="fas fa-users mr-2"></i>Online Users</h2>
    </div>
    <div className="space-y-4">
      <div className="flex items-center space-x-3">
        <img src="/assets/avatar2.png" alt="User" className="h-10 w-10 rounded-full" />
        <div>
          <h3 className="font-medium">Sarah Wilson</h3>
          <p className="text-sm text-gray-500">Active now</p>
        </div>
      </div>
    </div>
  </div>
);

const AIWorkflow = () => (
  <div className="dashboard-card bg-white p-6 rounded-lg shadow-sm">
    <div className="card-header">
      <h2 className="text-lg font-semibold"><i className="fas fa-robot mr-2"></i>AI Workflow</h2>
      <button className="px-3 py-1 text-sm bg-primary text-white rounded-lg">Configure</button>
    </div>
    <div className="grid grid-cols-2 gap-4 mb-4">
      <div className="text-center p-4 bg-gray-50 rounded-lg">
        <h4 className="text-sm text-gray-600">Response Rate</h4>
        <p className="text-2xl font-bold text-primary">94%</p>
      </div>
      <div className="text-center p-4 bg-gray-50 rounded-lg">
        <h4 className="text-sm text-gray-600">Avg Response Time</h4>
        <p className="text-2xl font-bold text-primary">1.2s</p>
      </div>
    </div>
    <div className="workflow-actions">
      <button className="action-btn"><i className="fas fa-edit mr-2"></i>Edit Responses</button>
      <button className="action-btn"><i className="fas fa-history mr-2"></i>View History</button>
    </div>
  </div>
);

const ChatHistory = () => (
  <div className="dashboard-card bg-white p-6 rounded-lg shadow-sm">
    <div className="card-header">
      <h2 className="text-lg font-semibold"><i className="fas fa-history mr-2"></i>Recent Chat History</h2>
    </div>
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img src="/assets/avatar3.png" alt="User" className="h-10 w-10 rounded-full" />
          <div>
            <h3 className="font-medium">Mike Johnson</h3>
            <p className="text-sm text-gray-500">Technical support</p>
          </div>
        </div>
        <div className="text-right">
          <span className="text-sm text-gray-500 block">Today, 2:30 PM</span>
          <span className="text-sm text-gray-400">15 min</span>
        </div>
      </div>
    </div>
  </div>
);

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="ml-64 p-8">
      <div className="dashboard-header mb-8">
        <h1 className="text-2xl font-bold mb-6">Welcome back, <span>{user?.name}</span></h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard
            icon="fas fa-users"
            title="Active Users"
            value="24"
          />
          <StatCard
            icon="fas fa-comments"
            title="Active Chats"
            value="12"
          />
          <StatCard
            icon="fas fa-robot"
            title="AI Responses"
            value="156"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ActiveConversations />
        <OnlineUsers />
        <AIWorkflow />
        <ChatHistory />
      </div>
    </div>
  );
};

export default Dashboard;