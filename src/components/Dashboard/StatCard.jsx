
export function StatCard({ label, value, change, changeType = 'neutral', icon, className = '' }) {
  const changeStyles = {
    up: 'text-emerald-600 bg-emerald-50',
    down: 'text-rose-600 bg-rose-50',
    neutral: 'text-gray-600 bg-gray-100',
  };

  return (
    <div
      className={`
        rounded-xl border border-gray-200 bg-white p-5 shadow-sm
        transition-shadow hover:shadow-md
        ${className}
      `}
    >
      <div className="flex items-start justify-between">
        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium text-gray-500 truncate">{label}</p>
          <p className="mt-1 text-2xl font-semibold text-gray-900 tabular-nums">{value}</p>
          {change != null && (
            <span
              className={`
                mt-2 inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium
                ${changeStyles[changeType] ?? changeStyles.neutral}
              `}
            >
              {change}
            </span>
          )}
        </div>
        {icon && (
          <div className="ml-3 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
}
