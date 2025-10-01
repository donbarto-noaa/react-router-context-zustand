import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useTheme } from '~/contexts/ThemeContext';
import { useAuth } from '~/contexts/AuthContext';
import { ToggleButton, Button, TextField, useToast, Link } from '@nwsconnect/atmosphere';

const urlRoot = window.location.origin;

export default function ContextDemo() {
  const { theme, toggleTheme } = useTheme();
  const { user, isAuthenticated, login, logout } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { addToast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(email, password);
  };

  const navigate = useNavigate();


  // const showUserInfo = () => {
  //   console.log(user);
  //   if (isAuthenticated) {
  //     return (
  //       <div className="mt-4">
  //         <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
  //           Email: {user?.email}
  //         </p>
  //         <Button onPress={() => addToast({
  //                 variant: 'info',
  //                 title: 'Test Toast',
  //                 message: `welcom ${user?.name}`
  //               })} >Test</Button>
          
  //       </div>
  //     );
  //   }
  // };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <h1 className="text-2xl font-bold">React Context Demo</h1>
      
      {/* Theme Context Example */}
      <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Theme Management</h2>
        <p className="mb-4">Current theme: <span className="font-mono">{theme}</span></p>
        <ToggleButton
          onChange={toggleTheme}
          isEmphasized
        >
          Toggle Theme
        </ToggleButton>
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
              <TextField
                name='email' 
                label='E-Mail Address'
                placeholder='Enter email'
                type='email'
                inputMode='email'
                value={email}
                size='lg'
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <TextField
                name='password' 
                label='Password'
                placeholder='Enter password'
                type='password'
                value={password}
                size='lg'
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button
              type='submit'
            >
              Login
            </Button>
          </form>
        ) : (
          <div>
            <p className="mb-4">Welcome, {user?.name}!</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Email: {user?.email}
            </p>
            <div className="flex flex-row p-4 justify-between">
              <Button
                type='button'
                onPress={logout}
                className=""
              >
                Logout
              </Button>
              <Button onPress={() => navigate('/training/user-info')}>View info</Button>
              <Button onPress={() => addToast({
                  variant: 'info',
                  title: 'Test Toast',
                  message: `welcom ${user?.name}`
                })} >Test</Button>
          </div>
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