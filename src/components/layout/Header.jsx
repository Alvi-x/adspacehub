import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { MagnifyingGlassIcon, PlusCircleIcon } from '@heroicons/react/24/outline'
import Button from '../ui/Button'

const Header = () => {
  const location = useLocation()

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">AS</span>
            </div>
            <span className="text-xl font-bold text-gray-900">AdSpaceHub</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                location.pathname === '/' 
                  ? 'text-primary-500 border-b-2 border-primary-500' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/browse" 
              className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                location.pathname === '/browse' 
                  ? 'text-primary-500 border-b-2 border-primary-500' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Browse Spaces
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Link to="/browse">
              <Button variant="ghost" size="sm">
                <MagnifyingGlassIcon className="w-5 h-5 mr-1" />
                Search
              </Button>
            </Link>
            <Link to="/create-listing">
              <Button variant="primary" size="sm">
                <PlusCircleIcon className="w-5 h-5 mr-1" />
                List Your Space
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header