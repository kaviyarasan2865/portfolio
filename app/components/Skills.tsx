import { 
  ReactIcon, 
  NextjsIcon, 
  TailwindIcon, 
  NodejsIcon, 
  ExpressIcon, 
  MongodbIcon, 
  MysqlIcon, 
  LaravelIcon,
  GitIcon,
  GithubIcon,
  PostmanIcon,
  SwaggerIcon,
  VscodeIcon
} from './Icons'

export default function Skills() {
  const skills = [
    { name: 'React', icon: <ReactIcon /> },
    { name: 'Next.js', icon: <NextjsIcon /> },
    { name: 'Tailwind CSS', icon: <TailwindIcon /> },
    { name: 'Node.js', icon: <NodejsIcon /> },
    { name: 'Express.js', icon: <ExpressIcon /> },
    { name: 'MongoDB', icon: <MongodbIcon /> },
    { name: 'MySQL', icon: <MysqlIcon /> },
    { name: 'Laravel', icon: <LaravelIcon /> },
  ]

  const tools = [
    { name: 'Git', icon: <GitIcon /> },
    { name: 'GitHub', icon: <GithubIcon /> },
    { name: 'Postman', icon: <PostmanIcon /> },
    { name: 'Swagger', icon: <SwaggerIcon /> },
    { name: 'VS Code', icon: <VscodeIcon /> },
  ]

  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-purple-500 animate-fadeIn">Skills & Tools</h2>
        
        <div className="mb-6 md:mb-10">
          <h3 className="text-2xl font-semibold mb-4 text-purple-400 animate-slideIn">Technologies</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3">
            {skills.map((skill, index) => (
              <div 
                key={skill.name} 
                className="flex flex-col items-center transform hover:scale-110 transition-transform duration-300 animate-fadeIn" 
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: 'fadeInUp 0.5s ease-out forwards'
                }}
              >
                <div className="text-6xl sm:text-7xl md:text-8xl mb-1 hover:text-purple-500 transition-colors">
                  {skill.icon}
                </div>
                <span className="text-sm sm:text-base text-center">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4 text-purple-400 animate-slideIn">Tools</h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 sm:gap-3">
            {tools.map((tool, index) => (
              <div 
                key={tool.name} 
                className="flex flex-col items-center transform hover:scale-110 transition-transform duration-300 animate-fadeIn"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: 'fadeInUp 0.5s ease-out forwards'
                }}
              >
                <div className="text-6xl sm:text-7xl md:text-8xl mb-1 hover:text-purple-500 transition-colors">
                  {tool.icon}
                </div>
                <span className="text-sm sm:text-base text-center">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

