'use client'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="w-full bg-gray-800 text-white p-4 flex gap-6 justify-center">
      <Link href="/">Home</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/about">About</Link>
      <Link href="/projects">Projects</Link>
    </nav>
  );
}
