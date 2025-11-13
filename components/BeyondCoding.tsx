import { FiHeart } from 'react-icons/fi'

interface BeyondCodingProps {
  isDarkMode: boolean
}

export default function BeyondCoding({ isDarkMode }: BeyondCodingProps) {
  return (
    <section className={`${isDarkMode ? 'bg-[#2a2a2a] border-gray-600' : 'bg-white border-gray-200'} border rounded-lg p-6 shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300`}>
      <h2 className={`flex items-center space-x-2 text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
        <FiHeart className="w-5 h-5" />
        <span>Beyond Coding</span>
      </h2>
      <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
When I’m not coding, you’ll find me watching heavy action packed shows, some of my favourites are: Game of Thrones, Bleach and Jujutsu Kaisen. Just like any other 20 year old dude, I spend my free time going to the gym and spending time with my friends. You’ll also find me scrolling through TikTok, exploring the latest in AI and machine learning, micro learning about new topics every single day!
      </p>
    </section>
  )
}
