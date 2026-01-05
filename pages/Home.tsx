import React from 'react';
import { ArrowRight, Star, Clock, CheckCircle, DollarSign, Phone, MapPin, MessageCircle } from 'lucide-react';
import { MenuItem } from '../types';

interface HomeProps {
  onNavigate: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  // KEEPING THE HEADER IMAGE AS REQUESTED
  const imgHero = "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSy8wvKJHfpsqlRvXHUv_ScgxsHKyPan4RBj9oXLVWMpE68bCquzHa-KU-rpcCTFipxIgdClNmf2TiWFwODEAHP0myCjZi6rpMEwXIIAj02VjREY_NWPMdl8LzLdenpOY-cLKc_W7t7_SM_W=s680-w680-h510-rw";
  
  // Using the new image list for other sections
  const imgBestseller1 = "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxOCvW1FetQJ5EggBzMlkoeJy6SRyrkQXqrON6t0MqGNFb8zTGIkJGIvfyDXKO7FDHHgvpbLhJVBujcqWEN01JeFniG5KUM5w8ZL-BER1jViXDwDAF8lCFFaX0r4CCiMkq_zVBQNv6o1wKU=s680-w680-h510-rw";
  const imgBestseller2 = "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwtoTiCz1HebJtyxqoqJAB_F6DyANbDgcJrCaUOFTytUMPgMoRH9oNVvPIF4F4SgOEIBCOwWAyCCDH3xoJrlpH1IrhS43myIiIxLtszVz_0lWe9N3xgJGWrC17Ppgin88NjGnnYw6EF8ZU=s680-w680-h510-rw";
  const imgBestseller3 = "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSw-EBxTT9V_0d-adNx4KI3RT4JZtZdXIz6wMZgQcXep9yYNnJzR1hKt9RiJV8UmTIeIHGkEmQ3XdnF7eKVGWS_zVMTgpISmllLkpG54HlYNtY9y80T3IiEwH90qeK2J2Dn6cLya1mU-04k=s680-w680-h510-rw";
  
  const bestsellers: MenuItem[] = [
    {
      id: '1',
      name: 'Chicken Cheesy Shawarma',
      description: 'Loaded with cheese and juicy chicken. A crowd favorite! 👌',
      price: '₹140',
      category: 'Shawarma',
      image: imgBestseller1,
    },
    {
      id: '2',
      name: 'Soya Chap Wrap',
      description: 'Healthy and tasty vegetarian delight.',
      price: '₹120',
      category: 'Veg',
      image: imgBestseller2,
    },
    {
      id: '3',
      name: 'Special Fried Chicken',
      description: 'Crispy, golden, and addictive.',
      price: '₹180',
      category: 'Chicken',
      image: imgBestseller3,
    }
  ];

  const handleOrderClick = () => {
    window.open('https://www.zomato.com', '_blank'); // Assuming Zomato based on text
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/919477193213?text=Hi! I want to know more about your menu.', '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:+919477193213';
  };

  const handleDirections = () => {
    window.open('https://www.google.com/maps/search/?api=1&query=P+N+DAS+COLLEGE+Palta', '_blank');
  };

