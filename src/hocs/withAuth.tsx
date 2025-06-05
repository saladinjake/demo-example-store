import React from 'react';
import { useAuth } from '../contexts/AuthContext';

type Role = 'user' | 'admin' | 'vendor';

interface WithAuthOptions {
  allowedRoles: Role[];
  fallback?: React.ReactNode;
}

export function withAuth(
  WrappedComponent: React.ComponentType,
  options: WithAuthOptions
) {
  return (props: P) => {
    const { user } = useAuth();

    if (!user) {
      return <p>Please login to view this page.</p>;
    }

    if (!options.allowedRoles.includes(user.role)) {
      return options.fallback || <p>Access denied. You do not have permission.</p>;
    }

    return <WrappedComponent {...props} />;
  };
}
