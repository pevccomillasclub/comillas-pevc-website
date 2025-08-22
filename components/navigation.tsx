'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/images/club-logo.png"
              alt="Comillas PE&VC Club"
              width={40}
              height={40}
            />
            <span className="text-xl font-bold text-purple-900">
              Comillas PE&VC Club
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-purple-900 font-medium transition-colors">
              Home
            </Link>
            <Link href="/deal-analyst-program" className="text-gray-700 hover:text-purple-900 font-medium transition-colors">
              Deal Analyst Program
            </Link>
            <Link href="/resources" className="text-gray-700 hover:text-purple-900 font-medium transition-colors">
              Resources
            </Link>
            <Button className="bg-purple-900 hover:bg-purple-800">
              Join Club
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="h-6 w-6 text-purple-900" />
            ) : (
              <Menu className="h-6 w-6 text-purple-900" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-purple-900 font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/deal-analyst-program" 
                className="text-gray-700 hover:text-purple-900 font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Deal Analyst Program
              </Link>
              <Link 
                href="/resources" 
                className="text-gray-700 hover:text-purple-900 font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Resources
              </Link>
              <Button className="bg-purple-900 hover:bg-purple-800 w-fit">
                Join Club
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
