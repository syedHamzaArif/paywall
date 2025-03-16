import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "@/utils/env";
import { response } from "@/utils/response";

export async function POST(request) {
  try {
    const token = request.headers.get("authorization")?.split(" ")[1];

    if (!token) {
      return response.unauthorized("No token found.");
    }

    const decoded = jwt.verify(token, JWT_SECRET);

    const expiredToken = jwt.sign({ email: decoded.email }, JWT_SECRET, {
      expiresIn: "1s",
    });

    return response.success("Logged out successfully! Token has been expired.");
  } catch (error) {
    return response.serverError("Logout failed. Please try again.");
  }
}
