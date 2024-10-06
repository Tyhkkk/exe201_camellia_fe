const AboutUs = () => {
    return (
        <div className="about-us-section">
      {/* WHO WE ARE Section */}
      <section className="relative">
        <img
          src="/src/assets/a1.png"
          alt="Candle"
          className="w-full h-auto object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center bg-black bg-opacity-40 text-white">
          <h2 className="text-4xl font-bold mb-4">WHO WE ARE</h2>
          <p className="max-w-2xl mx-auto text-lg">
            On the bustling path of modern life, Camellia emerges - offering meticulously crafted candles from product to packaging, with an absolute commitment to quality.
          </p>
        </div>
      </section>

      {/* The Story of Dreams Section */}
      <section className="py-12 px-4 md:px-8 bg-[#faf4ef] text-center">
        <h3 className="text-3xl font-bold text-[#a56749] mb-6">The Story of Dreams</h3>
        <p className="max-w-4xl mx-auto text-lg text-[#8b5e3c] italic">
          Camellia originated from the passion of six individuals who love creativity in technology and the beauty of art. Camellia, a premium scented candle brand, was established with the mission of bringing customers moments of relaxation and tranquility through exquisite scented candle products. Camellia`s products are handcrafted from natural ingredients, providing users with a sense of calm and peace as they immerse themselves in the gentle fragrance.
        </p>
      </section>
    </div>
    );
}

export default AboutUs;