import { useEffect, useRef, useState } from 'react'
import mujerIcon from '../assets/images/mujer.png'
import peinarLaCaidaIcon from '../assets/images/peinar-la-caida-del-cabello.png'
import raizDelCabelloIcon from '../assets/images/raiz-del-cabello.png'

interface Benefit {
  title: string
  description: string
  icon: string
  isImage?: boolean
}

export default function Benefits() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
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

  const benefits: Benefit[] = [
    {
      title: 'Más Brillo',
      description: 'Recupera el brillo natural de tu cabello desde la primera aplicación',
      icon: mujerIcon,
      isImage: true
    },
    {
      title: 'Menos Caída',
      description: 'Fortalece las raíces y reduce la caída hasta en un 80%',
      icon: peinarLaCaidaIcon,
      isImage: true
    },
    {
      title: 'Crecimiento Visible',
      description: 'Estimula el crecimiento saludable y visible en pocas semanas',
      icon: raizDelCabelloIcon,
      isImage: true
    }
  ]

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white to-[#F5F5F5]"
    >
      <div className="container mx-auto px-6 md:px-16 lg:px-24 xl:px-32">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[#D4B063] text-xs sm:text-sm uppercase tracking-widest mb-3 font-light">
            Beneficios
          </p>
          <h2 className="text-[#1A1A1A] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold font-['Playfair_Display']">
            Resultados Rápidos
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12 mb-12">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className={`group relative bg-white p-8 md:p-10 rounded-sm shadow-sm hover:shadow-xl transition-all duration-500 border border-[#D4B063]/10 hover:border-[#D4B063]/30 flex flex-col items-center text-center ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: `${index * 150}ms`
              }}
            >
              {/* Icon */}
              <div className="text-5xl md:text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300 flex justify-center">
                {benefit.isImage ? (
                  <img
                    src={benefit.icon}
                    alt={benefit.title}
                    className="w-16 h-16 md:w-20 md:h-20 text-[#D4B063]"
                    style={{ filter: 'brightness(0) saturate(100%) invert(66%) sepia(25%) saturate(674%) hue-rotate(8deg) brightness(92%) contrast(85%)' }}
                  />
                ) : (
                  benefit.icon
                )}
              </div>

              {/* Title */}
              <h3 className="text-[#1A1A1A] text-xl md:text-2xl font-semibold mb-4 font-['Playfair_Display']">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-[#1A1A1A]/70 text-sm md:text-base leading-relaxed font-light">
                {benefit.description}
              </p>

              {/* Decorative Element */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#D4B063] to-[#3E5A35] group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a
            href="https://wa.link/r9b6qg"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-block px-8 md:px-10 py-3 md:py-4 bg-[#3E5A35] text-white font-medium text-sm md:text-base uppercase tracking-wider overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#3E5A35]/50"
          >
            <span className="relative z-10 flex items-center gap-2 justify-center">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Comprar por WhatsApp
            </span>
            <div className="absolute inset-0 bg-[#D4B063] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            <span className="absolute inset-0 z-10 flex items-center justify-center text-[#1A1A1A] opacity-0 group-hover:opacity-100 transition-opacity duration-300 gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Comprar por WhatsApp
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
