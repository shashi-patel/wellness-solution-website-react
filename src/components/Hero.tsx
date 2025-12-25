export default function Hero() {
  return (
    <section className="pt-10 bg-gradient-to-b from-[#EAF7F6] via-white to-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-14 md:py-20 flex flex-col md:flex-row items-center gap-12">

        {/* Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight text-gray-900">
            A Smarter Way to{" "}
            <span className="bg-gradient-to-r from-[#51C2BA] to-[#277FC2] bg-clip-text text-transparent">
              Understand Your Health
            </span>
          </h1>

          <p className="text-gray-600 mt-4 max-w-lg mx-auto md:mx-0">
            Check symptoms, get instant insights, and understand your health
            condition in a simple and reliable way.
          </p>

          {/* Store Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start">
            <a
              href="https://apps.apple.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/appstore-badge.svg"
                alt="Download on the App Store"
                className="h-12 w-auto hover:opacity-90 transition"
              />
            </a>

            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/playstore-badge.svg"
                alt="Get it on Google Play"
                className="h-12 w-auto hover:opacity-90 transition"
              />
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="md:w-1/2 w-full">
          <div
            className="
              w-full h-[260px] md:h-[320px]
              rounded-2xl
              bg-gradient-to-br from-[#51C2BA]/20 to-[#277FC2]/20
              flex items-center justify-center
              text-[#277FC2] font-semibold
              shadow-sm
            "
          >
            App Preview Image
          </div>
        </div>
      </div>
    </section>
  );
}
