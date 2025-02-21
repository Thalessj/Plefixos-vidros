import { Facebook, Instagram, Mail, MapPin, Phone, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#0077B6] to-[#00507A] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Vidraçaria Plefixos</h3>
            <p className="text-gray-300 mb-4">
              Especialistas em soluções em vidros temperados.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/plefixosvidros.vidros.56"
                className="hover:text-blue-400 transition-colors"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://www.instagram.com/plefixos_vidros_/"
                className="hover:text-pink-400 transition-colors"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#Home"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#Cards"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Diferenciais
                </a>
              </li>
              <li>
                <a
                  href="#Works"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="#Location"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Localização
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Phone size={20} />
                <span className="text-gray-300">(11) 99999-9999</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} />
                <span className="text-gray-300">contato@vidracaria.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin size={20} />
                <span className="text-gray-300">
                  Rua Carmo Ciapina, Areiópolis, SP
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Clock size={20} />
                <span className="text-gray-300">
                  Seg - Sex: 8h às 18h
                  <br />
                  Sáb: 8h às 12h
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>
              © {new Date().getFullYear()}, Plefixo Vidraçaria Todos os direitos
              reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
