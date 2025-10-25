import React from 'react';

const Navbar: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // Height of the navbar
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-background shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleScroll(e, 'home')}
          className="text-2xl md:text-3xl font-heading font-bold text-primary hover:opacity-80 transition-opacity"
        >
          Smiles in Stain
        </a>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#home"
            onClick={(e) => handleScroll(e, 'home')}
            className="text-secondary hover:text-primary transition-colors font-medium"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={(e) => handleScroll(e, 'about')}
            className="text-secondary hover:text-primary transition-colors font-medium"
          >
            Who We Are
          </a>
          <a
            href="#mission"
            onClick={(e) => handleScroll(e, 'mission')}
            className="text-secondary hover:text-primary transition-colors font-medium"
          >
            Our Mission
          </a>
          <a
            href="#get-involved"
            onClick={(e) => handleScroll(e, 'get-involved')}
            className="text-secondary hover:text-primary transition-colors font-medium"
          >
            Get Involved
          </a>
          <a
            href="#contact"
            onClick={(e) => handleScroll(e, 'contact')}
            className="text-secondary hover:text-primary transition-colors font-medium"
          >
            Contact
          </a>
          
          {/* Donate Button */}
          <a
            href="#get-involved"
            onClick={(e) => handleScroll(e, 'get-involved')}
            className="px-6 py-2 bg-primary text-white rounded-lg font-bold shadow-lg hover:bg-opacity-90 transition-all"
          >
            Donate
          </a>
        </div>

        {/* Mobile Menu Button - Simple version for now */}
        <button className="md:hidden text-primary">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

