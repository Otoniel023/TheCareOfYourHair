import { useEffect, useRef, useState } from 'react'
import productoImage from '../assets/images/producto.png'

interface Step {
  number: string
  title: string
  description: string
  icon: string
}

export default function HowItWorks() {
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

  const steps: Step[] = [
    {
      number: '01',
      title: 'Aplica',
      description: 'Aplica el tratamiento sobre el cabello limpio y húmedo, distribuyendo uniformemente desde la raíz hasta las puntas.',
      icon: '💧'
    },
    {
      number: '02',
      title: 'Masajea',
      description: 'Masajea suavemente el cuero cabelludo con movimientos circulares durante 2-3 minutos para activar la circulación.',
      icon: '💆‍♀️'
    },
    {
      number: '03',
      title: 'Disfruta',
      description: 'Deja actuar durante 15-20 minutos y enjuaga. Úsalo 2-3 veces por semana para resultados óptimos.',
      icon: '⏱️'
    }
  ]

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 lg:py-32 bg-white relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4B063]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#3E5A35]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 md:px-16 lg:px-24 xl:px-32 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[#D4B063] text-xs sm:text-sm uppercase tracking-widest mb-3 font-light">
            Modo de Uso
          </p>
          <h2 className="text-[#1A1A1A] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold font-['Playfair_Display']">
            Cómo Funciona
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Product Image */}
          <div
            className={`order-2 lg:order-1 flex justify-center transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4B063]/20 to-[#3E5A35]/20 rounded-lg transform rotate-3 group-hover:rotate-6 transition-transform duration-500" />
              <img
                src={productoImage}
                alt="Tratamiento Capilar Natural"
                className="relative w-full max-w-md rounded-lg shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Steps */}
          <div className="order-1 lg:order-2 space-y-8">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`flex gap-6 transition-all duration-700 ${
                  isVisible
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-10'
                }`}
                style={{
                  transitionDelay: `${index * 200}ms`
                }}
              >
                {/* Icon & Number */}
                <div className="flex-shrink-0">
                  <div className="relative w-16 h-16 md:w-20 md:h-20">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#D4B063] to-[#3E5A35] rounded-full opacity-10" />
                    <div className="relative flex items-center justify-center h-full text-3xl md:text-4xl">
                      {step.icon}
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-[#D4B063] text-white text-xs font-bold px-2 py-1 rounded-full font-['Playfair_Display']">
                      {step.number}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <h3 className="text-[#1A1A1A] text-xl md:text-2xl font-semibold mb-2 font-['Playfair_Display']">
                    {step.title}
                  </h3>
                  <p className="text-[#1A1A1A]/70 text-sm md:text-base leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          className={`text-center mt-12 md:mt-16 transition-all duration-700 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-[#1A1A1A]/60 text-sm md:text-base mb-6 font-light italic">
            Ingredientes 100% naturales • Sin parabenos • Cruelty-free
          </p>
        </div>
      </div>
    </section>
  )
}
