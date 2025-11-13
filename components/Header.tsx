"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'

const FiDownload = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
    <polyline points="7 10 12 15 17 10"></polyline>
    <line x1="12" y1="15" x2="12" y2="3"></line>
  </svg>
)

const FiMail = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
)

const FiLinkedin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
)

const FiGithub = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
)

const FiInstagram = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
)

const BsFillPatchCheckFill = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    viewBox="0 0 16 16"
    {...props}
  >
    <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.638.622a2.89 2.89 0 0 0 0 4.134l.637.622-.01.89a2.89 2.89 0 0 0 2.924 2.924l.89.01.622.638a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.638-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.01-.89a2.89 2.89 0 0 0-2.924-2.924l-.89-.01-.622-.638zM6.7 9.207l-1.6-1.6a.5.5 0 0 1 .707-.707l1.247 1.247 2.29-2.29a.5.5 0 0 1 .707.707l-2.64 2.64a.5.5 0 0 1-.708 0z" />
  </svg>
)

const FiSun = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="5"></circle>
    <line x1="12" y1="1" x2="12" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="23"></line>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
    <line x1="1" y1="12" x2="3" y2="12"></line>
    <line x1="21" y1="12" x2="23" y2="12"></line>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
  </svg>
)

const FiMoon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
)

const ROLES_TO_TYPE = ['Business Intelligence Analyst', 'Business/Systems Analyst', 'Data Analyst', 'Machine Learning Engineer']
const TYPING_SPEED = 35
const DELETING_SPEED = 8
const PAUSE_DURATION = 2500

interface HeaderProps {
  isDarkMode: boolean
  setIsDarkMode: (value: boolean) => void
}

export default function Header({ isDarkMode, setIsDarkMode }: HeaderProps) {
  const [roleIndex, setRoleIndex] = useState(0)
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = ROLES_TO_TYPE[roleIndex]

      if (isDeleting) {
        setText(currentRole.substring(0, text.length - 1))
      } else {
        setText(currentRole.substring(0, text.length + 1))
      }

      if (!isDeleting && text === currentRole) {
        setTimeout(() => setIsDeleting(true), PAUSE_DURATION)
      } else if (isDeleting && text === '') {
        setIsDeleting(false)
        setRoleIndex((prev) => (prev + 1) % ROLES_TO_TYPE.length)
      }
    }

    const timer = setTimeout(
      handleTyping,
      isDeleting ? DELETING_SPEED : TYPING_SPEED
    )

    return () => clearTimeout(timer)
  }, [text, isDeleting, roleIndex])

  return (
    <>
      <style jsx>{`
        .blink-cursor {
          animation: blink 1s step-end infinite;
        }
        @keyframes blink {
          from,
          to {
            color: transparent;
          }
          50% {
            color: #6b7280;
          }
        }
      `}</style>
      <div className={`${isDarkMode ? 'bg-black' : ''} pt-10`}>
        <header className={`flex items-center justify-between py-10 ${isDarkMode ? 'text-white bg-black' : 'bg-white'}`}>
        <div className={`w-100 h-100 rounded-lg overflow-hidden border-2 transition-transform duration-300 hover:scale-150 ${isDarkMode ? 'border-white' : 'border-black'}`}>
          <Image
            src="/profile.jpg"
            alt="Diego Manalo"
            width={200}
            height={200}
            className="object-cover"
          />
        </div>

        <div className="flex flex-col items-start space-y-4">
          <div className="flex items-start justify-between w-full">
            <div className="text-left">
              <h1 className={`flex items-center space-x-2 text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                <span>Diego Manalo</span>
                <BsFillPatchCheckFill className="w-5 h-5 text-blue-500" />
              </h1>
              <p className={`text-md ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Metro Manila, Philippines</p>
              <p className={`text-md ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} h-6`}>
                <span>{text}</span>
                <span className="blink-cursor">|</span>
              </p>
            </div>

            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`flex items-center space-x-2 text-sm font-medium px-3 py-2 rounded-md transition-all duration-300 hover:shadow-xl hover:scale-[1.02] border ml-4 ${
                isDarkMode
                  ? 'text-gray-300 border-gray-700 hover:bg-gray-800 hover:text-white'
                  : 'text-gray-700 border-gray-300 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              {isDarkMode ? <FiSun className="w-4 h-4" /> : <FiMoon className="w-4 h-4" />}
              <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
            </button>
          </div>

          <div className="flex flex-wrap gap-2">
            <a
              href="/Manalo, Diego - CV.pdf"
              download="Manalo, Diego - CV.pdf"
              className={`inline-flex items-center space-x-2 text-sm font-medium px-3 py-2 rounded-md transition-all duration-300 hover:shadow-xl hover:scale-[1.02] ${isDarkMode ? 'text-white bg-gray-700 hover:bg-gray-600' : 'text-white bg-black hover:bg-gray-800'}`}
            >
              <FiDownload className="w-4 h-4" />
              <span>Download Resume</span>
            </a>
            <a
              href="mailto:manalodiego0923@gmail.com"
              className={`inline-flex items-center space-x-2 text-sm font-medium px-3 py-2 rounded-md transition-all duration-300 hover:shadow-xl hover:scale-[1.02] border ${isDarkMode ? 'text-white border-gray-600 hover:bg-gray-800' : 'text-gray-700 border-gray-300 hover:bg-gray-50 hover:text-gray-900'}`}
            >
              <FiMail className="w-4 h-4" />
              <span>Send Email</span>
            </a>
            <a
              href="https://www.linkedin.com/in/diegomanalo/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded-md transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
            >
              <FiLinkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/DiegoManalo09"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 px-3 py-2 rounded-md transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
            >
              <FiGithub className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.instagram.com/diego_manalo/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-sm font-medium text-white bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 px-3 py-2 rounded-md transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
            >
              <FiInstagram className="w-4 h-4" />
              <span>Instagram</span>
            </a>
          </div>
        </div>
        </header>
      </div>
    </>
  )
}
