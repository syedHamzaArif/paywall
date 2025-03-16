import jwt from "jsonwebtoken";
import { response } from "@/utils/response";
import { JWT_SECRET } from "@/utils/env";
import { authMiddleware } from "@/middleware/auth";

export async function GET(request) {
  try {
    const authResponse = await authMiddleware(request);

    if (authResponse.status !== 200) {
      return authResponse;
    }

    return response.success("Token verified.", {email: request.user.email, payments: request.user.payments.map((payment) => payment.subscriptionId)});
  } catch (error) {
    return response.unauthorized("Token verification failed.");
  }
}
