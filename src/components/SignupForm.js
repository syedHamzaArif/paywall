"use client";
import AlertBox from "@/components/AlertBox";
import InputField from "@/components/InputField";
import Button from "@/components/Button";
import AuthLink from "@/components/AuthLink";
import useSignup from "@/hooks/useSignup";
import { routes } from "@/config/routes";

export default function SignupForm() {
  const {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    alert,
    handleSignup,
  } = useSignup();

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
          <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Sign Up</h1>
          <InputField
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <InputField
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputField
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleSignup}>Sign Up</Button>
          <AuthLink
            href={routes.login}
            text="Already have an account?"
            linkText="Log in here"
          />
        </div>
        {alert.message && (
          <AlertBox message={alert.message} type={alert.type} duration={5000} />
        )}
      </div>
    </>
  );
}
