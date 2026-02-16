"use client";

export default function ClarityBlueprint() {
  return (
    <section id="clarity" className="w-full py-20 px-6 bg-linear-to-r from-brand-purple to-purple-700" data-aos="fade-right">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-8 text-center">HERE'S MY GIFT FOR YOU:</h2>

        <h3 className="text-3xl font-bold text-white drop-shadow-md mb-12 text-center">
          The Clarity Blueprint: A Step-by-Step Guide to Identity, Purpose, and Meaningful Living
        </h3>

        <p className="text-lg text-white text-center mb-8">
          A free guided resource created to help you:
        </p>

        {/* Horizontal images - centered with balanced spacing */}
        <div className="flex items-center justify-center gap-6 mb-8 py-2">
          <img src="/images/WhatsApp%20Image%202026-02-05%20at%2012.18.52%20PM.jpeg" alt="gift-1" className="h-48 w-auto object-cover rounded shadow-md shrink-0" loading="lazy" />
          <img src="/images/WhatsApp%20Image%202026-02-05%20at%2012.18.53%20PM.jpeg" alt="gift-2" className="h-48 w-auto object-cover rounded shadow-md shrink-0" loading="lazy" />
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white bg-opacity-10 backdrop-blur rounded-xl p-8 border border-white border-opacity-20">
            <p className="text-lg">
              <span className="text-brand-yellow font-bold">✓</span> Reconnect with your identity
            </p>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-blur rounded-xl p-8 border border-white border-opacity-20">
            <p className="text-lg">
              <span className="text-brand-yellow font-bold">✓</span> Understand purpose clearly
            </p>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-blur rounded-xl p-8 border border-white border-opacity-20">
            <p className="text-lg">
              <span className="text-brand-yellow font-bold">✓</span> Gain direction for your next aligned step
            </p>
          </div>
        </div>
        
        <p className="text-lg text-white text-center mb-12 italic">
          No pressure or noise. Just clarity.
        </p>
        
        <div className="flex justify-center">
          <a
            href="https://docs.google.com/forms/d/1aC0N8jywgx-Xvw6exwJpxlUr8NEmxYKy4p53pwjpwyI/edit"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-yellow text-brand-purple px-10 py-3 md:py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transition inline-block min-h-11"
          >
            Get the Free Clarity Blueprint
          </a>
        </div>
      </div>
    </section>
  );
}
