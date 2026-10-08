import React, { useState, useEffect } from "react";
import { PageId } from "../types";
import { Outlet, useNavigate, useRouterState } from "@tanstack/react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { QuoteModal } from "../components/QuoteModal";
import { WhatsAppFloatingButton } from "../components/WhatsAppIcon";

export const WebsiteLayout: React.FC = () => {
  const navigate = useNavigate();
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const rawPage = pathname === "/" ? "home" : (pathname.slice(1) as PageId);
  const currentPage: PageId = rawPage === ("industries" as PageId) ? "applications" : rawPage;
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string | undefined>(undefined);

  // Global scroll reveal observer for boxes and headings
  useEffect(() => {
    const revealAll = () => {
      const elements = document.querySelectorAll(".box-scroll-reveal, .heading-scroll-reveal");
      elements.forEach((el) => {
        el.classList.add("is-revealed");
      });
    };

    // Immediately mark current elements as visible
    revealAll();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
          }
        });
      },
      {
        threshold: 0.01,
      },
    );

    const observeElements = () => {
      const elements = document.querySelectorAll(".box-scroll-reveal, .heading-scroll-reveal");
      elements.forEach((el) => {
        el.classList.add("is-revealed");
        observer.observe(el);
      });
    };

    // Run immediately and after paint
    observeElements();
    const timer = setTimeout(revealAll, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [currentPage]);

  const handleOpenQuote = (service?: string) => {
    setPreselectedService(service);
    setIsQuoteOpen(true);
  };

  useEffect(() => {
    const open = () => setIsQuoteOpen(true);
    window.addEventListener("advay:open-quote", open);
    return () => window.removeEventListener("advay:open-quote", open);
  }, []);

  const handleNavigate = (page: PageId) => {
    navigate({ to: page === "home" ? "/" : `/${page}` });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      suppressHydrationWarning
      className="min-h-screen bg-[#FAF8F5] text-[#0B2545] flex flex-col font-sans selection:bg-[#8B1E1E] selection:text-white"
    >
      {/* Dynamic SEO Meta Tags & Schema.org JSON-LD */}

      {/* Main Navigation Header */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenQuote={() => handleOpenQuote()}
      />

      {/* Active View / Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} onOpenQuote={() => handleOpenQuote()} />

      {/* Global RFQ / Quote Modal */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        preselectedService={preselectedService}
      />

      {/* Floating Official WhatsApp Direct Action */}
      <WhatsAppFloatingButton />
    </div>
  );
};

export default WebsiteLayout;
