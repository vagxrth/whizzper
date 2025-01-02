import Link from 'next/link'
import { Sparkles } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col">
      <header className="p-6 flex justify-between items-center">
        <div className="text-2xl font-bold text-white font-sans">WHIZZPER</div>
        <nav>
          <Link
            href="/login"
            className="px-6 py-3 rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 transition-all duration-300 text-sm font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Login
          </Link>
        </nav>
      </header>
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4">
        <div className="relative">
          <div className="absolute inset-0 bg-white bg-opacity-5 blur-3xl rounded-full"></div>
          <Sparkles className="w-16 h-16 mb-8 text-white animate-pulse relative z-10" />
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white relative z-10">
          Elevate Your Instagram Engagement
        </h1>
        <p className="text-xl md:text-2xl mb-12 max-w-2xl text-gray-300 relative z-10">
          Automate your Instagram DMs with AI. <br /> Connect with your audience like never before.
        </p>
        <Link
          href="/signup"
          className="px-8 py-3 rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 transition-all duration-300 text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 relative z-10"
        >
          Get Started
        </Link>
      </main>
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
        <svg className="absolute top-0 left-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </div>
  )
}

