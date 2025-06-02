import React from 'react'
import Link from 'next/link';

export default function Header() {
  return (
    <div>
        <header className="bg-gray-800 text-white p-4 shadow-md">
            <nav className="flex space-x-4">
            <div className="container mx-auto flex justify-between items-center">

        <Link href="/" className="text-2xl font-bold hover:text-blue-300">
          Movie APP
        </Link>

        <div className="space-x-4">
          <Link href="/" className="hover:text-blue-300">
            Accueil
          </Link>
          <Link href="/film" className="hover:text-blue-300">
            Films
          </Link>
          <Link href="/apropos" className="hover:text-blue-300">
            À propos
          </Link>
        </div>
      </div>
               
            
            </nav>
        </header>
    </div>
  )
}
