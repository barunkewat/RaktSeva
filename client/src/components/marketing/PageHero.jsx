export default function PageHero({ title, subtitle, image, imageAlt }) {
  return (
    <section className="relative overflow-hidden bg-primary-green/5 border-b border-primary-green/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-dark tracking-tight">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-4 text-base sm:text-lg text-primary-dark/70 max-w-xl leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>

          {image && (
            <div className="order-1 lg:order-2 relative rounded-2xl overflow-hidden shadow-xl aspect-video sm:aspect-4/3 max-h-[280px] sm:max-h-none">
              <img
                src={image}
                alt={imageAlt ?? ""}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/30 to-transparent" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
