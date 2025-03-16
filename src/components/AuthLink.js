"use client";
import Link from "next/link";

export default function AuthLink({ href, text, linkText }) {
  return (
    <p className="mt-4 text-center text-gray-600">
      {text}{" "}
      <Link href={href} className="text-blue-500 hover:underline">
        {linkText}
      </Link>
    </p>
  );
}
