import { useState, useEffect } from "react";
import { Link } from "react-router";
import { Menu, X, Download } from "lucide-react";

interface NavbarProps {
  alwaysSolid?: boolean;
}

export function Navbar({ alwaysSolid = false }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (alwaysSolid) {
      setIsScrolled(true);
      return;
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [alwaysSolid]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: "หน้าแรก", href: "/#home" },
    { name: "บริการของเรา", href: "/#services" },
    { name: "วิธีใช้งาน", href: "/#how-it-works" },
    { name: "ร่วมงานกับเรา", href: "/#partners" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm h-16"
          : "bg-transparent h-20"
      } flex items-center font-['Prompt',_sans-serif]`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center cursor-pointer">
            <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center mr-3 shadow-lg">
              <img
                src="/logo.webp"
                alt="โลโก้ อาตี๋น้อย เดลิเวอรี่"
                className="rounded-full w-10"
              />
            </div>
            <span className="font-bold text-2xl text-gray-900 tracking-tight">
              อาตี๋น้อย <span className="text-red-600">เดลิเวอรี่</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-red-600 font-medium transition"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-full font-medium transition shadow-md hover:shadow-lg flex items-center"
            >
              <Download className="w-4 h-4 mr-2" /> โหลดแอปเลย
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-red-600 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="w-7 h-7" />
              ) : (
                <Menu className="w-7 h-7" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden bg-white shadow-xl absolute w-full left-0 top-full border-t border-gray-100`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-3 rounded-md text-base font-medium text-gray-800 hover:text-red-600 hover:bg-red-50"
            >
              {link.name}
            </a>
          ))}
          <button
            className="w-full mt-4 flex items-center justify-center px-3 py-3 rounded-md text-base font-medium bg-red-600 text-white hover:bg-red-700"
          >
            <Download className="w-4 h-4 mr-2" /> โหลดแอปเลย
          </button>
        </div>
      </div>
    </nav>
  );
}
