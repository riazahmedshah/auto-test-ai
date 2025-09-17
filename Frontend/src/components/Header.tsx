import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-black text-white ">
      <div className='max-w-5xl mx-auto flex justify-between items-center py-7 px-4 border-b '>
        <Link to="/">
        <h1 className="text-2xl font-bold text-gray-200 hover:text-white transition-colors">
          TestGenius AI
        </h1>
      </Link>
      <a 
        href="https://github.com/riazahmedshah/auto-test-ai" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <FaGithub 
        size={40}
          className="text-3xl text-gray-400 hover:text-white transition-colors" />
      </a>
      </div>
    </header>
  );
};

export default Header;