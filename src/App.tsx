import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ErrorBoundary from './components/common/ErrorBoundary';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import { Suspense, lazy } from 'react';
import Login from './pages/Login';
import { useAuth } from './hooks/useAuth';
import Loading from './components/common/Loading';
import DashboardLayout from './layouts/DashboardLayout';

// Korumalı rota bileşeni
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  return <>{children}</>;
};

// Lazy loaded components
const Dashboard = lazy(() => import('./pages/dashboard/Dashboard'));
const Conversations = lazy(() => import('./pages/dashboard/Conversations'));
const Analytics = lazy(() => import('./pages/dashboard/Analytics'));
const AIWorkflow = lazy(() => import('./pages/dashboard/AIWorkflow'));
const Team = lazy(() => import('./pages/dashboard/Team'));
const Settings = lazy(() => import('./pages/dashboard/Settings'));
const Solutions = lazy(() => import('./pages/Solutions'));
const Pricing = lazy(() => import('./pages/Pricing'));

function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <Router>
          <div className="flex flex-col min-h-screen">
            <Routes>
              {/* Public routes */}
              <Route path="/" element={<><Header /><Home /><Footer /></>} />
              <Route path="/about" element={<><Header /><About /><Footer /></>} />
              <Route path="/solutions" element={
                <Suspense fallback={<Loading />}>
                  <Header /><Solutions /><Footer />
                </Suspense>
              } />
              <Route path="/pricing" element={
                <Suspense fallback={<Loading />}>
                  <Header /><Pricing /><Footer />
                </Suspense>
              } />
              <Route path="/login" element={<Login />} />

              {/* Protected dashboard routes */}
              <Route path="/dashboard/*" element={
                <ProtectedRoute>
                  <DashboardLayout />
                </ProtectedRoute>
              }>
                <Route index element={
                  <Suspense fallback={<Loading />}>
                    <Dashboard />
                  </Suspense>
                } />
                <Route path="conversations" element={
                  <Suspense fallback={<Loading />}>
                    <Conversations />
                  </Suspense>
                } />
                <Route path="analytics" element={
                  <Suspense fallback={<Loading />}>
                    <Analytics />
                  </Suspense>
                } />
                <Route path="ai-workflow" element={
                  <Suspense fallback={<Loading />}>
                    <AIWorkflow />
                  </Suspense>
                } />
                <Route path="team" element={
                  <Suspense fallback={<Loading />}>
                    <Team />
                  </Suspense>
                } />
                <Route path="settings" element={
                  <Suspense fallback={<Loading />}>
                    <Settings />
                  </Suspense>
                } />
              </Route>

              {/* 404 sayfası */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </Router>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;
