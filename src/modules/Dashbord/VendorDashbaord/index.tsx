import { ReactNode } from 'react';

export default function UserDashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <h2>Vendor Dashboard</h2>
      {children}
    </div>
  );
}
