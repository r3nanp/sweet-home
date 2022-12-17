import type { NextPage } from 'next';
import { signIn } from 'next-auth/react';

const SignIn: NextPage = () => {
  return (
    <main className="flex h-screen w-full items-center justify-center">
      <button
        className="text-white"
        onClick={() =>
          signIn('google', {
            callbackUrl: `${window.location.origin}/app`,
          })
        }
      >
        Login!
      </button>
    </main>
  );
};

export default SignIn;
