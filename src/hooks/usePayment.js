"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { subscribe } from "@/utils/requests";
import { routes } from "@/config/routes";
import { handleApiError } from "@/utils/errorHandler";
import { useEffect } from "react";

export default function usePayment() {
  const [alert, setAlert] = useState({ message: "", type: "" });
  const router = useRouter();

  const handlePayment = async (amount, description, id) => {
    try {
      const { data } = await subscribe({ amount, description, id });

      router.push(`${routes.protected}/${id}`);
    } catch (error) {
      const errorMessage = handleApiError(error);
      setAlert({ message: errorMessage, type: "error" });
    }
  };

  return {
    alert,
    handlePayment,
  };
}
