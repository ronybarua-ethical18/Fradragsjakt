import { trpc } from '@/utils/trpc';

export function DatabaseStatus() {
  const { data, isLoading, error } = trpc.getDatabaseStatus.useQuery();

  if (isLoading) return <div>Checking database status...</div>;
  if (error) return <div>Error checking database status: {error.message}</div>;

  return (
    <div>
      Database Status: {data?.statusMessage} ({data?.status})
    </div>
  );
}
