export const Footer = () => {
  return (
    <footer className="py-12 px-8 bg-dark-glass">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="#"
            className="text-gray-400 hover:text-neon transition-colors"
          >
            {/* GitHub Icon */}
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-cyber transition-colors"
          >
            {/* LinkedIn Icon */}
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-matrix transition-colors"
          >
            {/* Twitter Icon */}
          </a>
        </div>
        <p className="text-gray-500 text-sm">
          © 2025 Luis Castillo. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
