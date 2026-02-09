import { DashboardPanel } from '../components/Dashboard/DashboardPanel';

const UsersIcon = () => (
  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);
const TalentsIcon = () => (
  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
  </svg>
);
const BookingsIcon = () => (
  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);
const RevenueIcon = () => (
  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const defaultStats = [
  { label: 'Total Users', value: '2,847', change: '+12%', changeType: 'up', icon: <UsersIcon /> },
  { label: 'Active Talents', value: '156', change: '+8', changeType: 'up', icon: <TalentsIcon /> },
  { label: 'Bookings', value: '89', change: '-3%', changeType: 'down', icon: <BookingsIcon /> },
  { label: 'Revenue', value: '$12,450', change: '+18%', changeType: 'up', icon: <RevenueIcon /> },
];

const defaultRecentItems = [
  { id: '1', title: 'New talent registration', subtitle: 'Sarah M. joined as a photographer', time: '2 min ago' },
  { id: '2', title: 'Booking confirmed', subtitle: 'John D. booked Event DJ for Mar 15', time: '15 min ago' },
  { id: '3', title: 'Payment received', subtitle: '$450 from Corporate Event Co.', time: '1 hr ago' },
  { id: '4', title: 'Profile verification', subtitle: 'Emma L. verified as makeup artist', time: '2 hrs ago' },
];

export function Dashboard() {
  return (
    <DashboardPanel
      title="Dashboard"
      subtitle="Welcome to Anchor Talents Admin. Here's an overview of your platform."
      stats={defaultStats}
      recentTitle="Recent Activity"
      recentItems={defaultRecentItems}
    />
  );
}
