import Link from "next/link";
import GitHubSignInButton from "../GitHubSignInButton";

const LoginForm = () => {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="m-auto flex w-full flex-col items-center rounded p-8"
    >
      <Link
        href="/"
        className="mb-2 text-2xl font-bold normal-case text-primary-800"
      >
        kindMind
      </Link>
      <GitHubSignInButton />
    </form>
  );
};
export default LoginForm;
