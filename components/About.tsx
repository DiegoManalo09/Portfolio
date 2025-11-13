import React from 'react'

interface AboutProps {
  isDarkMode: boolean
}

// Inlined SVG component for FiUser
const FiUser = (props: React.SVGProps<SVGSVGElement>) => (
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
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
)

export default function About({ isDarkMode }: AboutProps) {
  return (
    <section className={`${isDarkMode ? 'bg-[#2a2a2a] border-gray-600' : 'bg-white border-gray-200'} border rounded-lg p-6 shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300`}>
      <h2 className={`flex items-center space-x-2 text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
        <FiUser className="w-5 h-5" />
        <span>About</span>
      </h2>
      <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
        Fully committed to the philosophy of life-long learning, I’m a 3rd Year Sophomore at the Ateneo De Manila Univeristy, where I am taking a BS in Management Information Systems, specializing in Data Science and Analytics.<br></br><br></br>
        In 5 years, I aspire to become a data professional, with a strong background in Business Intelligence, Data Analytics and Machine Learning.
        Just as how I love analyzing movies and rating them in LetterBoxd, paying attention to details and try to predict the endings -- I love analyzing data, where I get to uncover hidden patterns and answer why things happen. I also love building Machine Learning models, where I get to predicting what can happen, to assist people in making decisions. Just like watching a horror movie, I look for signs when a jumpscare may take place, for me to cover my eyes when it happens. xD
      </p>
    </section>
  )
}
