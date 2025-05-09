
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-fear-black flex flex-col items-center justify-center px-4 py-12">
      <div className="glass-card rounded-xl p-8 max-w-md w-full text-center">
        <h1 className="minecraft-text text-2xl mb-2 text-fear-red">404</h1>
        <h2 className="text-xl md:text-2xl font-bold text-white mb-6">Page Not Found</h2>
        
        <p className="text-gray-300 mb-8">
          Uh oh! Looks like you've ventured too far from spawn. This page seems to be missing from our server.
        </p>
        
        <Link 
          to="/"
          className="px-6 py-2.5 rounded-full bg-fear-red hover:bg-fear-red/80 text-white font-medium transition-colors inline-block"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
