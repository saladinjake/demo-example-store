import { useAuth } from '../../contexts/AuthContext';
import UserDashboardLayout from './UserDashboard';
import AdminDashboardLayout from './VendorDashbaord';
import VendorDashboardLayout from './VendorDashbaord';
import { withAuth } from '../../hocs/withAuth';

function Dashboard() {
  const { user } = useAuth();

  if (!user) {
    return <p>Please login to access dashboard.</p>;
  }

  switch (user.role) {
    case 'admin':
      return (
        <AdminDashboardLayout>
          <p>Welcome, Admin {user.name}!</p>
          {/* Admin widgets here */}
        </AdminDashboardLayout>
      );

    case 'vendor':
      return (
        <VendorDashboardLayout>
          <p>Welcome, Driver {user.name}!</p>
          {/* Driver-specific widgets here */}
        </VendorDashboardLayout>
      );

    case 'user':
    default:
      return (
        <UserDashboardLayout>
          <p>Welcome, User {user.name}!</p>
          {/* User widgets here */}
        </UserDashboardLayout>
      );
  }
}


export default withAuth(Dashboard, { allowedRoles: ['admin', 'user', 'vendor'] });
