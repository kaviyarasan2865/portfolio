import Image from 'next/image'
import img from '@/public/me.jpg'
export default function Hero() {
  return (
    <section id="about" className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white py-20 md:py-40">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center h-full gap-8">
        <div className="w-full md:w-2/4 flex justify-center animate-[float_4s_ease-in-out_infinite]">
          <Image 
            src={img}
            alt="John Doe" 
            width={600} 
            height={600} 
            className="rounded-full border-8 border-purple-500/20 shadow-2xl 
                     w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]
                     object-cover"
          />
        </div>
        <div className="w-full md:w-2/3 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 animate-[pulse_3s_ease-in-out_infinite]">
            About Me
          </h1>
          <p className="mb-8 text-base sm:text-lg text-gray-300 animate-[fadeIn_1s_ease-in-out]">
            I'm a passionate web developer with expertise in creating responsive and user-friendly websites. 
            With a strong foundation in modern web technologies, I bring ideas to life through clean and efficient code.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start animate-[slideIn_1s_ease-in-out]">
            <a 
              href="#" 
              download 
              className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-3 rounded-full hover:from-purple-500 hover:to-pink-400 transition-all duration-300 shadow-lg hover:shadow-purple-500/50 text-center"
            >
              Download CV
            </a>
            <a 
              href="#contact" 
              className="bg-transparent border-2 border-purple-500 text-purple-500 px-8 py-3 rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300 text-center"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
