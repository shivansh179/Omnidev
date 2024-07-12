'use client'
import React, { useState, useEffect } from 'react';
import { auth } from '@/firebaseConfig';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { Orbitronn } from '@/config/fonts';
import { Button } from '@nextui-org/button';
import Link from 'next/link';
import { Input } from '@nextui-org/input';
import Image from 'next/image';
import Collab from '@/public/login.svg';
import { EyeFilledIcon } from "@/public/EyeFilledIcon";
import { EyeSlashFilledIcon } from "@/public/EyeSlashFilledIcon";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogin = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      setEmail('');
      setPassword('');
      setError(null);
      toast.success("Logged in successfully");
      router.push('/');
    } catch (err) {
      // const errorMessage = error || 'An error occurred during login';
      toast.error(error);
      setError(error);
    }
  };

  return (
    <div className="flex p-5 shadow-lg bg-gray-50 justify-center">
      <div className="w-[450px] bg-gray-50 h-[600px]">
        <div className="font-bold text-green-500">
          <div className={Orbitronn.className}>
            CIIE Omnidev
          </div>
        </div>
        <div className="font-bold text-3xl mt-5">
          Sign In and Get Started
        </div>
        <div>
          Explore videos and quizzes all together 😁
        </div>
        <div className="ml-10 mt-20">
          {isLoggedIn ? (
            <div className="bg-blue-400 p-4 rounded shadow">
              <h1 className="text-3xl font-bold mb-4">Welcome, User!</h1>
              <p>You are logged in. You can now add recording videos.</p>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
                onClick={() => router.push('/addvideos')}
              >
                Check Video Adding System
              </button>
            </div>
          ) : (
            <>
              <form onSubmit={handleLogin} className="space-y-4">
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <div className="font-bold text-xl mt-10">
                  <Input
                    type="email"
                    label="Email"
                    variant="underlined"
                    className="w-[320px]"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="font-bold text-xl mt-10">
                  <Input
                    label="Password"
                    variant="bordered"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    endContent={
                      <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                        {isVisible ? (
                          <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                        ) : (
                          <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                        )}
                      </button>
                    }
                    type={isVisible ? "text" : "password"}
                    className="max-w-xs w-[400px]"
                    required
                  />
                </div>
                <div className="flex justify-end mr-20">
                  <Button color="primary" type="submit" className="mt-10 w-[150px]">
                    Login
                  </Button>
                </div>
              </form>
              <div className="text-[13px] mt-10 flex gap-2">
                <div>Don't have an account?</div>
                <div className="text-blue-500">
                  <Link href="/sign-up">
                    Sign Up
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="w-[500px] border-2 bg-green-500 rounded-xl pl-10 pt-24">
        <Image src={Collab} alt="Collab" height={600} width={500} className="transition animate-appearance-in duration-300 delay-200" />
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
