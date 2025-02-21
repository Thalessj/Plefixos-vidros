"use client";
import { useState } from "react";
import { Menu, X, Mail, Home, Star, Wrench, MapPin } from "lucide-react";

export default function Header() {
  const [mobileMenu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!mobileMenu);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0077B6] shadow-md">
      <div className="flex justify-between items-center max-w-7xl mx-auto p-4">
        <h1 className="text-2xl font-bold text-white">Plexfixo Vidros</h1>

        <button
          onClick={toggleMenu}
          className="text-white lg:hidden"
          aria-label="Toggle menu"
        >
          {mobileMenu ? (
            <X size={24} className="transition-transform" />
          ) : (
            <Menu size={24} className="transition-transform" />
          )}
        </button>

        <nav className="hidden lg:block">
          <ul className="flex space-x-6">
            <li>
              <a
                href="#Home"
                className="text-white hover:underline flex items-center gap-2"
              >
                <Home size={18} />
                Home
              </a>
            </li>
            <li>
              <a
                href="#Cards"
                className="text-white hover:underline flex items-center gap-2"
              >
                <Star size={18} />
                Diferenciais
              </a>
            </li>
            <li>
              <a
                href="#works"
                className="text-white hover:underline flex items-center gap-2"
              >
                <Wrench size={18} />
                Serviços
              </a>
            </li>
            <li>
              <a
                href="#Location"
                className="text-white hover:underline flex items-center gap-2"
              >
                <MapPin size={18} />
                Localização
              </a>
            </li>
          </ul>
        </nav>

        <div
          className={`
          lg:hidden fixed inset-0 bg-[#0077B6] transition-transform duration-300 ease-in-out
          ${mobileMenu ? "translate-x-0" : "translate-x-full"}
        `}
        >
          <div className="flex flex-col h-full p-4">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-2xl font-bold text-white">Plexfixo Vidros</h1>
              <button onClick={toggleMenu} className="text-white">
                <X size={24} />
              </button>
            </div>
            <nav>
              <ul className="flex flex-col space-y-6">
                <li>
                  <a
                    href="#Home"
                    className="text-white text-xl flex items-center gap-3 hover:bg-[#0096E3] p-3 rounded-lg transition-colors"
                    onClick={toggleMenu}
                  >
                    <Home size={24} />
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#Cards"
                    className="text-white text-xl flex items-center gap-3 hover:bg-[#0096E3] p-3 rounded-lg transition-colors"
                    onClick={toggleMenu}
                  >
                    <Star size={24} />
                    Diferenciais
                  </a>
                </li>
                <li>
                  <a
                    href="#Works"
                    className="text-white text-xl flex items-center gap-3 hover:bg-[#0096E3] p-3 rounded-lg transition-colors"
                    onClick={toggleMenu}
                  >
                    <Wrench size={24} />
                    Serviços
                  </a>
                </li>
                <li>
                  <a
                    href="#Location"
                    className="text-white text-xl flex items-center gap-3 hover:bg-[#0096E3] p-3 rounded-lg transition-colors"
                    onClick={toggleMenu}
                  >
                    <MapPin size={24} />
                    Localização
                  </a>
                </li>
              </ul>
            </nav>
            <div className="mt-auto">
              <a
                href="mailto:contato@plefixo.com"
                className="text-white flex items-center gap-2 hover:bg-[#0096E3] p-3 rounded-lg transition-colors"
              >
                <Mail size={24} />
                contato@plefixo.com
              </a>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex items-center text-white gap-2">
          <Mail size={18} />
          <p>contato@plefixo.com</p>
        </div>
      </div>
    </header>
  );
}
