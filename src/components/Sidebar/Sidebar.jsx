import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const navItems = [
  { path: '/dashboard', label: 'Dashboard', end: true },
  {
    label: 'Jobs',
    children: [
      { path: '/dashboard/view-all-jobs', label: 'View All Jobs' },
      { path: '/dashboard/jobs/create', label: 'Create Job' },
    ],
  },
  { path: '/dashboard/settings', label: 'Settings', end: false },
];

export function Sidebar({ isOpen, onClose, isMobile }) {
  const location = useLocation();
  const [expandedFolders, setExpandedFolders] = useState([]);

  useEffect(() => {
    const jobPaths = ['/dashboard/view-all-jobs', '/dashboard/jobs'];
    if (jobPaths.some((p) => location.pathname.startsWith(p))) {
      setExpandedFolders((prev) => (prev.includes('Jobs') ? prev : [...prev, 'Jobs']));
    }
  }, [location.pathname]);

  const toggleFolder = (label) => {
    setExpandedFolders((prev) =>
      prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label]
    );
  };
  const baseClasses =
    'flex flex-col shrink-0 h-screen bg-white border-r border-gray-200 shadow-sm transition-transform duration-300 ease-in-out';
  const mobileClasses = isOpen
    ? 'fixed inset-y-0 left-0 z-40 w-60 transform translate-x-0'
    : 'fixed inset-y-0 left-0 z-40 w-60 transform -translate-x-full';
  const desktopClasses = isMobile
    ? ''
    : isOpen
      ? 'relative w-60 min-w-60 h-screen translate-x-0'
      : 'relative w-0 min-w-0 h-screen overflow-hidden -translate-x-full';

  return (
    <>
      {/* Mobile overlay */}
      {isMobile && isOpen && (
        <button
          type="button"
          aria-label="Close sidebar"
          onClick={onClose}
          className="fixed inset-0 z-30 bg-black/50 transition-opacity md:hidden"
        />
      )}

      <aside
        className={`${baseClasses} ${isMobile ? mobileClasses : desktopClasses}`}
        aria-hidden={!isOpen}
      >
        <div className="flex items-center justify-between px-5 py-6 border-b border-gray-200 min-h-18">
          <span className="text-lg font-bold tracking-tight text-gray-900 truncate">
            Anchor Talents
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close sidebar"
            className="p-2 rounded-lg text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors -mr-1"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <nav className="flex-1 py-4 px-3 overflow-y-auto">
          <ul className="list-none m-0 p-0">
            {navItems.map((item) => {
              if (item.children) {
                const isExpanded = expandedFolders.includes(item.label);
                return (
                  <li key={item.label} className="mb-1">
                    <button
                      type="button"
                      onClick={() => toggleFolder(item.label)}
                      className="flex items-center justify-between w-full py-3 px-4 rounded-lg text-[15px] font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-150 text-left"
                    >
                      {item.label}
                      <svg
                        className={`w-5 h-5 shrink-0 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {isExpanded && (
                      <ul className="list-none m-0 pl-4 mt-1 border-l-2 border-gray-200">
                        {item.children.map(({ path, label }) => (
                          <li key={path} className="mb-1">
                            <NavLink
                              to={path}
                              onClick={isMobile ? onClose : undefined}
                              className={({ isActive }) =>
                                `block py-2.5 px-3 rounded-lg text-[14px] font-medium no-underline transition-colors duration-150 ${
                                  isActive
                                    ? 'text-indigo-600 bg-indigo-50 border-l-[3px] border-indigo-600 pl-[9px] hover:bg-indigo-100'
                                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                                }`
                              }
                            >
                              {label}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              }
              return (
                <li key={item.path} className="mb-1">
                  <NavLink
                    to={item.path}
                    end={item.end}
                    onClick={isMobile ? onClose : undefined}
                    className={({ isActive }) =>
                      `block py-3 px-4 rounded-lg text-[15px] font-medium no-underline transition-colors duration-150 ${
                        isActive
                          ? 'text-indigo-600 bg-indigo-50 border-l-[3px] border-indigo-600 pl-[13px] hover:bg-indigo-100'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    </>
  );
}
