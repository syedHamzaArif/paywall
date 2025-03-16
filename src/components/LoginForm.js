"use client";
import AlertBox from "@/components/AlertBox";
import InputField from "@/components/InputField";
import Button from "@/components/Button";
import AuthLink from "@/components/AuthLink";
import useLogin from "@/hooks/useLogin";
import { routes } from "@/config/routes";

export default function LoginForm() {
  const {
    email,
    setEmail,
    password,
    setPassword,
    alert,
    handleLogin,
    loading
  } = useLogin();

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
          <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Login</h1>
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
          <Button onClick={handleLogin} loading={loading}>Login</Button>
          <AuthLink
            href={routes.signup}
            text="Don't have an account?"
            linkText="Sign up here"
          />
        </div>
        {alert.message && (
          <AlertBox message={alert.message} type={alert.type} duration={5000} />
        )}
      </div>
    </>
  );
}