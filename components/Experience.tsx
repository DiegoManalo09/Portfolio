"use client"

import { FiBriefcase } from 'react-icons/fi'

interface ExperienceProps {
  isDarkMode: boolean
}

export default function Experience({ isDarkMode }: ExperienceProps) {
  const experiences = [
    {
      role: 'Business Intelligence Intern',
      company: 'OneLot Financing Corporation',
      year: '2025'
    },
    {
      role: 'IBM Data Analyst Professional Certificate',
      company: 'Coursera',
      year: '2025'
    },
    {
      role: 'Associate Secretary General',
      company: 'Ateneo Management Information Systems Association (MISA)',
      year: '2025'
    },
    {
      role: 'OSG Officer',
      company: 'Ateneo Management Information Systems Association (MISA)',
      year: '2024'
    },
    {
      role: 'Operations Manager',
      company: 'Ateneo Management Information Systems Association (MISA)',
      year: '2024'
    },
    {
      role: 'BS Management Information Systems',
      company: 'Ateneo De Manila University',
      year: '2023'
    },
    {
      role: 'Senior High School - STEM Strand',
      company: 'De La Salle University - Senior High School',
      year: '2023'
    },
    {
      role: 'High School',
      company: 'Colegio San Agustin - Makati',
      year: '2021'
    }
  ]

  return (
    <>
      <style jsx>{`
        .timeline-list {
          position: relative;
        }
        
        /* The vertical timeline line */
        .timeline-list::before {
          content: '';
          position: absolute;
          left: 6px; /* Positioned to be in the center of the dot */
          top: 0.5rem; /* Start at the center of the first dot */
          bottom: 0.5rem; /* Stop at the center of the last dot */
          width: 2px;
          background-color: #e5e7eb; /* tailwind-gray-200 */
          z-index: 0;
        }
        
        /* The timeline dot */
        .timeline-item::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0.375rem; /* Aligns dot with the center of the first line of text */
          width: 14px;
          height: 14px;
          border-radius: 9999px; /* rounded-full */
          background-color: #cbd5e1; /* tailwind-gray-300 */
          border: 2px solid white; /* Creates the "on top" effect */
          z-index: 1;
          transition: all 0.2s ease;
        }

        /* The blue glow hover effect */
        .timeline-item:hover::before {
          background-color: #3b82f6; /* tailwind-blue-500 */
          box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.3); /* Blue glow */
        }
      `}</style>

      <section className={`${isDarkMode ? 'bg-[#2a2a2a] border-gray-600' : 'bg-white border-gray-200'} border rounded-lg p-6 shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300`}>
        <h2 className={`flex items-center space-x-2 text-xl font-semibold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          <FiBriefcase className="w-5 h-5" />
          <span>Experience</span>
        </h2>


        <div className="relative">
          <ul className="space-y-8 timeline-list">
            {experiences.map((exp, index) => (
              <li key={index} className="relative pl-8 timeline-item">
                <div className="flex items-start justify-between">
                  <div className="flex-grow">
                    <h3 className={`text-md font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{exp.role}</h3>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}>{exp.company}</p>
                  </div>
                  <span className={`text-xs font-semibold ${isDarkMode ? 'text-gray-300 border-gray-600' : 'text-gray-500 border-gray-200'} border rounded-full px-3 py-1 ml-4 whitespace-nowrap`}>
                    {exp.year}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
