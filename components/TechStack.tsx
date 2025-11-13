import { FiCode } from 'react-icons/fi'
import {
  SiPython, SiHtml5, SiCss3, SiJavascript, SiTypescript,
  SiPandas, SiNumpy, SiScikitlearn, SiSqlalchemy, SiDjango, SiNextdotjs, SiReact, SiTailwindcss,
  SiTableau, SiGoogleanalytics, SiDatabricks, SiNotion, SiSlack
} from 'react-icons/si'
import { FiDatabase, FiBarChart, FiSettings, FiCode as FiCodeIcon } from 'react-icons/fi'
import { FaMicrosoft, FaChartLine } from 'react-icons/fa'
import { BiPowerOff } from 'react-icons/bi'
import { MdAnalytics } from 'react-icons/md'

interface TechStackProps {
  isDarkMode: boolean
}

export default function TechStack({ isDarkMode }: TechStackProps) {
  const languagestech = [
    { name: 'Python', icon: SiPython },
    { name: 'SQL', icon: FiDatabase },
    { name: 'HTML', icon: SiHtml5 },
    { name: 'CSS', icon: SiCss3 },
    { name: 'JavaScript', icon: SiJavascript },
    { name: 'TypeScript', icon: SiTypescript }
  ]

  const frameworkstech = [
    { name: 'Pandas', icon: SiPandas },
    { name: 'NumPy', icon: SiNumpy },
    { name: 'Scikit-Learn', icon: SiScikitlearn },
    { name: 'SQLAlchemy', icon: SiSqlalchemy },
    { name: 'Django', icon: SiDjango },
    { name: 'Next.js', icon: SiNextdotjs },
    { name: 'React', icon: SiReact },
    { name: 'Tailwind CSS', icon: SiTailwindcss }
  ]

  const otherTech = [
    { name: 'Microsoft Office', icon: FaMicrosoft },
    { name: 'Power BI', icon: BiPowerOff },
    { name: 'Tableau', icon: SiTableau },
    { name: 'Looker Studio', icon: SiGoogleanalytics },
    { name: 'Cognos Analytics', icon: MdAnalytics },
    { name: 'Metabase', icon: FaChartLine },
    { name: 'Lucidchart', icon: FiBarChart },
    { name: 'Databricks', icon: SiDatabricks },
    { name: 'Notion', icon: SiNotion },
    { name: 'Slack', icon: SiSlack }
  ]

  return (
    <section className={`${isDarkMode ? 'bg-[#2a2a2a] border-gray-600' : 'bg-white border-gray-200'} border rounded-lg p-6 shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300`}>
      <div className="flex items-baseline justify-between mb-6">
        <h2 className={`flex items-center space-x-2 text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          <FiCode className="w-5 h-5" />
          <span>Tech Stack</span>
        </h2>
      </div>

      {/* Languages */}
      <div className="mb-6">
        <h3 className={`text-md font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-900'}`}>Languages</h3>
        <div className="flex flex-wrap gap-2">
          {languagestech.map((tech) => {
            const IconComponent = tech.icon
            return (
              <span
                key={tech.name}
                className={`inline-flex items-center gap-1 ${isDarkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-100 text-gray-800'} rounded-full px-3 py-1 text-sm font-medium`}
              >
                <IconComponent className="w-4 h-4" />
                {tech.name}
              </span>
            )
          })}
        </div>
      </div>

      {/* frameworks */}
      <div className="mb-6">
        <h3 className={`text-md font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-900'}`}>Frameworks</h3>
        <div className="flex flex-wrap gap-2">
          {frameworkstech.map((tech) => {
            const IconComponent = tech.icon
            return (
              <span
                key={tech.name}
                className={`inline-flex items-center gap-1 ${isDarkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-100 text-gray-800'} rounded-full px-3 py-1 text-sm font-medium`}
              >
                <IconComponent className="w-4 h-4" />
                {tech.name}
              </span>
            )
          })}
        </div>
      </div>

      {/* Other */}
      <div>
        <h3 className={`text-md font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-900'}`}>Tools & Platforms</h3>
        <div className="flex flex-wrap gap-2">
          {otherTech.map((tech) => {
            const IconComponent = tech.icon
            return (
              <span
                key={tech.name}
                className={`inline-flex items-center gap-1 ${isDarkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-100 text-gray-800'} rounded-full px-3 py-1 text-sm font-medium`}
              >
                <IconComponent className="w-4 h-4" />
                {tech.name}
              </span>
            )
          })}
        </div>
      </div>
    </section>
  )
}
