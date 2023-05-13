import { useSession } from "next-auth/react";
import LoginForm from "~/components/LoginForm";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const session = useSession();
  if (!!session.data) {
    router.push("/dashboard");
  }
  return (
    <main className="h-full rounded bg-base-100/40">
      <LoginForm />
    </main>
  );
}
