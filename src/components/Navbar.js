"use client";
import { useAuth } from "@/hooks/useAuth";
import useLogout from "@/hooks/useLogout";
import Link from "next/link";
import { routes } from "@/config/routes";

export default function Navbar() {
  const { isAuthenticated } = useAuth();
  const { handleLogout } = useLogout();

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-6 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">Paywall App</div>
        <div className="space-x-6">
          {isAuthenticated ? (
            <button
              onClick={handleLogout}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                href={routes.login}
                className="text-gray-700 hover:text-blue-600"
              >
                Login
              </Link>
              <Link
                href={routes.signup}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
