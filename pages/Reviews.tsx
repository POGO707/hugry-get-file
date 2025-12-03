import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, User, Send, PenTool } from 'lucide-react';
import { Review } from '../types';

const Reviews: React.FC = () => {
  // Hardcoded default reviews
  const defaultReviews: Review[] = [
    {
      id: '1',
      name: 'Soumyasree Roy',
      rating: 5,
      text: 'The amount was adequate and staffs behaviour was nice and service was quick.',
      source: 'Google'
    },
    {
      id: '2',
      name: 'tuhin bhattacharya',
      rating: 5,
      text: 'Very good healthy and tasty food at a very reasonable price.',
      source: 'Google'
    },
    {
      id: '3',
      name: 'Suprotim Sanyal',
      rating: 5,
      text: 'I ordered chicken cheesy shawarma, which was really good 👌',
      source: 'Google'
    },
    {
      id: '4',
      name: 'Sayan D.',
      rating: 4,
      text: 'Great place for quick bites. The rolls are filling and tasty.',
      source: 'Zomato'
    },
    {
      id: '5',
      name: 'Priya K.',
      rating: 5,
      text: 'Love the Fish Popcorn! Must try if you visit.',
      source: 'Google'
    },
    {
      id: '6',
      name: 'Rahul Sen',
      rating: 5,
      text: 'Best place in Baranagar for evening snacks. Highly recommended!',
      source: 'Swiggy'
    }
  ];

  const [userReviews, setUserReviews] = useState<Review[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    rating: 5,
    text: ''
  });

  // Load reviews from LocalStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('hungry_user_reviews');
    if (saved) {
      try {
        setUserReviews(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse reviews", e);
      }
    }
    
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Combine reviews: Newest user reviews first, then defaults
  const allReviews = [...userReviews, ...defaultReviews];
  const itemsPerScreen = isMobile ? 1 : 3;
  const maxIndex = Math.max(0, allReviews.length - itemsPerScreen);

  // Auto-scroll animation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current >= maxIndex ? 0 : current + 1));
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [maxIndex]);

  const nextSlide = () => {
    setActiveIndex((current) => (current >= maxIndex ? 0 : current + 1));
  };

  const prevSlide = () => {
    setActiveIndex((current) => (current <= 0 ? maxIndex : current - 1));
  };

  // Handle Form Input
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRatingClick = (rating: number) => {
    setFormData(prev => ({ ...prev, rating }));
  };

  // Handle Submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.text) return;

    const newReview: Review = {
      id: Date.now().toString(),
      name: formData.name,
      rating: formData.rating,
      text: formData.text,
      source: 'Google' // Labeling user reviews as Google/Website
    };

    const updatedUserReviews = [newReview, ...userReviews];
    setUserReviews(updatedUserReviews);
    
    // Save to LocalStorage
    localStorage.setItem('hungry_user_reviews', JSON.stringify(updatedUserReviews));
    
    // Reset Form
    setFormData({ name: '', rating: 5, text: '' });
    setActiveIndex(0); // Scroll to start to show new review
    alert('Thank you! Your review has been posted.');
  };

  return (
    <div className="animate-fade-in bg-gray-50 min-h-screen pb-20">
       <div className="bg-brand-dark text-white py-20 text-center border-b-4 border-brand-primary">
        <h1 className="text-4xl md:text-6xl font-black mb-4 animate-slide-down">Review Summary</h1>
        <div className="flex justify-center items-center gap-2 mb-2 animate-fade-in" style={{ animationDelay: '200ms' }}>
           <span className="text-5xl font-black text-brand-primary">4.7</span>
           <div className="flex flex-col items-start">
             <div className="flex text-brand-primary">
               {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="fill-brand-primary" size={20} />)}
             </div>
             <span className="text-sm text-gray-400">{allReviews.length} Reviews</span>
           </div>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="relative">
          {/* Controls */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-8 z-20 bg-white text-brand-dark p-3 rounded-full shadow-lg hover:bg-brand-primary hover:text-white transition-all"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-8 z-20 bg-white text-brand-dark p-3 rounded-full shadow-lg hover:bg-brand-primary hover:text-white transition-all"
          >
            <ChevronRight size={24} />
          </button>

          {/* Slider Window */}
          <div className="overflow-hidden py-8 px-2">
            <div 
              className="flex transition-transform duration-700 ease-in-out gap-8"
              style={{ transform: `translateX(-${activeIndex * (100 / itemsPerScreen)}%)` }}
            >
              {allReviews.map((review) => (
                <div 
                  key={review.id} 
                  className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 flex-shrink-0 relative group"
                  style={{ width: isMobile ? '100%' : 'calc(33.333% - 22px)' }}
                >
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-brand-primary text-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Quote size={20} />
                  </div>
                  
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={16} 
                        className={i < review.rating ? "fill-brand-primary text-brand-primary" : "text-gray-300"} 
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-8 relative z-10 leading-relaxed font-medium min-h-[80px]">
                    "{review.text}"
                  </p>
                  <div className="flex justify-between items-center border-t border-gray-100 pt-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-brand-secondary/20 flex items-center justify-center font-bold text-brand-primary text-sm">
                            <User size={18} />
                        </div>
                        <span className="font-bold text-brand-dark text-sm">{review.name}</span>
                    </div>
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wide bg-gray-100 px-3 py-1 rounded-full">
                      {review.source}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {allReviews.slice(0, maxIndex + 1).map((_, idx) => (
               <button 
                 key={idx}
                 onClick={() => setActiveIndex(idx)}
                 className={`w-3 h-3 rounded-full transition-all ${idx === activeIndex ? 'bg-brand-primary w-6' : 'bg-gray-300'}`}
               />
            ))}
          </div>
        </div>
      </div>

      {/* Write a Review Section */}
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-t-8 border-brand-primary relative overflow-hidden">
          <div className="relative z-10">
            <div className="text-center mb-8">
              <span className="bg-orange-100 text-brand-primary px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">Feedback</span>
              <h2 className="text-3xl font-black mt-4 text-brand-dark">Write a Review</h2>
              <p className="text-gray-500">Share your experience with us. It will be posted immediately!</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Rating Selector */}
              <div className="flex flex-col items-center gap-2">
                <label className="font-bold text-gray-700">Tap to Rate:</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      type="button"
                      key={star}
                      onClick={() => handleRatingClick(star)}
                      className="transition-transform hover:scale-125 focus:outline-none"
                    >
                      <Star 
                        size={32} 
                        className={`${star <= formData.rating ? 'fill-brand-primary text-brand-primary' : 'text-gray-300'}`} 
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                   <label className="block text-sm font-bold text-gray-700 mb-2">Your Name</label>
                   <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all"
                      required
                   />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Service Platform</label>
                  <select className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-500 cursor-not-allowed" disabled>
                    <option>Website Review</option>
                  </select>
                </div>
              </div>

              <div>
                 <label className="block text-sm font-bold text-gray-700 mb-2">Your Review</label>
                 <textarea 
                    name="text"
                    value={formData.text}
                    onChange={handleInputChange}
                    placeholder="Tell us what you liked..."
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all resize-none"
                    required
                 ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-brand-dark text-white font-bold py-4 rounded-xl hover:bg-brand-primary transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
              >
                <Send size={20} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                Post Review
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;