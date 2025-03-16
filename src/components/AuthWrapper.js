'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import jwt from 'jsonwebtoken';
import { useAuth } from '@/hooks/useAuth';
import { routes } from '@/config/routes';

export default function AuthWrapper({ children, redirectPath = routes.login }) {
  const router = useRouter();
  const isAuthenticated = useAuth(redirectPath);

  return <>{children}</>;
}