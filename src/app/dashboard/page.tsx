'use client';

import { signOut, useSession } from 'next-auth/react';

import { Login } from '@/components/Auth/Login';
import { Counter } from '@/components/counter';
import { Button } from '@/components/ui/button';

export default function Page() {
  const { data: session } = useSession();

  return (
    <div>
      {session ? (
        <main>
          <div className="flex justify-between p-8">
            <div className="font-bold text-2xl">CounterApp</div>
            <div className="flex gap-4 items-center">
              <div>{session.user?.name}</div>
              <img alt="" src={session.user?.image as string} width={40} height={40} className="rounded-full" />
              <Button onClick={() => signOut()}>Logout</Button>
            </div>
          </div>
          <Counter />
        </main>
      ) : (
        <div className="flex justify-center">
          <Login />

        </div>
      )}

    </div>
  );
}
