import React, { useState } from 'react';
import { MenuItem } from '../types';
import { Search } from 'lucide-react';

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Shawarma', 'Wraps', 'Chinese', 'Biryani', 'Rolls', 'Starters'];

  // Using the new set of images provided
  const imgShawarma = "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxOCvW1FetQJ5EggBzMlkoeJy6SRyrkQXqrON6t0MqGNFb8zTGIkJGIvfyDXKO7FDHHgvpbLhJVBujcqWEN01JeFniG5KUM5w8ZL-BER1jViXDwDAF8lCFFaX0r4CCiMkq_zVBQNv6o1wKU=s680-w680-h510-rw";
  const imgWrap = "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwtoTiCz1HebJtyxqoqJAB_F6DyANbDgcJrCaUOFTytUMPgMoRH9oNVvPIF4F4SgOEIBCOwWAyCCDH3xoJrlpH1IrhS43myIiIxLtszVz_0lWe9N3xgJGWrC17Ppgin88NjGnnYw6EF8ZU=s680-w680-h510-rw";
  const imgBiryani = "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSw-EBxTT9V_0d-adNx4KI3RT4JZtZdXIz6wMZgQcXep9yYNnJzR1hKt9RiJV8UmTIeIHGkEmQ3XdnF7eKVGWS_zVMTgpISmllLkpG54HlYNtY9y80T3IiEwH90qeK2J2Dn6cLya1mU-04k=s680-w680-h510-rw";
  const imgChinese = "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzK7NFzee8b7aaKtsOBGetbxGR8ArM0F9TXcU9rxlRcRk39AAb4EwldWLzpCHB901X3XjKrcJc2QEY367lzB36NMoEUsgBr2TwTZT9b3ybUFWxFCInI6dfQTzh28RGw8sWBN3HkYSqE757C=s680-w680-h510-rw";
  const imgRoll = "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSy0uVQagUVpLPjfZQpzw9Bj-fl1eEO2qzZ5NzOkyJy7RyYH2boI2JKDQSYTAvHIR8bDy9_88-fkJgd8GMrVQJl1uNf3C7TBlrHvizMdaDmt5Qc61rRa4lyn5eJzIcs00gyfw1Id-3V5IzrN=s680-w680-h510-rw"; 
  const imgSoya = "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSw9Qy_D9rZAD1azf2qnEStxTwVXfvcSVFZKdkPysbcnK0LOQyouGJA1Pv4AUJtQ2w0sjOIaIas6V9UGMOB94hZkUCsgq1aqSL4SdjBi6Vs3FvNWjV_Hq-Oi4pR3sYB3FjLGg2jRjiqThlyT=s680-w680-h510-rw";

  const menuItems: MenuItem[] = [
    {
      id: '1',
      name: 'Chicken Cheesy Shawarma',
      description: 'Juicy chicken with melted cheese wrapped in pita.',
      price: '₹140',
      category: 'Shawarma',
      image: imgShawarma,
    },
    {
      id: '2',
      name: 'Tikka Wrap',
      description: 'Smoky chicken tikka in a soft tortilla.',
      price: '₹130',
      category: 'Wraps',
      image: imgWrap,
    },
    {
      id: '3',
      name: 'Soya Chap Wrap',
      description: 'Delicious vegetarian soya chap marinated in spices.',
      price: '₹120',
      category: 'Wraps',
      image: imgSoya,
    },
    {
      id: '4',
      name: 'Fish Popcorn',
      description: 'Crispy bite-sized fish fillets.',
      price: '₹180',
      category: 'Starters',
      image: imgRoll,
    },
    {
      id: '5',
      name: 'Chicken Biryani',
      description: 'Aromatic basmati rice with tender chicken piece.',
      price: '₹190',
      category: 'Biryani',
      image: imgBiryani,
    },
    {
      id: '6',
      name: 'Egg Chicken Roll',
      description: 'Classic Kolkata style roll.',
      price: '₹80',
      category: 'Rolls',
      image: imgRoll,
    },
    {
      id: '7',
      name: 'Chilli Chicken',
      description: 'Spicy tangy chicken gravy.',
      price: '₹160',
      category: 'Chinese',
      image: imgChinese,
    },
    {
      id: '8',
      name: 'Veg Hakka Noodles',
      description: 'Stir fried noodles with fresh veggies.',
      price: '₹100',
      category: 'Chinese',
      image: imgChinese,
    }
  ];

  const filteredItems = activeCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  const handleOrder = (itemName: string) => {
    const text = encodeURIComponent(`Hi! I would like to order: ${itemName}.`);
    window.open(`https://wa.me/919123822622?text=${text}`, '_blank');
  };

  const handleExternalOrder = (platform: string) => {
    if (platform === 'swiggy') window.open('https://www.swiggy.com', '_blank');
    if (platform === 'zomato') window.open('https://www.zomato.com', '_blank');
  };

  return (
    <div className="animate-fade-in bg-gray-50 min-h-screen pb-20">
      {/* Header */}
      <div className="bg-brand-dark text-white py-16 text-center border-b-4 border-brand-primary">
        <h1 className="text-4xl md:text-6xl font-black mb-4">Our Menu</h1>
        <p className="text-xl text-brand-primary font-medium">Shawarma • Wraps • Rolls • Chinese</p>
      </div>

      <div className="container mx-auto px-4 -mt-8">
        {/* Filter Bar */}
        <div className="bg-white rounded-xl shadow-lg p-4 flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full font-bold transition-all ${
                activeCategory === cat
                  ? 'bg-brand-primary text-white shadow-md transform scale-105'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group border border-gray-100">
              <div className="h-56 overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4">
                  <span className="text-white text-xs font-bold bg-brand-primary px-3 py-1 rounded uppercase tracking-wider">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
                  <span className="text-xl font-black text-brand-primary">{item.price}</span>
                </div>
                <p className="text-gray-500 mb-6 h-10">{item.description}</p>
                <button 
                  onClick={() => handleOrder(item.name)}
                  className="w-full bg-brand-dark text-white py-3 rounded-lg font-bold hover:bg-gray-900 transition-colors flex items-center justify-center gap-2"
                >
                  Order on WhatsApp
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Delivery CTAs */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-black mb-8">Order From Home?</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => handleExternalOrder('swiggy')}
              className="bg-[#FC8019] text-white px-8 py-4 rounded-xl font-bold hover:opacity-90 transition-opacity shadow-lg"
            >
              Order on Swiggy
            </button>
            <button 
              onClick={() => handleExternalOrder('zomato')}
              className="bg-[#CB202D] text-white px-8 py-4 rounded-xl font-bold hover:opacity-90 transition-opacity shadow-lg"
            >
              Order on Zomato
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;