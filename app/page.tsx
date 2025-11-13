"use client"
import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import About from '@/components/About'
import TechStack from '@/components/TechStack'
import BeyondCoding from '@/components/BeyondCoding'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    // Load theme preference from localStorage
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
      setIsDarkMode(true)
    }
  }, [])

  const handleThemeToggle = () => {
    const newTheme = !isDarkMode
    setIsDarkMode(newTheme)
    // Save theme preference to localStorage
    localStorage.setItem('theme', newTheme ? 'dark' : 'light')
  }

  return (
    <div className={`${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'} min-h-screen transition-colors duration-300`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-5">
        {/* Header spans full width */}
        <Header isDarkMode={isDarkMode} setIsDarkMode={handleThemeToggle} />

        {/* Main content in two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-3">
          {/* Left Column - Main Content */}
          <div className="space-y-3">
            <About isDarkMode={isDarkMode} />
            <Projects isDarkMode={isDarkMode} />
            <BeyondCoding isDarkMode={isDarkMode} />
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-3">
            <Experience isDarkMode={isDarkMode} />
            <TechStack isDarkMode={isDarkMode} />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className={`border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} mt-16 py-8`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className={`text-center text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            © Diego Manalo, 2025. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
