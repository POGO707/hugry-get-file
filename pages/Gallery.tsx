import React from 'react';

const Gallery: React.FC = () => {
  const images = [
    { src: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxOCvW1FetQJ5EggBzMlkoeJy6SRyrkQXqrON6t0MqGNFb8zTGIkJGIvfyDXKO7FDHHgvpbLhJVBujcqWEN01JeFniG5KUM5w8ZL-BER1jViXDwDAF8lCFFaX0r4CCiMkq_zVBQNv6o1wKU=s680-w680-h510-rw', alt: 'Delicious Food' },
    { src: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwtoTiCz1HebJtyxqoqJAB_F6DyANbDgcJrCaUOFTytUMPgMoRH9oNVvPIF4F4SgOEIBCOwWAyCCDH3xoJrlpH1IrhS43myIiIxLtszVz_0lWe9N3xgJGWrC17Ppgin88NjGnnYw6EF8ZU=s680-w680-h510-rw', alt: 'Tasty Snacks' },
    { src: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSw-EBxTT9V_0d-adNx4KI3RT4JZtZdXIz6wMZgQcXep9yYNnJzR1hKt9RiJV8UmTIeIHGkEmQ3XdnF7eKVGWS_zVMTgpISmllLkpG54HlYNtY9y80T3IiEwH90qeK2J2Dn6cLya1mU-04k=s680-w680-h510-rw', alt: 'Special Dishes' },
    { src: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzK7NFzee8b7aaKtsOBGetbxGR8ArM0F9TXcU9rxlRcRk39AAb4EwldWLzpCHB901X3XjKrcJc2QEY367lzB36NMoEUsgBr2TwTZT9b3ybUFWxFCInI6dfQTzh28RGw8sWBN3HkYSqE757C=s680-w680-h510-rw', alt: 'Freshly Prepared' },
    { src: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSy0uVQagUVpLPjfZQpzw9Bj-fl1eEO2qzZ5NzOkyJy7RyYH2boI2JKDQSYTAvHIR8bDy9_88-fkJgd8GMrVQJl1uNf3C7TBlrHvizMdaDmt5Qc61rRa4lyn5eJzIcs00gyfw1Id-3V5IzrN=s680-w680-h510-rw', alt: 'Kitchen Magic' },
    { src: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSw9Qy_D9rZAD1azf2qnEStxTwVXfvcSVFZKdkPysbcnK0LOQyouGJA1Pv4AUJtQ2w0sjOIaIas6V9UGMOB94hZkUCsgq1aqSL4SdjBi6Vs3FvNWjV_Hq-Oi4pR3sYB3FjLGg2jRjiqThlyT=s680-w680-h510-rw', alt: 'Hot & Spicy' },
    { src: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSy-bfGaZpedw6FUGp0_te7yonK0ovIZRRXJOkLLN0PtMcJQF5HIkcoo3hkhDoxZrpqgAQ2sKZ96rHIyRE2Hfp9CQT8vflCQfp8r5WNq5WbNJgnK4zQ8G2ZGKUobYIebEyXo-hDc-CbsFfQ=s680-w680-h510-rw', alt: 'Quick Bites' },
    { src: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxQFERl5ty8tDlOCw8Ep20kjmDQFXX4XbJ4OwVJx8WyYadgYOCx10Iya4Uqzv3nykq5Ld9buOlNPwb9Oe-Ciby-BAIqT3Th0w5_iBa8vH_M50mrqoLUfgou8LswOJQi42KsyAQK5uW8ekgp=s680-w680-h510-rw', alt: 'Yummy Wraps' },
    { src: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSy_yvNy7-fp1epdIYHRft3PnWGYgBL6CAcAuZr-ejb1x_Jb2bK1OMhC0tFItmDNNhiSnRTX_ei50_jvn18VDLSFR5TTmStS2DV14x2x5xt22ViVp8pFqPwtxQzaLP47ZcvIFEJvdZiSnCxi=s680-w680-h510-rw', alt: 'Healthy Options' },
    { src: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyo_dI6e2-qAkf3s3DrNOSxe9qL5QEx30HRYTGDw78G7XOoF0sb3C-wGRmiOTcrFWxAFTia83752G_NJPANPxySHrow3HFt5N-MxnEYH418-dIT9b2EzXqvGJrg4c7HXmTWwjlGzSd2Ge37=s680-w680-h510-rw', alt: 'Chef Special' },
    { src: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSx9pOgpAvhmiqhET6SqqD5lG7S_zA5GXL1vTzB1CvApt3-Gh7Rlu9TRHs_Wn9gv9H--9Mud-qrhAAf2ToZNFYH9OVX48c5wFP62IiQNO9B4eSao1-x7SQwogkSrZeyCQFSXxCGSH8rbFyM=s680-w680-h510-rw', alt: 'Great Vibe' }
  ];

  return (
    <div className="animate-fade-in min-h-screen bg-white">
      <div className="bg-brand-primary/10 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-brand-dark">Our Gallery</h1>
        <p className="text-xl text-brand-dark/80">Food, Ambience & Good Times 📸</p>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((img, index) => (
            <div key={index} className="aspect-square group relative overflow-hidden rounded-xl cursor-pointer">
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-bold text-lg">{img.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;