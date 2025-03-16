"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { routes } from "@/config/routes";
import { handleApiError } from "@/utils/errorHandler";
import { logout } from "@/utils/requests"; // Assuming you have a logout function in your requests utility

export default function useLogout() {
  const [alert, setAlert] = useState({ message: "", type: "" });
  const router = useRouter();

  const handleLogout = async () => {
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    router.push(routes.login);
  };

  return {
    alert,
    handleLogout,
  };
}
