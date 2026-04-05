import React from 'react';

interface AdminDashboardProps {
  data: {
    stats: {
      users: number;
      posts: number;
      comments: number;
    };
    recentActivity: any[];
  };
}

export function AdminDashboard({ data }: AdminDashboardProps) {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>This is a placeholder for the admin dashboard component.</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
