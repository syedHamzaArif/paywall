"use client";
import AuthWrapper from "@/components/AuthWrapper";
import SignupForm from "@/components/SignupForm";
import { routes } from "@/config/routes";

export default function SignupPage() {
  return (
    <AuthWrapper redirectPath={routes.signup}>
      <SignupForm />
    </AuthWrapper>
  );
}