import React, { useState, useEffect } from "react";
import { PageId } from "../types";
import { Menu, X, ArrowUpRight } from "lucide-react";
import logoImage from "../assets/branding/advay-engineers-transparent.png";

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenQuote: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate, onOpenQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems: { id: PageId; label: string }[] = [
    { id: "home", label: "Home" },
    { id: "capabilities", label: "Capabilities" },
    { id: "applications", label: "Applications" },
    { id: "infrastructure", label: "Infrastructure" },
    { id: "quality", label: "Quality" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavClick = (id: PageId) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-[#FAF8F5]/95 backdrop-blur-md border-[#E5DFD3] shadow-md"
          : "bg-[#FAF8F5] border-[#E8E1D3]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Wordmark Branding */}
          <button
            onClick={() => handleNavClick("home")}
            className="flex items-center gap-3 text-left focus:outline-none group cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
          >
            <img
              src={logoImage}
              alt="Advay Engineers logo"
              className="w-14 h-14 shrink-0 object-contain"
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-[#0B2545] group-hover:text-[#8B1E1E] transition-colors whitespace-nowrap">
                ADVAY ENGINEERS
              </span>
            </div>
          </button>

          {/* Navigation Links with animated hover indicator */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-sm">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative py-1 text-sm tracking-wide transition-all duration-300 cursor-pointer whitespace-nowrap font-bold ${
                    isActive
                      ? "text-[#8B1E1E] scale-105"
                      : "text-[#0B2545] hover:text-[#8B1E1E] hover:-translate-y-0.5"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#8B1E1E] rounded-full animate-fade-in" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Visible Header Action CTA */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenQuote}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-[#FAF8F5] bg-[#0B2545] hover:bg-[#8B1E1E] rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-md whitespace-nowrap cursor-pointer"
            >
              <span>REQUEST A QUOTE</span>
              <ArrowUpRight className="w-4 h-4 text-[#FAF8F5]" />
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#0B2545] hover:bg-[#F3EFE6] rounded-lg transition-colors focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF8F5] border-b border-[#E8E1D3] px-4 pt-3 pb-6 space-y-1 shadow-lg animate-fade-in-down">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center justify-between px-3 py-2.5 text-base font-bold rounded-lg text-left transition-colors cursor-pointer ${
                  isActive ? "bg-[#F3EFE6] text-[#8B1E1E]" : "text-[#0B2545] hover:bg-[#F3EFE6]"
                }`}
              >
                <span>{item.label}</span>
                {isActive && <div className="w-1.5 h-1.5 rounded-full bg-[#8B1E1E]" />}
              </button>
            );
          })}
          <div className="pt-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-bold text-[#FAF8F5] bg-[#0B2545] hover:bg-[#8B1E1E] rounded-lg transition-colors cursor-pointer shadow-sm"
            >
              <span>REQUEST A QUOTE</span>
              <ArrowUpRight className="w-4 h-4 text-[#FAF8F5]" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
