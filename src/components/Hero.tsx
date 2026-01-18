import bannerImage from '../assets/images/banner.png'

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={bannerImage}
          alt="Natural Hair Care"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-black/5 via-black/15 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-[90vh] flex items-end md:items-center justify-start md:justify-end pb-12 md:pb-0">
        <div className="w-full flex justify-start md:justify-end px-6 md:px-16 lg:px-24 xl:px-32">
          <div className="max-w-xl w-full md:w-auto">
            {/* Subtitle */}
            <p className="text-[#D4B063] text-[0.65rem] sm:text-xs md:text-sm uppercase tracking-[0.15em] sm:tracking-[0.2em] mb-2 sm:mb-3 font-light">
              Cuidado Natural
            </p>

            {/* Main Title */}
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight mb-3 sm:mb-4 md:mb-6">
              Renueva la
              <br />
              <span className="text-[#D4B063]">Belleza Natural</span>
              <br />
              de tu Cabello
            </h1>

            {/* Description */}
            <p className="text-white/90 text-sm sm:text-base md:text-lg mb-5 sm:mb-6 md:mb-8 font-light leading-relaxed max-w-md">
              Descubre el poder de la naturaleza con nuestro gotero capilar premium.
              Formulado con ingredientes naturales para revitalizar y fortalecer cada hebra.
            </p>

            {/* CTA Button */}
            <a
              href="https://wa.link/r9b6qg"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-block px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-[#D4B063] text-[#1A1A1A] font-medium text-sm sm:text-base md:text-lg uppercase tracking-wider overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#D4B063]/50"
            >
              <span className="relative z-10">Comprar Ahora</span>
              <div className="absolute inset-0 bg-[#3E5A35] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <span className="absolute inset-0 z-10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Comprar Ahora
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2">
        <p className="text-white/70 text-sm uppercase tracking-widest">Scroll</p>
        <div className="w-px h-12 bg-gradient-to-b from-white/70 to-transparent animate-pulse" />
      </div>
    </section>
  )
}
