"use client";

import { useRouter } from "next/navigation";

interface LoginButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

export const LoginButton = ({
  children,
  mode = "redirect",
  asChild = false,
}: LoginButtonProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/auth/login");
  };

  if (mode === "modal") {
    return <span>TODO: MODAL</span>;
  }
  return (
    <span
      onClick={handleClick}
      className="cursor-pointer text-blue-500 hover:underline"
    >
      {children}
    </span>
  );
};
