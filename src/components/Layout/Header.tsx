import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { Link, useLocation } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  const navLinks = [
    { href: "/", label: t("nav.home") },
    { href: "/services", label: t("nav.services") },
    { href: "/visas", label: t("nav.visas") },
    { href: "/investment", label: t("nav.investment") },
    { href: "/education", label: t("nav.education") },
    { href: "/contact", label: t("nav.contact") },
  ];

  const languages = [
    {
      code: "en",
      name: "English",
      flag: "https://twemoji.maxcdn.com/v/latest/72x72/1f1fa-1f1f8.png",
    }, // 🇺🇸
    {
      code: "az",
      name: "Azərbaycan",
      flag: "https://twemoji.maxcdn.com/v/latest/72x72/1f1e6-1f1ff.png",
    }, // 🇦🇿
    {
      code: "ru",
      name: "Русский",
      flag: "https://twemoji.maxcdn.com/v/latest/72x72/1f1f7-1f1fa.png",
    }, // 🇷🇺
    {
      code: "pt",
      name: "Português",
      flag: "https://twemoji.maxcdn.com/v/latest/72x72/1f1f5-1f1f9.png",
    }, // 🇵🇹
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 flex items-center justify-center relative">
              <img
                src="/communiq-logo.png" // Şəkil faylınızın yolu
                alt="Flag"
                className="w-6 h-6 object-cover"
              />
            </div>
            <span className="text-xl font-bold text-primary">CommuniQ</span>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-foreground hover:text-primary transition-colors duration-200 font-medium ${
                    isActive ? "text-primary border-b-2 border-primary" : ""
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Language Selector & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="gap-2">
                  <Globe className="w-4 h-4" />
                  <span className="hidden sm:inline">
                    {languages.find((lang) => lang.code === language)?.name}
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                style={{ backgroundColor: "white" }}
                align="end"
              >
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code as any)}
                    className="gap-2"
                  >
                    <img
                      src={lang.flag}
                      alt={lang.code}
                      width={20}
                      height={20}
                    />
                    <span>{lang.name}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`px-2 py-2 text-foreground hover:text-primary hover:bg-secondary rounded-md transition-colors duration-200 ${
                      isActive ? "text-primary bg-secondary" : ""
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
