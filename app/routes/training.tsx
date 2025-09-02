import { Link, Outlet } from 'react-router';
import { ThemeProvider } from '~/contexts/ThemeContext';
import { AuthProvider } from '~/contexts/AuthContext';

export default function TrainingLayout() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
          <nav className="bg-blue-600 dark:bg-blue-800 text-white p-4">
            <div className="container mx-auto">
              <h1 className="text-2xl font-bold mb-4">State Management Training</h1>
              <div className="flex gap-4">
                <Link to="/training" className="hover:underline">Overview</Link>
                <Link to="/training/context-demo" className="hover:underline">Context Demo</Link>
                <Link to="/training/zustand-demo" className="hover:underline">Zustand Demo</Link>
                <Link to="/training/combined-demo" className="hover:underline">Combined Demo</Link>
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