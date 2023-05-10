import { signIn } from "next-auth/react";

const LoginForm = () => {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex flex-col rounded-lg bg-base-100 p-8"
    >
      <button
        onClick={() =>
          void signIn("discord", {
            callbackUrl: "http://localhost:3000/dashboard",
          })
        }
        className="btn-primary btn mb-2"
      >
        Login with Discord
      </button>
    </form>
  );
};
export default LoginForm;
