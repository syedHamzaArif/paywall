import { prisma } from "@/utils/db";
import bcrypt from "bcrypt";
import { response } from "@/utils/response";
import jwt from "jsonwebtoken";

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
        return response.notFound("User not found.");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return response.unauthorized("Invalid credentials.");
    }

    const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    return response.success("Login successful!", { email: user.email, token });
  } catch (error) {
    return response.serverError("Registration failed. Please try again.");
  }
}
