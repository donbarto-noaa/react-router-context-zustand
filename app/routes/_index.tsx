import { Link, FullPageCalendar, Card, CardHeader, CardBody, CardFooter } from '@nwsconnect/atmosphere';

// Get URL root from browser path
const urlRoot = window.location.origin;

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            React Router 7 + State Management
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Training Environment for Context API and Zustand
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 pt-8">
          <Card >
            <CardHeader>
              🧠 State Management Training
            </CardHeader>
            <CardBody>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
              Complete 6-hour training covering Context API and Zustand with hands-on examples.
            </p>
            </CardBody>
            <CardFooter>
              
            <Link
              url={`${urlRoot}/training`}
              isExternal={false}
              target='_self'
            >
              Start Training →
            </Link>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              📚 Training Resources
            </CardHeader>
           <CardBody>
             <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Interactive examples and demos</li>
                <li>• Performance optimization techniques</li>
                <li>• Best practices and patterns</li>
                <li>• Hands-on exercises</li>
              </ul>
           </CardBody>
          </Card>
          <Card>
            <CardHeader>
              🧠 Events Pages Mock Ups and Sandbox
            </CardHeader>
            <CardBody>
              A place to try development stategies for this stack
            </CardBody>
            <CardFooter>
              <Link
                url={`${urlRoot}/events`}
                isExternal={false}
                target='_self'
              >
                Events Pages →
              </Link>
            </CardFooter>
          </Card>
        </div>
        
        <div className="pt-8 mt-8">
          <FullPageCalendar 
            events={[]}
            height="600px"
            initialView="dayGridMonth"
          />
        </div>

        
        <div className="mt-12 text-center">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold mb-3">Training Structure</h3>
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                  <span className="font-bold text-blue-600 dark:text-blue-400">2h</span>
                </div>
                <p className="font-medium">Context Review</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 dark:bg-purple-900 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                  <span className="font-bold text-purple-600 dark:text-purple-400">2h</span>
                </div>
                <p className="font-medium">Zustand Deep Dive</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 dark:bg-green-900 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                  <span className="font-bold text-green-600 dark:text-green-400">2h</span>
                </div>
                <p className="font-medium">Practical Exercise</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}