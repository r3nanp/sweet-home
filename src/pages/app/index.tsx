import type { NextPage } from 'next';
import { signOut, useSession } from 'next-auth/react';

const App: NextPage = () => {
  const { data: sesh } = useSession();

  if (!sesh) return null;

  return (
    <main>
      <h1>{sesh.user?.name}</h1>

      <button
        onClick={() =>
          signOut({
            callbackUrl: `/`,
          })
        }
      >
        Logout
      </button>
    </main>
  );
};

export default App;
