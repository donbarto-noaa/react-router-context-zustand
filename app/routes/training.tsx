import { Outlet } from 'react-router';
import { ThemeProvider } from '~/contexts/ThemeContext';
import { AuthProvider } from '~/contexts/AuthContext';
import { Link } from 'atmosphere';

const urlRoot = window.location.origin;

export default function TrainingLayout() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
          <nav className="bg-blue-600 dark:bg-blue-800 text-white p-4">
            <div className="container mx-auto">
              <h1 className="text-2xl font-bold mb-4">State Management Training</h1>
              <div className="flex gap-4">
                <Link 
                  url={`${urlRoot}/training`}
                  isExternal={false}
                  target='_self' >
                  Overview
                </Link>
                <Link 
                  url={`${urlRoot}/training/context-demo`}>Context Demo</Link>
                <Link to="/training/zustand-demo" className="hover:underline">Zustand Demo</Link>
                <Link to="/training/combined-demo" className="hover:underline">Combined Demo</Link>
                <Link to="/training/maplibre-demo" className="hover:underline">Maplibre Demo</Link>
                <Link to="/training/tailwind-demo" className="hover:underline">Tailwind Demo</Link>
                <Link to="/training/events-enhanced" className="hover:underline">Enhanced Events</Link>
                <Link to="/training/weather-dashboard" className="hover:underline">Weather Dashboard</Link>
              </div>
            </div>
          </nav>
          <main className="container mx-auto p-4">
            <Outlet />
          </main>
        </div>
      </AuthProvider>
    </ThemeProvider>
  );
}