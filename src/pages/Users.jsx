import { useGetUsersQuery } from '../store/api/exampleApi';

export function Users() {
  const { data, isLoading, isError, error } = useGetUsersQuery(undefined, {
    skip: false, // Set skip: true to avoid calling until API is ready
  });

  if (isLoading) return <p>Loading users...</p>;
  if (isError) {
    return (
      <div>
        <h1>Users</h1>
        <p>Manage users. Configure <code>VITE_API_BASE_URL</code> in .env and ensure your API is running.</p>
        <p className="text-red-600">
          Error: {error?.data?.message || error?.message || 'Failed to load users'}
        </p>
      </div>
    );
  }

  return (
    <div>
      <h1>Users</h1>
      <p>Manage users. Data from RTK Query.</p>
      {data != null && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}
