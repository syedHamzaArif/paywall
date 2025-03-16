import { authMiddleware } from "@/middleware/auth";
import { prisma } from "@/utils/db";
import { response } from "@/utils/response";

export async function POST(request) {
  try {
    const authResponse = await authMiddleware(request);
    const { description, amount, id } = await request.json();

    if (authResponse.status !== 200) {
      return authResponse;
    }

    if (!amount || !description || !id) {
      return response.badRequest("Subscription Id, Amount and description are required.");
    }

    const user = request.user;
    const payment = await prisma.payment.create({
      data: {
        description,
        totalAmount: amount,
        userId: user.id,
        subscriptionId: id,
      },
    });

    await new Promise((resolve) => setTimeout(resolve, 2000));

    await prisma.payment.update({
      where: { id: payment.id },
      data: { paymentStatus: "PAID" },
    });

    return response.success("Payment successful!", payment);
  } catch (error) {
    return response.serverError("Failed to create payment.");
  }
}

export async function GET(request) {
  const authResponse = await authMiddleware(request);
  if (authResponse.status !== 200) {
    return authResponse;
  }

  const user = request.user;

  try {
    const payments = await prisma.payment.findMany({
      where: { userId: user.id },
    });

    return response.success("Payments fetched!", payments); 
  } catch (error) {
    return response.serverError("Failed to fetch payments."); 
  }
}
