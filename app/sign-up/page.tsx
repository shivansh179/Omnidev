'use client'

import { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth, firestore } from '@/firebaseConfig';
import { doc, getDoc, setDoc, query, where, collection, getDocs } from 'firebase/firestore';
import { Orbitronn } from '@/config/fonts';
import { Button } from '@nextui-org/button';
import Link from 'next/link';
import { Input } from '@nextui-org/input';
import Image from 'next/image';
import Collab from '@/public/collab.svg';
import { EyeFilledIcon } from "@/public/EyeFilledIcon";
import { EyeSlashFilledIcon } from "@/public/EyeSlashFilledIcon";
import { useRouter } from 'next/navigation';
import React from 'react';
import { Toaster, toast } from 'react-hot-toast';

const SignUp = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  const router = useRouter();

  const signUp = async () => {
    try {
      // Check if the username is already taken
      const usernameRef = doc(firestore, "usernames", name);
      const usernameDoc = await getDoc(usernameRef);

      if (usernameDoc.exists()) {
        throw new Error("Username is already taken. Please choose another one.");
      }

      // Check if the email is already used
      const emailQuery = query(collection(firestore, "users"), where("email", "==", email));
      const emailQuerySnapshot = await getDocs(emailQuery);

      if (!emailQuerySnapshot.empty) {
        throw new Error("Email is already in use. Please choose another one.");
      }

      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(email, password);
      
      if (!userCredential) {
        throw new Error("Failed to create user. Please try again.");
      }

      // Store the username and email in Firestore
      await setDoc(usernameRef, { email });

      // Store additional user information in Firestore
      const userRef = doc(firestore, "users", userCredential.user.uid);
      await setDoc(userRef, { name, email });

      // Clear form fields
      setEmail('');
      setPassword('');
      setName('');

      // Navigate to home page
      router.push('/');
    } catch (e) {
      console.error(e);
      throw e;
    }
  };

  const handleSignUp = () => {
    toast.promise(
      signUp(),
      {
        loading: 'Signing up...',
        success: 'Signed up successfully!',
        error: (err) => err.message || 'Could not sign up.',
      }
    );
  };

  return (
    <div>
      <div className='flex p-5 shadow-lg bg-gray-50 justify-center'>
        <div className='w-[450px] bg-gray-50 h-[600px]'>
          <div className='font-bold text-blue-500'>
            <div className={Orbitronn.className}>
              CIIE Omnidev
            </div>
          </div>
          <div className='font-bold text-3xl mt-5'>
            Get Started Now
          </div>
          <div>
            Enter Your Credentials to create an account
          </div>
          <div className='ml-10'>
            <div>
              <div className='font-bold text-xl mt-20'>
                <Input
                  type="text"
                  label="Name"
                  variant='underlined'
                  className='w-[320px]'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className='font-bold text-xl mt-10'>
                <Input
                  type="email"
                  label="Email"
                  variant='underlined'
                  className='w-[320px]'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className='font-bold text-xl mt-10'>
                <Input
                  label="Password"
                  variant="bordered"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  endContent={
                    <button
                      className="focus:outline-none"
                      type="button"
                      onClick={toggleVisibility}
                    >
                      {isVisible ? (
                        <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                      ) : (
                        <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                      )}
                    </button>
                  }
                  type={isVisible ? "text" : "password"}
                  className="max-w-xs w-[400px]"
                />
              </div>
            </div>
            <div className='flex justify-end mr-20'>
              <Button
                color="primary"
                onClick={handleSignUp}
                className='mt-10 w-[150px]'
              >
                Sign-Up
              </Button>
            </div>
          </div>
          <div className='text-[13px] mt-10 flex gap-2'>
            <div>
              Have an account?
            </div>
            <div className='text-blue-500'>
              <Link href="/login">
                Sign In
              </Link>
            </div>
          </div>
        </div>
        <div className='w-[500px] border-2 bg-blue-500 rounded-xl pl-10 pt-24'>
          <Image src={Collab} alt='Collab' height={600} width={400} />
        </div>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default SignUp;
