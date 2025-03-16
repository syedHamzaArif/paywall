"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signup } from "@/utils/requests";
import { routes } from "@/config/routes";
import { handleApiError } from "@/utils/errorHandler";

export default function useSignup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState({ message: "", type: "" });
  const router = useRouter();

  const handleSignup = async () => {
    try {
      const { data } = await signup({ name, email, password });

      document.cookie = `token=${data.token}`;

      router.push(routes.login);
    } catch (error) {
      const errorMessage = handleApiError(error);
      setAlert({ message: errorMessage, type: "error" });
    }
  };

  return {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    alert,
    handleSignup,
  };
}
