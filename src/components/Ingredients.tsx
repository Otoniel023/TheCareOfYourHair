import { useEffect, useRef, useState } from 'react'
import { Leaf, Sparkles, Droplet } from 'lucide-react'
import howToMakeImage from '../assets/images/how-to-make.png'

interface IngredientCategory {
  title: string
  icon: React.ComponentType<{ className?: string }>
  items: string[]
  color: string
}

export default function Ingredients() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const categories: IngredientCategory[] = [
    {
      title: 'Extractos Naturales',
      icon: Leaf,
      color: '#3E5A35',
      items: [
        'Extracto de romero',
        'Extracto de aloe vera',
        'Extracto de jengibre',
        'Extracto de cebolla',
        'Extracto de canela'
      ]
    },
    {
      title: 'Vitaminas',
      icon: Sparkles,
      color: '#D4B063',
      items: [
        'Vitamina E',
        'Vitamina A',
        'Vitamina B5 (pantenol)'
      ]
    },
    {
      title: 'Aceites Esenciales',
      icon: Droplet,
      color: '#8B7355',
      items: [
        'Aceite esencial de menta',
        'Aceite esencial de lavanda',
        'Aceite esencial de árbol de té'
      ]
    }
  ]

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white to-[#F5F5F0] relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#3E5A35]/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D4B063]/5 rounded-full blur-3xl translate-y-1/2 translate-x-1/2" />

      <div className="container mx-auto px-6 md:px-16 lg:px-24 xl:px-32 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[#D4B063] text-xs sm:text-sm uppercase tracking-widest mb-3 font-light">
            Fórmula Natural
          </p>
          <h2 className="text-[#1A1A1A] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold font-['Playfair_Display'] mb-4">
            Ingredientes Premium
          </h2>
          <p className="text-[#1A1A1A]/70 text-base md:text-lg max-w-2xl mx-auto font-light">
            Una mezcla cuidadosamente seleccionada de ingredientes naturales para nutrir y revitalizar tu cabello
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#3E5A35]/20 to-[#D4B063]/20 rounded-2xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500" />
              <img
                src={howToMakeImage}
                alt="Ingredientes Naturales"
                className="relative w-full rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Ingredients Categories */}
          <div className="space-y-8">
            {categories.map((category, index) => (
              <div
                key={category.title}
                className={`transition-all duration-700 ${
                  isVisible
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-10'
                }`}
                style={{
                  transitionDelay: `${index * 150}ms`
                }}
              >
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#D4B063]/10">
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `${category.color}15` }}
                    >
                      <span style={{ color: category.color }}>
                        <category.icon className="w-6 h-6" />
                      </span>
                    </div>
                    <h3
                      className="text-xl md:text-2xl font-semibold font-['Playfair_Display']"
                      style={{ color: category.color }}
                    >
                      {category.title}
                    </h3>
                  </div>

                  {/* Ingredients List */}
                  <ul className="space-y-2">
                    {category.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-[#1A1A1A]/80 text-sm md:text-base"
                      >
                        <span
                          className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ backgroundColor: category.color }}
                        />
                        <span className="font-light">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Note */}
        <div
          className={`text-center mt-12 md:mt-16 transition-all duration-700 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-[#1A1A1A]/60 text-sm md:text-base font-light italic">
            100% ingredientes naturales • Sin químicos agresivos • Dermatológicamente probado
          </p>
        </div>
      </div>
    </section>
  )
}
