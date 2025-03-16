import { prisma } from "@/utils/db";
import bcrypt from "bcrypt";
import { response } from "@/utils/response";

export async function POST(request) {
  try {
    const { name, email, password } = await request.json();
    const existingEmail = await prisma.user.findUnique({ where: { email } });
    if (existingEmail) {
      return response.badRequest("Email already exists.");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    return response.created("User registered successfully!", user);
  } catch (error) {
    return response.serverError("Registration failed. Please try again.");
  }
}
