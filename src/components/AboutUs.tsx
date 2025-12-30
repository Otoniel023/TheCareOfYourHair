import { useEffect, useRef, useState } from 'react'
import waderlynImage from '../assets/images/Waderlyn-Martinez.jpeg'

export default function AboutUs() {
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

  return (
    <section
      ref={sectionRef}
      id="about-us"
      className="py-16 md:py-24 lg:py-32 bg-white"
    >
      <div className="container mx-auto px-6 md:px-16 lg:px-24 xl:px-32">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[#D4B063] text-xs sm:text-sm uppercase tracking-widest mb-3 font-light">
            Conoce a nuestra fundadora
          </p>
          <h2 className="text-[#1A1A1A] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold font-['Playfair_Display']">
            Sobre Nosotros
          </h2>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div
            className={`relative transition-all duration-1000 flex justify-center lg:justify-start ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="relative max-w-md w-full">
              <img
                src={waderlynImage}
                alt="Waderlyn Martínez"
                className="w-full h-auto rounded-sm shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-[#D4B063] rounded-sm -z-10" />
            </div>
          </div>

          {/* Biography */}
          <div
            className={`space-y-6 transition-all duration-1000 delay-300 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-10'
            }`}
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold font-['Playfair_Display'] text-[#1A1A1A] mb-2">
                Waderlyn Martínez
              </h3>
              <p className="text-[#D4B063] text-sm uppercase tracking-wider font-light">
                CEO & Fundadora
              </p>
            </div>

            <div className="space-y-4 text-[#1A1A1A]/80 leading-relaxed">
              <p>
                Soy Waderlyn Martínez, una mujer emprendedora apasionada por la belleza consciente, el bienestar y el poder de los productos naturales. Desde siempre he creído que el cuidado personal no debe ser solo una rutina, sino un acto de amor propio, respeto por nuestro cuerpo y conexión con la naturaleza.
              </p>

              <p>
                Impulsada por el deseo de ofrecer soluciones reales para el fortalecimiento y crecimiento del cabello, nació mi compromiso de crear un producto efectivo, seguro y accesible, elaborado con ingredientes naturales, libre de químicos agresivos y amigable con el medio ambiente. Así surge este proyecto, con la firme intención de ayudar a otras personas a recuperar la salud de su cabello de manera natural y confiable.
              </p>

              <p>
                Cada gota de nuestros productos está pensada para nutrir, fortalecer y devolverle vida al cabello, pero también para inspirar seguridad, autoestima y bienestar. Mi mayor satisfacción es ver cómo nuestros clientes transforman no solo su cabello, sino también la manera en que se sienten consigo mismos.
              </p>

              <p className="text-[#3E5A35] font-medium">
                Bienvenidos a este espacio creado con propósito, amor y naturaleza. 💚🌿
              </p>
            </div>

            {/* Decorative line */}
            <div className="w-24 h-1 bg-gradient-to-r from-[#D4B063] to-[#3E5A35]" />
          </div>
        </div>
      </div>
    </section>
  )
}
