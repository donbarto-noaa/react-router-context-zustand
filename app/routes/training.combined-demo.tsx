import { useTheme } from '~/contexts/ThemeContext';
import { useAuth } from '~/contexts/AuthContext';
import { useCounterStore } from '~/stores/counterStore';
import { useUserStore } from '~/stores/userStore';

export default function CombinedDemo() {
  const { theme, toggleTheme } = useTheme();
  const { isAuthenticated, user } = useAuth();
  const { count, increment } = useCounterStore();
  const { profile } = useUserStore();

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <h1 className="text-2xl font-bold">Combined Context + Zustand Demo</h1>
      
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">State Management Strategy</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <ContextSection theme={theme} toggleTheme={toggleTheme} isAuthenticated={isAuthenticated} user={user} />
          <ZustandSection count={count} increment={increment} profile={profile} />
        </div>
      </div>
      
      <IntegrationExample />
      <DecisionMatrix />
    </div>
  );
}

function ContextSection({ theme, toggleTheme, isAuthenticated, user }: any) {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
      <h3 className="font-semibold mb-3 text-blue-600 dark:text-blue-400">Context API Usage</h3>
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-sm">Theme:</span>
          <button
            onClick={toggleTheme}
            className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm"
          >
            {theme}
          </button>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm">Auth Status:</span>
          <span className={`px-2 py-1 rounded text-xs ${
            isAuthenticated 
              ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
              : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
          }`}>
            {isAuthenticated ? 'Logged In' : 'Logged Out'}
          </span>
        </div>
        {user && (
          <div className="text-xs text-gray-600 dark:text-gray-400">
            User: {user.name}
          </div>
        )}
      </div>
      <div className="mt-3 p-2 bg-blue-50 dark:bg-blue-900/30 rounded text-xs">
        <strong>Why Context:</strong> Theme and auth change infrequently and need global access
      </div>
    </div>
  );
}

function ZustandSection({ count, increment, profile }: any) {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
      <h3 className="font-semibold mb-3 text-purple-600 dark:text-purple-400">Zustand Usage</h3>
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-sm">Counter:</span>
          <div className="flex items-center gap-2">
            <span className="font-mono">{count}</span>
            <button
              onClick={increment}
              className="bg-purple-500 hover:bg-purple-600 text-white px-2 py-1 rounded text-xs"
            >
              +1
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm">Profile:</span>
          <span className={`px-2 py-1 rounded text-xs ${
            profile 
              ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
              : 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
          }`}>
            {profile ? 'Created' : 'None'}
          </span>
        </div>
        {profile && (
          <div className="text-xs text-gray-600 dark:text-gray-400">
            Name: {profile.name}
          </div>
        )}
      </div>
      <div className="mt-3 p-2 bg-purple-50 dark:bg-purple-900/30 rounded text-xs">
        <strong>Why Zustand:</strong> Counter updates frequently, profile has complex nested state
      </div>
    </div>
  );
}

function IntegrationExample() {
  const { theme } = useTheme();
  const { isAuthenticated } = useAuth();
  const { count } = useCounterStore();

  return (
    <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Integration Example</h3>
      <div className="bg-white dark:bg-gray-700 p-4 rounded border-2 border-dashed border-gray-300 dark:border-gray-600">
        <h4 className="font-medium mb-2">Dashboard Widget</h4>
        <div className="text-sm space-y-1">
          <p>Current theme: <span className="font-mono bg-gray-100 dark:bg-gray-600 px-1 rounded">{theme}</span></p>
          <p>Authentication: <span className="font-mono bg-gray-100 dark:bg-gray-600 px-1 rounded">{isAuthenticated ? 'Yes' : 'No'}</span></p>
          <p>Counter value: <span className="font-mono bg-gray-100 dark:bg-gray-600 px-1 rounded">{count}</span></p>
        </div>
        <div className="mt-3 p-2 bg-yellow-50 dark:bg-yellow-900/20 rounded text-xs">
          This component uses both Context (theme, auth) and Zustand (counter) seamlessly
        </div>
      </div>
    </div>
  );
}

function DecisionMatrix() {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border">
      <h3 className="text-lg font-semibold mb-4">When to Use What?</h3>
      
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b dark:border-gray-700">
              <th className="text-left p-2">Scenario</th>
              <th className="text-left p-2">Context API</th>
              <th className="text-left p-2">Zustand</th>
              <th className="text-left p-2">Recommendation</th>
            </tr>
          </thead>
          <tbody className="space-y-1">
            <tr className="border-b dark:border-gray-700">
              <td className="p-2 font-medium">Theme Management</td>
              <td className="p-2 text-green-600">✅ Perfect</td>
              <td className="p-2 text-yellow-600">⚠️ Overkill</td>
              <td className="p-2">Context - changes infrequently</td>
            </tr>
            <tr className="border-b dark:border-gray-700">
              <td className="p-2 font-medium">User Authentication</td>
              <td className="p-2 text-green-600">✅ Perfect</td>
              <td className="p-2 text-yellow-600">⚠️ Possible</td>
              <td className="p-2">Context - global, infrequent changes</td>
            </tr>
            <tr className="border-b dark:border-gray-700">
              <td className="p-2 font-medium">Form State</td>
              <td className="p-2 text-red-600">❌ Poor</td>
              <td className="p-2 text-green-600">✅ Great</td>
              <td className="p-2">Zustand - frequent updates</td>
            </tr>
            <tr className="border-b dark:border-gray-700">
              <td className="p-2 font-medium">Shopping Cart</td>
              <td className="p-2 text-red-600">❌ Poor</td>
              <td className="p-2 text-green-600">✅ Perfect</td>
              <td className="p-2">Zustand - complex state, frequent updates</td>
            </tr>
            <tr>
              <td className="p-2 font-medium">Map Coordinates</td>
              <td className="p-2 text-red-600">❌ Poor</td>
              <td className="p-2 text-green-600">✅ Perfect</td>
              <td className="p-2">Zustand - very frequent updates</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div className="mt-4 grid md:grid-cols-2 gap-4 text-xs">
        <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
          <h4 className="font-medium mb-1">Context API Best For:</h4>
          <ul className="space-y-1">
            <li>• Global configuration (theme, locale)</li>
            <li>• Authentication state</li>
            <li>• User preferences</li>
            <li>• App-wide settings</li>
          </ul>
        </div>
        <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded">
          <h4 className="font-medium mb-1">Zustand Best For:</h4>
          <ul className="space-y-1">
            <li>• Frequently changing state</li>
            <li>• Complex state logic</li>
            <li>• Performance-critical updates</li>
            <li>• Cross-component data sharing</li>
          </ul>
        </div>
      </div>
    </div>
  );
}