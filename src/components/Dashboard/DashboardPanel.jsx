import { StatCard } from './StatCard';

export function DashboardPanel({
  title = 'Dashboard',
  subtitle,
  stats = [],
  recentTitle = 'Recent Activity',
  recentItems = [],
}) {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
        {subtitle && <p className="mt-1 text-gray-600">{subtitle}</p>}
      </div>

      {/* Stat cards grid */}
      {stats.length > 0 && (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <StatCard
              key={stat.label}
              label={stat.label}
              value={stat.value}
              change={stat.change}
              changeType={stat.changeType}
              icon={stat.icon}
            />
          ))}
        </div>
      )}



      {/* Recent activity / secondary section */}
      {recentItems.length > 0 && (
        <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
          <div className="border-b border-gray-200 px-5 py-4">
            <h2 className="text-base font-semibold text-gray-900">{recentTitle}</h2>
          </div>
          <ul className="divide-y divide-gray-200">
            {recentItems.map((item) => (
              <li key={item.id} className="px-5 py-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between gap-4">
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-gray-900 truncate">{item.title}</p>
                    {item.subtitle && (
                      <p className="text-sm text-gray-500 truncate">{item.subtitle}</p>
                    )}
                  </div>
                  {item.time && (
                    <span className="shrink-0 text-sm text-gray-400">{item.time}</span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
