import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ErrorBoundary from './components/common/ErrorBoundary';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import { Suspense, lazy } from 'react';
import Loading from './components/common/Loading';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import HowItWorks from './pages/HowItWorks';

// Lazy loaded components
const Solutions = lazy(() => import('./pages/Solutions'));

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
              <Route path="/contact" element={<><Header /><Contact /><Footer /></>} />
              <Route path="/privacy" element={<><Header /><Privacy /><Footer /></>} />
              <Route path="/how-it-works" element={<><Header /><HowItWorks /><Footer /></>} />

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
