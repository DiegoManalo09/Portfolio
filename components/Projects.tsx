import { FiFolder, FiExternalLink, FiGithub, FiGlobe, FiArrowRight } from 'react-icons/fi'
import Link from 'next/link'

interface ProjectsProps {
  isDarkMode: boolean
}

export default function Projects({ isDarkMode }: ProjectsProps) {
  const projects = [
    {
      title: 'Predicting Customer Churn',
      description: 'Customer Churn Prediction using SQL + Python. Performed EDA with MySQL queries and Python visualizations, then built ML models (Logistic Regression, Random Forest, XGBoost) to predict churn. Includes insights on key churn drivers and model evaluation.',
      link: 'https://github.com/DiegoManalo09/Predicting-Bank-Customer-Churn/blob/main/Notebook.ipynb',
      github: 'https://github.com/DiegoManalo09/Predicting-Bank-Customer-Churn://github.com/diegomanalo/api-gateway',
      tools: ['Python', 'Pandas', 'Scikit-Learn']
    },
    {
      title: 'Default Analysis',
      description: 'Analyzing Default Trends using LendingClub\'s Loan Portfolio through Excel & creating a visual dashboard using Google Looker Studio',
      link: 'https://drive.google.com/drive/folders/1abKLvkvPEFCU8YxbD_G77TtY6Ak_acdJ',
      github: 'https://drive.google.com/drive/folders/1abKLvkvPEFCU8YxbD_G77TtY6Ak_acdJ',
      tools: ['Excel', 'Looker Studio']
    },
    {
      title: 'Weather Classification Model',
      description: 'A machine learning project comparing K-Nearest Neighbors (KNN) and Decision Trees for weather prediction using a Kaggle dataset. Includes analysis of accuracy, runtime, interpretability, and insights for future improvements.',
      link: 'https://github.com/DiegoManalo09/Weather-Prediction-using-Classification/blob/main/WeatherClassification.ipynb',
      github: 'https://github.com/DiegoManalo09/Weather-Prediction-using-Classification',
      tools: ['Python', 'Pandas', 'Scikit-Learn'],
    },
  ]

  return (
    <section className={`${isDarkMode ? 'bg-[#2a2a2a] border-gray-600' : 'bg-white border-gray-200'} border rounded-lg p-6 shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300`}>
      <div className="flex items-baseline justify-between mb-6">
        <h2 className={`flex items-center space-x-2 text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          <FiFolder className="w-5 h-5" />
          <span>Projects</span>
        </h2>
        <Link href="/projects" className={`inline-flex items-center space-x-1 text-sm font-medium ${isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}>
          <span>View All</span>
          <FiArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="space-y-">
        {projects.map((project, index) => (
          <div key={index} className={`p-4 rounded-lg border ${isDarkMode ? 'bg-[#2a2a2a] border-white' : 'border-gray-200'}`}>
            <h3 className={`text-md font-medium mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{project.title}</h3>
            <p className={`text-sm mb-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{project.description}</p>
            <div className="flex flex-wrap gap-1 mb-3">
              {project.tools.map((tool, toolIndex) => (
                <span
                  key={toolIndex}
                  className={`inline-block text-xs font-medium px-2 py-1 rounded-full ${isDarkMode ? 'bg-gray-600 text-gray-300' : 'bg-gray-200 text-gray-700'}`}
                >
                  {tool}
                </span>
              ))}
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
                  <span>View Code</span>
                  <FiExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
