import React from 'react';
import { ShieldCheck, Heart, Users, Sparkles, ChefHat } from 'lucide-react';

const About: React.FC = () => {
  const imgHero = "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzK7NFzee8b7aaKtsOBGetbxGR8ArM0F9TXcU9rxlRcRk39AAb4EwldWLzpCHB901X3XjKrcJc2QEY367lzB36NMoEUsgBr2TwTZT9b3ybUFWxFCInI6dfQTzh28RGw8sWBN3HkYSqE757C=s680-w680-h510-rw";
  const imgMission = "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyo_dI6e2-qAkf3s3DrNOSxe9qL5QEx30HRYTGDw78G7XOoF0sb3C-wGRmiOTcrFWxAFTia83752G_NJPANPxySHrow3HFt5N-MxnEYH418-dIT9b2EzXqvGJrg4c7HXmTWwjlGzSd2Ge37=s680-w680-h510-rw";

  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <div className="bg-brand-dark text-white py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={imgHero}
            alt="Restaurant Interior" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-black mb-6">About <span className="text-brand-primary">Hungry</span></h1>
          <p className="text-2xl text-gray-300 max-w-2xl mx-auto font-light">
            "Get your fill here."
          </p>
        </div>
      </div>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-brand-primary rounded-3xl opacity-20"></div>
              <img 
                src={imgMission}
                alt="Restaurant Vibe" 
                className="rounded-3xl shadow-2xl w-full relative z-10"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-black mb-6 text-brand-dark">Simple Food, <br/><span className="text-brand-primary">Done Right.</span></h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Located in the heart of New Town, Kolkata, <strong>Hungry</strong> is more than just a restaurant; it's a promise of satisfaction. We realized that good food doesn't need to be complicated or expensive. It just needs to be fresh, tasty, and served with a smile.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Whether you are craving a cheesy Shawarma, a spicy Tikka Wrap, or a comforting plate of Chinese, we have something to fill every hunger.
            </p>
            <div className="flex gap-4">
              <span className="px-4 py-2 bg-gray-100 rounded-lg font-semibold text-gray-700">Family Friendly</span>
              <span className="px-4 py-2 bg-gray-100 rounded-lg font-semibold text-gray-700">Pocket Friendly</span>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-black mb-16 text-center text-brand-dark">Why We Are Rated 4.7 <span className="text-brand-primary">★</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center border-b-4 border-brand-primary hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-orange-100 text-brand-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <ChefHat size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Authentic Taste</h3>
              <p className="text-gray-600">Recipes crafted to perfection, bringing out the best flavors in every bite.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center border-b-4 border-brand-primary hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Fresh Ingredients</h3>
              <p className="text-gray-600">We use only the freshest produce and meats. Quality you can taste.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center border-b-4 border-brand-primary hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Customer Love</h3>
              <p className="text-gray-600">Reported by 55+ people as a great value spot. We love serving you.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center border-b-4 border-brand-primary hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Hygiene First</h3>
              <p className="text-gray-600">Clean kitchen, safe food. Your health is our priority.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;