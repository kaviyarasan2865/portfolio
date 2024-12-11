import Image from 'next/image'
import img1 from '@/public/Web-Design.jpg'
import img2 from '@/public/Web-Developer.jpg'
export default function Services() {
  const services = [
    {
      title: 'Web Design',
      description: 'Create visually appealing and user-friendly website designs tailored to your brand.',
      image: img1
    },
    {
      title: 'Web Development',
      description: 'Build robust and scalable web applications using cutting-edge technologies.',
      image: img2
    }
  ]

  return (
    <section id="services" className="py-16 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-purple-500">Services</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="aspect-[4/3] relative">
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-purple-400">{service.title}</h3>
                <p className="text-sm text-gray-300">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

