'use client'
import React from 'react'
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function NavbarItem({ title, param }) {
  const searchParams = useSearchParams();
  const genre = searchParams.get('genre');
  return (
    <div>
      <Link  href={`/?genre=${param}`} className="hover:text-blue-300">
        {title}
      </Link>
     

    </div>
  )
}
