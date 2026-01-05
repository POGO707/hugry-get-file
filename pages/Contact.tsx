import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Eye } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hi, my name is ${formData.name}. Phone: ${formData.phone}. Message: ${formData.message}`
    );
    window.open(`https://wa.me/919477193213?text=${text}`, '_blank');
  };

  const handleView360 = () => {
    window.open('https://www.google.com/maps/search/?api=1&query=P+N+DAS+COLLEGE+Palta', '_blank');
  };

  return (
    <div className="animate-fade-in bg-gray-50 min-h-screen">
      <div className="bg-brand-dark text-white py-20 text-center border-b-4 border-brand-primary">
        <h1 className="text-4xl md:text-6xl font-black mb-4">Contact Us</h1>
        <p className="text-xl text-gray-400">Hungry? We are just a call away.</p>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info & Form */}
          <div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
               <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md transition-shadow">
                 <div className="bg-brand-primary/10 p-3 rounded-full text-brand-primary shrink-0">
                   <Phone size={24} />
                 </div>
                 <div>
                   <h3 className="font-bold text-lg mb-1">Phone</h3>
                   <a href="tel:+919477193213" className="text-gray-600 hover:text-brand-primary font-medium">94771 93213</a>
                 </div>
               </div>
               
               <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4 md:col-span-2 hover:shadow-md transition-shadow">
                 <div className="bg-blue-50 p-3 rounded-full text-blue-600 shrink-0">
                   <Clock size={24} />
                 </div>
                 <div>
                   <h3 className="font-bold text-lg mb-1">Opening Hours</h3>
                   <p className="text-gray-600">Open · Closes 10:30 PM</p>
                 </div>
               </div>
               <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4 md:col-span-2 hover:shadow-md transition-shadow">
                 <div className="bg-green-50 p-3 rounded-full text-green-600 shrink-0">
                   <MapPin size={24} />
                 </div>
                 <div>
                   <h3 className="font-bold text-lg mb-1">Address</h3>
                   <p className="text-gray-600">
                     Near P N DAS COLLEGE, <br/>
                     beside Mallick pharmacy, Shantinagar, <br/>
                     Palta, Barrackpore, West Bengal 743122
                   </p>
                 </div>
               </div>
             </div>

             <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-brand-primary">
               <h3 className="text-2xl font-bold mb-6 text-brand-dark">Send us a Message</h3>
               <form onSubmit={handleSubmit} className="space-y-4">
                 <div>
                   <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                   <input 
                     type="text" 
                     name="name"
                     value={formData.name}
                     onChange={handleChange}
                     required
                     className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all" 
                     placeholder="John Doe" 
                   />
                 </div>
                 <div>
                   <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                   <input 
                     type="tel" 
                     name="phone"
                     value={formData.phone}
                     onChange={handleChange}
                     required
                     className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all" 
                     placeholder="+91 94771 93213" 
                   />
                 </div>
                 <div>
                   <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                   <textarea 
                     name="message"
                     value={formData.message}
                     onChange={handleChange}
                     required
                     rows={4} 
                     className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all" 
                     placeholder="How can we help you?"
                   ></textarea>
                 </div>
                 <button type="submit" className="w-full bg-brand-primary text-white font-bold py-4 rounded-lg hover:bg-orange-700 transition-colors shadow-lg">
                   Send Message via WhatsApp
                 </button>
               </form>
             </div>
          </div>

          {/* Map */}
          <div className="sticky top-24">
            <div className="h-[500px] bg-gray-200 rounded-2xl overflow-hidden shadow-lg mb-4 border border-gray-300">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.1234!2d88.38!3d22.78!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sP+N+Das+College!5e0!3m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                loading="lazy"
                title="Location Map Detailed"
              ></iframe>
            </div>
            <button 
              onClick={handleView360}
              className="w-full bg-brand-dark text-white font-bold py-4 px-6 rounded-xl hover:bg-black transition-colors flex items-center justify-center gap-2 shadow-xl"
            >
              <Eye size={20} /> Open in Google Maps
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;