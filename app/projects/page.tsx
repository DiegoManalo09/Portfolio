"use client"
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FiArrowLeft, FiExternalLink, FiGithub, FiGlobe, FiSun, FiMoon } from 'react-icons/fi'

export default function ProjectsPage() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
      setIsDarkMode(true)
    }
  }, [])

  const handleThemeToggle = () => {
    const newTheme = !isDarkMode
    setIsDarkMode(newTheme)
    localStorage.setItem('theme', newTheme ? 'dark' : 'light')
  }

  const allProjects = [
    {
      title: 'Predicting Customer Churn',
      description: 'Customer Churn Prediction using SQL + Python. Performed EDA with MySQL queries and Python visualizations, then built ML models (Logistic Regression, Random Forest, XGBoost) to predict churn. Includes insights on key churn drivers and model evaluation.',
      link: 'https://github.com/DiegoManalo09/Predicting-Bank-Customer-Churn/blob/main/Notebook.ipynb',
      github: 'https://github.com/DiegoManalo09/Predicting-Bank-Customer-Churn',
      tech: ['Python', 'Pandas', 'Scikit-Learn'],
      status: 'Live'
    },
    {
      title: 'Default Analysis',
      description: 'Analyzing Default Trends using LendingClub\'s Loan Portfolio through Excel & creating a visual dashboard using Google Looker Studio',
      link: 'https://drive.google.com/drive/folders/1abKLvkvPEFCU8YxbD_G77TtY6Ak_acdJ',
      github: 'https://drive.google.com/drive/folders/1abKLvkvPEFCU8YxbD_G77TtY6Ak_acdJ',
      tech: ['Excel', 'Looker Studio'],
      status: 'Live'
    },
    {
      title: 'Weather Classification Model',
      description: 'A machine learning project comparing K-Nearest Neighbors (KNN) and Decision Trees for weather prediction using a Kaggle dataset. Includes analysis of accuracy, runtime, interpretability, and insights for future improvements.',
      link: 'https://github.com/DiegoManalo09/Weather-Prediction-using-Classification/blob/main/WeatherClassification.ipynb',
      github: 'https://github.com/DiegoManalo09/Weather-Prediction-using-Classification',
      tech: ['Python', 'Pandas', 'Scikit-Learn'],
      status: 'Live'
    },
    {
      title: 'Sales Manager Dashboard',
      description: 'Built a centralized dashboard in Metabase to monitor sales funnel performance and loanbook KPIs, tracking key metrics such as funnel stage conversion rates, time-to-close, and total loanbook growth. Automated data ingestion and transformation using SQL queries, enabling real-time visibility of performance changes across teams and products.',
      tech: ['SQL', 'Metabase'],
      status: 'Confidential'
    },
    {
      title: 'Sales Weekly Analytics',
      description: 'Developed an automated weekly reporting dashboard in Metabase to analyze sales activity and loanbook performance versus targets, including metrics such as number of meetings per sales manager, dealers onboarded, and loanbook growth. Streamlined KPI tracking using SQL transformations and interactive visualizations for management review.',
      tech: ['SQL', 'Metabase'],
      status: 'Confidential'
    },
    {
      title: 'Proposed Employee Portal',
      description: 'Conducted end-to-end business analysis for Discovery Capital Finance Corporation, interviewing 10+ stakeholders across Business Development, IT, and HR to elicit and document 30+ system requirements. Designed the Entity-Relationship Diagram and 18+ use case descriptions, mapped 9 business processes through Physical and Logical Data Flow Diagrams, and proposed automation solutions that unified 3 manual processes into a single automated workflow.',
      tech: ['Business Analysis', 'Process Mapping', 'LucidChart'], 
      status: 'Confidential'
    },{
      title: 'Stock and Cryptocurrency Market Analytics',
      description: 'Developed a data pipeline to automatically extract live stock and cryptocurrency market data from Yahoo Finance, processing 10,000+ price records with 95% accuracy using Selenium, conducting statistical analysis to calculate daily returns, moving averages, volatility, and correlation analysis using Pandas, uploaded to a MySQL database, and visualized metrics using Tableau',
      tech: ['Python', 'SQL', 'Tableau'],
      status: 'Confidential'
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Live': return isDarkMode ? 'bg-green-800 text-green-200' : 'bg-green-100 text-green-800'
      case 'In Development': return isDarkMode ? 'bg-blue-800 text-blue-200' : 'bg-blue-100 text-blue-800'
      case 'Open Source': return isDarkMode ? 'bg-purple-800 text-purple-200' : 'bg-purple-100 text-purple-800'
      case 'Confidential': return isDarkMode ? 'bg-orange-800 text-orange-200' : 'bg-orange-100 text-orange-800'
      case 'Research': return isDarkMode ? 'bg-gray-800 text-gray-200' : 'bg-gray-100 text-gray-800'
      default: return isDarkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className={`${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'} min-h-screen transition-colors duration-300`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-5 py-8">
        <div className="mb-8">
          <Link
            href="/"
            className={`inline-flex items-center space-x-2 mb-4 ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
          >
            <FiArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          <div className="flex items-center justify-between mb-2">
            <h1 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              All Projects
            </h1>
            <button
              onClick={handleThemeToggle}
              className={`flex items-center space-x-2 text-sm font-medium px-4 py-2 rounded-md transition-all duration-300 hover:shadow-xl hover:scale-[1.02] border ${
                isDarkMode
                  ? 'text-gray-300 border-gray-700 hover:bg-gray-800 hover:text-white'
                  : 'text-gray-700 border-gray-300 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              {isDarkMode ? <FiSun className="w-4 h-4" /> : <FiMoon className="w-4 h-4" />}
              <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
            </button>
          </div>

          <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            A showcase of my work and contributions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {allProjects.map((project, index) => (
            <div
              key={index}
              className={`${isDarkMode ? 'bg-[#2a2a2a] border-gray-600' : 'bg-white border-gray-200'} border rounded-lg p-6 shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300`}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {project.title}
                </h3>
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${getStatusColor(project.status)}`}>
                  {project.status}
                </span>
              </div>

              <p className={`text-sm mb-4 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {project.description}
              </p>

              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`inline-block text-xs font-medium px-2 py-1 rounded-full ${isDarkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-100 text-gray-800'}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center space-x-1 text-sm font-medium ${isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'} transition-colors`}
                  >
                    <FiGlobe className="w-4 h-4" />
                    <span>Live Demo</span>
                    <FiExternalLink className="w-3 h-3" />
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center space-x-1 text-sm font-medium ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
                  >
                    <FiGithub className="w-4 h-4" />
                    <span>Code</span>
                    <FiExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
