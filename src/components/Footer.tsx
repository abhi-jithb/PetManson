import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiBuymeacoffee } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full bg-gray-900 text-gray-400 py-4 text-center border-t border-gray-700">
      <p className="text-sm">© {new Date().getFullYear()} Abhijith B     | Built with ❤️</p>

      {/* Social Links */}
      <div className="mt-3 flex justify-center gap-6">
        {/* GitHub */}
        <a
          href="https://github.com/abhi-jithb"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 transition-all duration-300 hover:text-white hover:shadow-[0px_0px_12px_#ffffff]"
        >
          <FaGithub className="text-2xl transition-transform duration-300 hover:scale-125" />
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/abhi-jithb"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 transition-all duration-300 hover:text-blue-400 hover:shadow-[0px_0px_12px_#0a66c2]"
        >
          <FaLinkedin className="text-2xl transition-transform duration-300 hover:scale-125" />
        </a>

        {/* Buy Me a Coffee */}
        <a
          href="https://www.buymeacoffee.com/abhijithb"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 transition-all duration-300 hover:text-yellow-400 hover:shadow-[0px_0px_12px_#ffdd00]"
        >
          <SiBuymeacoffee className="text-2xl transition-transform duration-300 hover:scale-125" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
