import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../Sidebar/Sidebar';

const MOBILE_BREAKPOINT = 768;

function getInitialState() {
  if (typeof window === 'undefined') return { sidebarOpen: true, isMobile: false };
  const mobile = window.innerWidth < MOBILE_BREAKPOINT;
  return { sidebarOpen: !mobile, isMobile: mobile };
}

export function Layout() {
  const [state, setState] = useState(getInitialState);
  const { sidebarOpen, isMobile } = state;

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < MOBILE_BREAKPOINT;
      setState((prev) => ({
        isMobile: mobile,
        sidebarOpen: mobile ? false : prev.sidebarOpen,
      }));
    };

    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const setSidebarOpen = (open) => setState((s) => ({ ...s, sidebarOpen: open }));

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        isMobile={isMobile}
      />

      <main className="flex-1 overflow-auto p-4 md:p-6 md:px-8 main-content relative">
        {/* Menu button when sidebar is closed */}
        {!sidebarOpen && (
          <button
            type="button"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open sidebar"
            className="fixed top-4 left-4 z-20 p-2 rounded-lg bg-white border border-gray-200 text-gray-600 hover:text-gray-900 hover:bg-gray-50 shadow-sm transition-colors md:top-6 md:left-6"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        )}

        {/* Spacer so content doesn't sit under the menu button when sidebar is closed */}
        {!sidebarOpen && <div className="h-10 md:h-12 shrink-0" />}

        <Outlet />
      </main>
    </div>
  );
}
