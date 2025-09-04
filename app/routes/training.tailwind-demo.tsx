import { useState } from 'react';

export default function TailwindDemo() {
  return (
    <div className="max-w-7xl mx-auto space-y-8 p-6">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Tailwind CSS v4 Training</h1>
      
      {/* Phase 1: Setup and Features */}
      <Phase1Setup />
      
      {/* Phase 2: Building Layouts */}
      <Phase2Layouts />
      
      {/* Phase 3: Practical Exercise */}
      <Phase3Practice />
    </div>
  );
}

function Phase1Setup() {
  const [activeFeature, setActiveFeature] = useState('utilities');

  const features = {
    utilities: {
      title: 'Utility-First Classes',
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Typography</h4>
              <div className="space-y-2 text-sm">
                <p className="text-xs">text-xs (12px)</p>
                <p className="text-sm">text-sm (14px)</p>
                <p className="text-base">text-base (16px)</p>
                <p className="text-lg">text-lg (18px)</p>
                <p className="text-xl">text-xl (20px)</p>
                <p className="font-light">font-light</p>
                <p className="font-bold">font-bold</p>
              </div>
            </div>
            
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Spacing</h4>
              <div className="space-y-2 text-sm">
                <div className="p-1 bg-green-200 dark:bg-green-700">p-1 (4px)</div>
                <div className="p-2 bg-green-200 dark:bg-green-700">p-2 (8px)</div>
                <div className="p-4 bg-green-200 dark:bg-green-700">p-4 (16px)</div>
                <div className="m-2 bg-green-300 dark:bg-green-600">m-2 (8px margin)</div>
              </div>
            </div>
            
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Colors</h4>
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div className="h-8 bg-red-500 rounded flex items-center justify-center text-white">red-500</div>
                <div className="h-8 bg-blue-500 rounded flex items-center justify-center text-white">blue-500</div>
                <div className="h-8 bg-green-500 rounded flex items-center justify-center text-white">green-500</div>
                <div className="h-8 bg-yellow-500 rounded flex items-center justify-center text-black">yellow-500</div>
                <div className="h-8 bg-purple-500 rounded flex items-center justify-center text-white">purple-500</div>
                <div className="h-8 bg-gray-500 rounded flex items-center justify-center text-white">gray-500</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    v4features: {
      title: 'Tailwind v4 New Features',
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg">
              <h4 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-3">@theme Configuration</h4>
              <pre className="text-xs bg-gray-800 text-green-400 p-3 rounded overflow-x-auto">
{`@theme {
  --font-sans: "Inter", ui-sans-serif;
  --color-primary: #3b82f6;
  --spacing-custom: 2.5rem;
}`}
              </pre>
              <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">
                Direct CSS custom properties in your stylesheet
              </p>
            </div>
            
            <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
              <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-3">Improved Performance</h4>
              <ul className="text-sm space-y-1 text-gray-700 dark:text-gray-300">
                <li>• Faster build times</li>
                <li>• Smaller bundle sizes</li>
                <li>• Better tree-shaking</li>
                <li>• Native CSS features</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    responsive: {
      title: 'Responsive Design',
      content: (
        <div className="space-y-4">
          <div className="p-4 bg-teal-50 dark:bg-teal-900/20 rounded-lg">
            <h4 className="font-semibold text-teal-900 dark:text-teal-100 mb-3">Breakpoint System</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 text-sm">
              <div className="p-2 bg-teal-100 dark:bg-teal-800 rounded text-center">
                <div className="font-medium">sm:</div>
                <div className="text-xs">640px+</div>
              </div>
              <div className="p-2 bg-teal-200 dark:bg-teal-700 rounded text-center">
                <div className="font-medium">md:</div>
                <div className="text-xs">768px+</div>
              </div>
              <div className="p-2 bg-teal-300 dark:bg-teal-600 rounded text-center">
                <div className="font-medium">lg:</div>
                <div className="text-xs">1024px+</div>
              </div>
              <div className="p-2 bg-teal-400 dark:bg-teal-500 rounded text-center">
                <div className="font-medium">xl:</div>
                <div className="text-xs">1280px+</div>
              </div>
            </div>
            <div className="mt-4 p-3 bg-white dark:bg-gray-800 rounded border">
              <p className="text-sm font-medium mb-2">Responsive Example:</p>
              <div className="bg-red-200 sm:bg-blue-200 md:bg-green-200 lg:bg-yellow-200 p-4 rounded text-center text-sm font-medium">
                Red → Blue (sm) → Green (md) → Yellow (lg)
              </div>
              <code className="text-xs mt-2 block text-gray-600 dark:text-gray-400">
                bg-red-200 sm:bg-blue-200 md:bg-green-200 lg:bg-yellow-200
              </code>
            </div>
          </div>
        </div>
      )
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Phase 1: Tailwind v4 Setup & Features (2 hours)</h2>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {Object.entries(features).map(([key, feature]) => (
          <button
            key={key}
            onClick={() => setActiveFeature(key)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeFeature === key
                ? 'bg-blue-500 text-white'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            {feature.title}
          </button>
        ))}
      </div>
      
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
          {features[activeFeature as keyof typeof features].title}
        </h3>
        {features[activeFeature as keyof typeof features].content}
      </div>
      
      <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
        <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">Learning Goals:</h4>
        <ul className="text-sm space-y-1 text-blue-800 dark:text-blue-200">
          <li>• Understand utility-first methodology</li>
          <li>• Master typography, spacing, and color systems</li>
          <li>• Learn v4-specific features and improvements</li>
          <li>• Practice responsive design patterns</li>
        </ul>
      </div>
    </section>
  );
}

function Phase2Layouts() {
  const [activeLayout, setActiveLayout] = useState('flexbox');

  const layouts = {
    flexbox: {
      title: 'Flexbox Utilities',
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-3">Flex Direction & Wrap</h4>
              <div className="space-y-3">
                <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded">
                  <code className="text-xs text-gray-600 dark:text-gray-300 block mb-2">flex flex-row</code>
                  <div className="flex flex-row gap-2">
                    <div className="bg-blue-500 text-white p-2 rounded text-xs">1</div>
                    <div className="bg-blue-500 text-white p-2 rounded text-xs">2</div>
                    <div className="bg-blue-500 text-white p-2 rounded text-xs">3</div>
                  </div>
                </div>
                <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded">
                  <code className="text-xs text-gray-600 dark:text-gray-300 block mb-2">flex flex-col</code>
                  <div className="flex flex-col gap-2 w-20">
                    <div className="bg-green-500 text-white p-2 rounded text-xs text-center">1</div>
                    <div className="bg-green-500 text-white p-2 rounded text-xs text-center">2</div>
                    <div className="bg-green-500 text-white p-2 rounded text-xs text-center">3</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-3">Justify & Align</h4>
              <div className="space-y-3">
                <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded">
                  <code className="text-xs text-gray-600 dark:text-gray-300 block mb-2">justify-between items-center</code>
                  <div className="flex justify-between items-center h-12 bg-purple-100 dark:bg-purple-800 rounded px-3">
                    <div className="bg-purple-500 text-white p-1 rounded text-xs">Left</div>
                    <div className="bg-purple-500 text-white p-1 rounded text-xs">Right</div>
                  </div>
                </div>
                <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded">
                  <code className="text-xs text-gray-600 dark:text-gray-300 block mb-2">justify-center items-center</code>
                  <div className="flex justify-center items-center h-12 bg-red-100 dark:bg-red-800 rounded">
                    <div className="bg-red-500 text-white p-1 rounded text-xs">Center</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    grid: {
      title: 'Grid System',
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="font-medium mb-3">Basic Grid Layouts</h4>
            <div className="space-y-4">
              <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded">
                <code className="text-xs text-gray-600 dark:text-gray-300 block mb-3">grid grid-cols-3 gap-4</code>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-indigo-500 text-white p-3 rounded text-center text-sm">1</div>
                  <div className="bg-indigo-500 text-white p-3 rounded text-center text-sm">2</div>
                  <div className="bg-indigo-500 text-white p-3 rounded text-center text-sm">3</div>
                </div>
              </div>
              
              <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded">
                <code className="text-xs text-gray-600 dark:text-gray-300 block mb-3">grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3</code>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                  <div className="bg-teal-500 text-white p-3 rounded text-center text-sm">Responsive</div>
                  <div className="bg-teal-500 text-white p-3 rounded text-center text-sm">Grid</div>
                  <div className="bg-teal-500 text-white p-3 rounded text-center text-sm">Layout</div>
                  <div className="bg-teal-500 text-white p-3 rounded text-center text-sm">System</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    components: {
      title: 'Common Components',
      content: (
        <div className="space-y-6">
          <ComponentExamples />
        </div>
      )
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Phase 2: Building Layouts (2 hours)</h2>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {Object.entries(layouts).map(([key, layout]) => (
          <button
            key={key}
            onClick={() => setActiveLayout(key)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeLayout === key
                ? 'bg-green-500 text-white'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            {layout.title}
          </button>
        ))}
      </div>
      
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
        {layouts[activeLayout as keyof typeof layouts].content}
      </div>
    </section>
  );
}

function ComponentExamples() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Header Component */}
      <div className="space-y-3">
        <h4 className="font-medium">Header Component</h4>
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
          <header className="bg-blue-600 text-white p-4">
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-bold">DESI App</h1>
              <nav className="hidden md:flex space-x-4">
                <a href="#" className="hover:text-blue-200">Events</a>
                <a href="#" className="hover:text-blue-200">Maps</a>
                <a href="#" className="hover:text-blue-200">Training</a>
              </nav>
              <button className="md:hidden">☰</button>
            </div>
          </header>
        </div>
        <code className="text-xs text-gray-600 dark:text-gray-400 block">
          flex justify-between items-center + responsive nav
        </code>
      </div>

      {/* Card Component */}
      <div className="space-y-3">
        <h4 className="font-medium">Card Component</h4>
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 shadow-sm">
          <div className="flex items-start space-x-3">
            <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">
              🌪️
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 dark:text-white">Tornado Warning</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Oklahoma County, OK</p>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-xs bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-2 py-1 rounded">
                  Active
                </span>
                <button className="text-blue-600 dark:text-blue-400 text-sm hover:underline">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
        <code className="text-xs text-gray-600 dark:text-gray-400 block">
          flex items-start space-x-3 + status badges
        </code>
      </div>
    </div>
  );
}

function Phase3Practice() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Phase 3: Practical Exercise (2 hours)</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Exercise: Refactor Events Page</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Your current events page uses basic Tailwind. Let's enhance it with modern layouts and components.
          </p>
          
          <div className="space-y-4">
            <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded border-l-4 border-yellow-400">
              <h4 className="font-medium text-yellow-800 dark:text-yellow-200">Current Issues:</h4>
              <ul className="text-sm text-yellow-700 dark:text-yellow-300 mt-1 space-y-1">
                <li>• Basic layout without proper spacing</li>
                <li>• No responsive design</li>
                <li>• Inconsistent component styling</li>
                <li>• Missing visual hierarchy</li>
              </ul>
            </div>
            
            <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded border-l-4 border-green-400">
              <h4 className="font-medium text-green-800 dark:text-green-200">Improvements to Make:</h4>
              <ul className="text-sm text-green-700 dark:text-green-300 mt-1 space-y-1">
                <li>• Grid layout for event cards</li>
                <li>• Responsive breakpoints</li>
                <li>• Better typography hierarchy</li>
                <li>• Status indicators and badges</li>
                <li>• Hover states and transitions</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Enhanced Event Card Preview</h3>
          <EnhancedEventCard />
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
        <h4 className="font-medium text-purple-900 dark:text-purple-100 mb-2">🎯 Exercise Tasks:</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <h5 className="font-medium mb-2">Layout Tasks:</h5>
            <ul className="space-y-1 text-purple-800 dark:text-purple-200">
              <li>□ Convert to responsive grid layout</li>
              <li>□ Add proper spacing and padding</li>
              <li>□ Implement card-based design</li>
              <li>□ Add loading and empty states</li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium mb-2">Styling Tasks:</h5>
            <ul className="space-y-1 text-purple-800 dark:text-purple-200">
              <li>□ Enhance typography hierarchy</li>
              <li>□ Add status badges and indicators</li>
              <li>□ Implement hover and focus states</li>
              <li>□ Add dark mode support</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function EnhancedEventCard() {
  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white text-lg">
              🌪️
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">Tornado</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Magnitude: 4.2</p>
            </div>
          </div>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
            Active
          </span>
        </div>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
            <span className="w-4 h-4 mr-2">📍</span>
            Oklahoma City, Oklahoma County, OK
          </div>
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
            <span className="w-4 h-4 mr-2">📅</span>
            March 15, 2024
          </div>
        </div>
        
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800">
          View Details
        </button>
      </div>
    </div>
  );
}