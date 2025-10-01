import { Outlet } from 'react-router';
import { ThemeProvider } from '~/contexts/ThemeContext';
import { AuthProvider } from '~/contexts/AuthContext';
import { Link, Tab, TabList, TabPanel, Tabs } from '@nwsconnect/atmosphere';

const urlRoot = window.location.origin;

export default function TrainingLayout() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <div className="min-h-screen bg-white dark:bg-gray-900">
          <nav>
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
                  url={`${urlRoot}/training/context-demo`} isExternal={false}
                  target='_self' >Context Demo</Link>
                <Link 
                  url={`${urlRoot}/training/zustand-demo`} 
                  isExternal={false}
                  target='_self'
                  >Zustand Demo</Link>
                <Link 
                  url={`${urlRoot}/training/combined-demo`} 
                  isExternal={false}
                  target='_self' 
                  >Combined Demo</Link>
                <Link  
                  url={`${urlRoot}/training/maplibre-demo`} 
                  isExternal={false}
                  target='_self'>Maplibre Demo</Link>
                <Link 
                  url={`${urlRoot}/training/tailwind-demo`} 
                  isExternal={false}
                  target='_self'>Tailwind Demo</Link>
                <Link 
                  url={`${urlRoot}/training/events-enhanced`} 
                  isExternal={false}
                  target='_self'>Enhanced Events</Link>
                <Link 
                  url={`${urlRoot}/training/weather-dashboard`} 
                  isExternal={false}
                  target='_self' >Weather Dashboard</Link>
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