  return (
    <div className="animate-fade-in bg-white">
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center bg-brand-dark overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={imgHero} 
            alt="Delicious Shawarma and Wraps" 
            className="w-full h-full object-cover opacity-60 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-3xl animate-slide-up" style={{ animationDelay: '100ms' }}>
            <span className="inline-block bg-brand-primary text-white font-bold px-4 py-2 rounded-lg mb-6 shadow-lg border border-brand-secondary/30">
              Reported by 160+ people as Great Value
            </span>
            <h1 className="text-6xl md:text-8xl font-black leading-tight mb-4 tracking-tight">
              Hungry<span className="text-brand-primary">?</span> <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent">Get your fill here.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 font-medium max-w-xl">
              Palta’s most loved fast food! Fresh, flavourful & pocket-friendly veg + non-veg snacks for everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handleOrderClick}
                className="bg-brand-primary hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-xl flex items-center justify-center gap-3 border-2 border-brand-primary"
              >
                Order Online <ArrowRight size={20} />
              </button>
              <button 
                onClick={handleDirections}
                className="bg-transparent hover:bg-white/10 text-white font-bold py-4 px-10 rounded-full transition-all flex items-center justify-center gap-3 border-2 border-white"
              >
                <MapPin size={20} /> Visit Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats/Info Bar */}
      <div className="bg-brand-primary py-6 text-white shadow-md relative z-20">
        <div className="container mx-auto px-4 flex flex-wrap justify-center md:justify-between items-center gap-6 text-center md:text-left">
          <div className="flex items-center gap-2">
            <Star className="fill-white text-white" /> 
            <span className="font-bold text-lg">4.9 Stars on Google (160+ Reviews)</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="text-white" />
            <span className="font-bold text-lg">Open until 10:30 PM</span>
          </div>
          <div className="flex items-center gap-2">
            <DollarSign className="text-white" />
            <span className="font-bold text-lg">Price per person: ₹1–200</span>
          </div>
        </div>
      </div>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow animate-slide-up border-b-4 border-brand-primary" style={{ animationDelay: '200ms' }}>
              <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center text-brand-primary mb-6">
                <CheckCircle size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Freshly Made</h3>
              <p className="text-gray-600">Cooked on order, always fresh! "Very good healthy and tasty food."</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow animate-slide-up border-b-4 border-brand-primary" style={{ animationDelay: '300ms' }}>
              <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center text-brand-primary mb-6">
                <Clock size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Fast Service</h3>
              <p className="text-gray-600">Zero waiting stress. "Staffs behaviour was nice and service was quick."</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow animate-slide-up border-b-4 border-brand-primary" style={{ animationDelay: '400ms' }}>
              <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center text-brand-primary mb-6">
                <DollarSign size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Budget Friendly</h3>
              <p className="text-gray-600">Starting from just ₹1–200. "Great food doesn't have to break the bank."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bestsellers */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-brand-primary font-bold tracking-wider uppercase mb-2 block">Menu Highlights</span>
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-brand-dark">People Search For...</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">Crispy Chicken Bites, Egg & Chicken Rolls, Classic Veg Wraps and more.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {bestsellers.map((item, index) => (
              <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 group animate-slide-up" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="h-72 overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-brand-primary text-white font-bold px-3 py-1 rounded-full shadow-md">
                    Bestseller
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-bold text-gray-800">{item.name}</h3>
                  </div>
                  <p className="text-gray-500 mb-6 min-h-[3rem]">{item.description}</p>
                  <div className="flex justify-between items-center border-t border-gray-100 pt-4">
                    <span className="text-2xl font-black text-brand-primary">{item.price}</span>
                    <button 
                      onClick={handleOrderClick}
                      className="bg-brand-dark text-white p-3 rounded-full hover:bg-brand-primary transition-colors"
                    >
                      <ArrowRight size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <button 
              onClick={() => onNavigate('menu')}
              className="inline-flex items-center gap-2 border-2 border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white font-bold py-4 px-10 rounded-full transition-all text-lg"
            >
              View Full Menu <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Customer Love */}
      <section className="py-24 bg-brand-dark text-white relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary opacity-10 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-secondary opacity-5 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="flex justify-center items-center gap-1 mb-4">
              <Star className="text-brand-primary fill-brand-primary" size={24} />
              <Star className="text-brand-primary fill-brand-primary" size={24} />
              <Star className="text-brand-primary fill-brand-primary" size={24} />
              <Star className="text-brand-primary fill-brand-primary" size={24} />
              <Star className="text-brand-primary fill-brand-primary" size={24} />
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4">What Our Guests Say</h2>
            <p className="text-xl text-gray-400">4.9 Star Rating based on 160+ Google Reviews</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl relative border border-gray-700 animate-slide-in-left hover:bg-gray-800 hover:scale-105 hover:shadow-2xl hover:border-brand-primary transition-all duration-300 cursor-default">
              <p className="text-lg text-gray-200 italic mb-6 leading-relaxed">"The amount was adequate and staffs behaviour was nice and service was quick."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-secondary text-brand-dark font-bold flex items-center justify-center">S</div>
                <div className="font-bold text-white">Soumyasree Roy</div>
              </div>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl relative border border-gray-700 animate-slide-up hover:bg-gray-800 hover:scale-105 hover:shadow-2xl hover:border-brand-primary transition-all duration-300 cursor-default">
              <p className="text-lg text-gray-200 italic mb-6 leading-relaxed">"Amazing food, friendly staff, loved the experience! Best for evening cravings."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-400 text-brand-dark font-bold flex items-center justify-center">K</div>
                <div className="font-bold text-white">Krishna S.</div>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl relative border border-gray-700 animate-slide-in-right hover:bg-gray-800 hover:scale-105 hover:shadow-2xl hover:border-brand-primary transition-all duration-300 cursor-default">
              <p className="text-lg text-gray-200 italic mb-6 leading-relaxed">"Crispy, fresh & pocket friendly! Awesome place! Bring your friends anytime!"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-400 text-brand-dark font-bold flex items-center justify-center">A</div>
                <div className="font-bold text-white">Adv. Mahendra P.S.</div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button 
              onClick={() => onNavigate('reviews')}
              className="text-brand-primary font-bold text-lg hover:text-white transition-colors border-b-2 border-transparent hover:border-white pb-1"
            >
              Read All Reviews
            </button>
          </div>
        </div>
      </section>

      {/* Location / Find Us */}
      <section className="py-0 flex flex-col md:flex-row min-h-[500px]">
        <div className="w-full md:w-1/3 bg-gray-50 p-12 flex flex-col justify-center border-r border-gray-200">
          <span className="text-brand-primary font-bold uppercase tracking-wider mb-2">Visit Us</span>
          <h2 className="text-4xl font-black mb-8 text-brand-dark">Directions</h2>
          <p className="text-gray-700 text-lg mb-8 font-medium leading-relaxed">
            <strong className="block text-brand-dark mb-2">Address:</strong>
            Near P N DAS COLLEGE, <br/>
            beside Mallick pharmacy, <br/>
            Shantinagar, Palta, Barrackpore, <br/>
            Jafarpur, West Bengal 743122
          </p>
          <div className="mb-8 space-y-2">
             <p className="font-bold text-brand-dark flex items-center gap-2"><Clock size={20} className="text-brand-primary"/> Open · Closes 10:30 PM</p>
             <p className="font-bold text-brand-dark flex items-center gap-2"><Phone size={20} className="text-brand-primary"/> 94771 93213</p>
          </div>
          <div className="flex flex-col gap-4">
             <button 
               onClick={handleCall}
               className="bg-brand-dark text-white py-4 px-6 rounded-xl font-bold hover:bg-black transition-colors flex items-center justify-center gap-2 shadow-lg"
             >
               <Phone size={20} /> Call Now
             </button>
             <button 
               onClick={handleWhatsApp}
               className="bg-[#25D366] text-white py-4 px-6 rounded-xl font-bold hover:opacity-90 transition-colors flex items-center justify-center gap-2 shadow-lg"
             >
               <MessageCircle size={20} /> WhatsApp Us
             </button>
             <button 
               onClick={handleDirections}
               className="bg-white text-brand-dark border-2 border-brand-dark py-4 px-6 rounded-xl font-bold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 shadow-lg"
             >
               <MapPin size={20} /> Get Directions
             </button>
          </div>
        </div>
        <div className="w-full md:w-2/3 bg-gray-200 relative">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.1234!2d88.38!3d22.78!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sP+N+Das+College!5e0!3m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{border:0}} 
            loading="lazy"
            title="Location Map"
            className="absolute inset-0"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Home;