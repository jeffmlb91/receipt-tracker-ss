"use client";

import React from 'react'
import { Button } from './ui/button';
import { Shield } from 'lucide-react'
import Link from 'next/link';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';


function Header() {
  return (
    <div className="p-4 flex justify-between items-center">
        <Link href="/" className='flex items-center'>
            <Shield className='w-6 h-6 text-blue-600 mr-2' />
            <h1 className="text-l font-semibold">Expensio</h1>
        </Link> 

        <div className='flex items-center space-x-4'>
          <SignedIn>
            <Link href="/receipts">
                <Button variant="outline">My Receipts</Button>
            </Link>
            <UserButton/ >
          </SignedIn>
          
          <SignedOut>
             <SignInButton mode="modal">
                <Button>Login</Button>
             </SignInButton>
          </SignedOut>
        </div>
    </div>
  )
}

export default Header