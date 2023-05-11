import { useSession } from "next-auth/react";
import LoginForm from "~/components/LoginForm";
import { redirect, useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const session = useSession();
  if (!!session.data) {
    router.push("/dashboard");
  }
  return (
    <main className="flex items-center justify-center p-8">
      <LoginForm />
    </main>
  );
}
