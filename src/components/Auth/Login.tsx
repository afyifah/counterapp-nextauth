'use client';

import { signIn } from 'next-auth/react';
import { useState } from 'react';

import { Button } from '../ui/button';
import { Input } from '../ui/input';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleCredentialsLogin = () => {
    signIn('credentials', {
      email,
      password,
      redirect: true,
      callbackUrl: '/dashboard',
    });
  };
  const handleGithubLogin = () => {
    signIn('github', {
      redirect: true,
      callbackUrl: '/dashboard',
    });
  };

  return (
    <main className="h-screen w-full bg-primary-100 flex items-center justify-center">
      <div>
        <div className="w-96 p-6 shadow-lg bg-primary-white rounded-md">
          <h3 className=" flex items-center justify-center text-secondary-950 p-4 text-4xl">Login</h3>
          <div className="  flex flex-col gap-3 bg-primary-200 p-10 border-2 border-primary-500 rounded-lg">
            <Input type="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} className="p-2 border border-secondary-700" />
            <Input type="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} className="p-2 border border-secondary-700" />
            <Button onClick={handleCredentialsLogin} className="p-2 border border-primary-600">Login</Button>
            <Button onClick={handleGithubLogin} variant="secondary" className="p-2 border-2 border-gray-950">Continue with Github</Button>
          </div>
        </div>
      </div>
    </main>

  );
};
