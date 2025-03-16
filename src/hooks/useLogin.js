"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/utils/requests";
import { routes } from "@/config/routes";
import { handleApiError } from "@/utils/errorHandler";

export default function useLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState({ message: "", type: "" });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    try {
      setLoading(true);
      const { data } = await login({ email, password });
      console.log(data);
      document.cookie = `token=${data.token}`;

      router.push(routes.payment);
    } catch (error) {
      const errorMessage = handleApiError(error);
      setAlert({ message: errorMessage, type: "error" });
    } finally {
      setLoading(false);
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    alert,
    handleLogin,
    loading,
  };
}
