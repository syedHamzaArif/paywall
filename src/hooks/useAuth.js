"use client";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { verifyToken } from "@/utils/requests";
import { routes } from "@/config/routes";

export function useAuth(redirectPath = routes.login) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [subscriptionIds, setSubscriptionIds] = useState([]);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const token = document.cookie.split("token=")[1]?.split(";")[0];

    const verifyUserToken = async () => {
      if (!token) {
        return;
      }

      try {
        const response = await verifyToken();
        const { data } = response;
       
        if (data.email) {
          setIsAuthenticated(true);
          setSubscriptionIds(data.payments);

          if (pathname.includes(routes.protected) && !data.payments.find((payment) => payment.toString() === pathname.split("/")[2])) {
            router.push(routes.payment);
          }

          if (pathname === routes.login || pathname === routes.signup) {
            router.push(routes.payment);
          }

        } else {
          router.push(redirectPath);
        }
      } catch (error) {
        console.log(error);
      } 
    };

    verifyUserToken();
  }, [pathname, redirectPath]);

  return {isAuthenticated, subscriptionIds};
}
