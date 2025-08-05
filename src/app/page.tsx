'use client'

import Loader from '../components/loader'
import { useEffect, useState } from 'react'

export default function Home() {
  const [showLoader, setShowLoader] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  if (showLoader) {
    return <Loader />
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-950 text-white p-6">
      <h1 className="text-5xl font-bold mb-4">Hi, I’m Rohit Jatti</h1>
      <p className="text-lg text-gray-400 max-w-xl text-center">
        Welcome to my portfolio! I’m a passionate developer focused on building modern web experiences.
      </p>
    </main>
  )
}
