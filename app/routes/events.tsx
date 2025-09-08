import { Link, Outlet } from 'react-router';
import { Button } from 'atmosphere';
import 'atmosphere/style.css';
import { ThemeProvider } from '~/contexts/ThemeContext';
import { AuthProvider } from '~/contexts/AuthContext';


export default function EventsLayout() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
          <nav className="bg-blue-600 dark:bg-blue-800 text-white p-4">
            <div className="container mx-auto">
              <h1 className="text-2xl font-bold mb-4">Events Pages</h1>
              <div className="flex gap-4">
                <Link to="../events/" className="hover:underline">Events Main</Link>
                <Link to="../events/about" className="hover:underline">About</Link>
                <Link to="../events/events" className="hover:underline">Events</Link>
                <Link to="../events/observations" className="hover:underline">Observations</Link>
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