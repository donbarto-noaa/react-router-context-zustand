import { useState } from 'react';
import { useTheme } from '~/contexts/ThemeContext';
import { useAuth } from '~/contexts/AuthContext';
import { Button } from 'atmosphere';

export default function ContextDemo() {
  const { theme, toggleTheme } = useTheme();
  const { user, isAuthenticated, login, logout } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <h1 className="text-2xl font-bold">React Context Demo</h1>
      
      {/* Theme Context Example */}
      <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Theme Management</h2>
        <p className="mb-4">Current theme: <span className="font-mono">{theme}</span></p>
        <Button
          onPress={toggleTheme}
          color='accent'
          variant='outlined'
        >
          Toggle Theme
        </Button>
        <div className="mt-4 p-4 bg-white dark:bg-gray-700 rounded border">
          <p className="text-sm">
            This demonstrates Context for infrequently changing global state.
            The theme persists across all components without prop drilling.
          </p>
        </div>
      </div>

      {/* Auth Context Example */}
      <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Authentication State</h2>
        
        {!isAuthenticated ? (
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                placeholder="Enter email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                placeholder="Enter password"
              />
            </div>
            <button
              type="submit"
              className=""
            >
              Login
            </button>
          </form>
        ) : (
          <div>
            <p className="mb-4">Welcome, {user?.name}!</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Email: {user?.email}
            </p>
            <button
              onClick={logout}
              className=""
            >
              Logout
            </button>
          </div>
        )}
        
        <div className="mt-4 p-4 bg-white dark:bg-gray-700 rounded border">
          <p className="text-sm">
            Authentication state is perfect for Context because it changes
            infrequently and needs to be accessible throughout the app.
          </p>
        </div>
      </div>

      {/* Context Best Practices */}
      <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-3">Context Best Practices</h3>
        <ul className="space-y-2 text-sm">
          <li>✅ Use for global state that changes infrequently</li>
          <li>✅ Perfect for themes, authentication, user preferences</li>
          <li>✅ Avoid for frequently updating state (causes re-renders)</li>
          <li>✅ Split contexts by concern to minimize re-renders</li>
          <li>✅ Always provide custom hooks for consuming context</li>
        </ul>
      </div>
    </div>
  );
}