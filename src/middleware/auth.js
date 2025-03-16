import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { prisma } from "@/utils/db";
import { JWT_SECRET } from "@/utils/env";
import { response } from "@/utils/response";

export const authMiddleware = async(request) => {
  const token = request.headers.get("authorization")?.split(" ")[1];
 
  if (!token) {
    return response.unauthorized("Unauthorized"); 
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const { email } = decoded;

    const user = await prisma.user.findUnique({ where: { email }, include: { payments: true }} );
    if (!user) {
      return response.notFound("User not found."); 
    }

    request.user = user;

    return NextResponse.next();
  } catch (error) {
    return response.unauthorized("Unauthorized"); 
  }
}
