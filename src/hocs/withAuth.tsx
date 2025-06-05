import { useAuth } from '../contexts/AuthContext';
import { Navigate } from 'react-router-dom';

export function withAuth<P,any>(
  WrappedComponent: any,
  options: any
) {
  return (props: P) => {
    const { user, loading } = useAuth();

    if (loading) return <p>Loading...</p>;

    if (!user) {
      return <Navigate to="/login" replace />;
    }

    if (!options.allowedRoles.includes(user.role)) {
      return options.fallback || <p>Access denied.</p>;
    }

    return <WrappedComponent {...props} />;
  };
}
