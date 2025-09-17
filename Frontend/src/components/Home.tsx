import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="bg-black text-white h-[calc(100vh-6.1rem)] w-full flex flex-col p-8">
      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center text-center">
        <h2 className="text-5xl font-extrabold mb-4 text-gray-100">
          Generate Unit Tests in Seconds
        </h2>
        <p className="text-xl mb-8 max-w-2xl text-gray-400">
          Paste your JavaScript code and let the power of AI write comprehensive unit tests for you. It's fast, accurate, and saves you hours of work.
        </p>
        <Link 
          to="/test-generator" 
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors"
        >
          Get Started
        </Link>
      </main>
    </div>
  );
};

export default HomePage;