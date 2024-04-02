import React, { useState, useEffect } from 'react';
import './styles/BrandGallery.css'; 

const BrandGallery = () => {
    const brands = [
      { id: 1, name: 'Lego',image: './images/lego.png' },
      { id: 2, name: 'Hasbro',image: './images/hasbro_logo_small.png' },
      { id: 3, name: 'Barbie', image: './images/1200px_barbie_logo.svg.png' },
      { id: 4, image: './images/hot_wheels_logos.png' },
      { id: 5, image: './images/my-little-pony.png' },
      { id: 6, image: './images/pop_logo.png' },
      { id: 7, image: './images/logo_programme_rev_and_roll_2608eb_3130b2_0_1x.png' },
      { id: 8, image: './images/spinmaster.png' },
      { id: 9, image: './images/1.jpg' },
      { id: 10, image: './images/mattels.png' },
      { id: 11, image: './images/monopoly_ipad_logos.png' },
      { id: 12, image: './images/dohvinci-logo_2.png' },
      { id: 13, image: './images/paw_logos.png' },
      { id: 14, image: './images/logo_goliaths.png' },
      { id: 15, image: './images/logo.png' },
      { id: 16, image: './images/logoplaydohs.png' },
      { id: 17, image: './images/logo (1).png' },
      { id: 18, image: './images/perplexus_logos.png' },
      { id: 19, image: './images/logo (2).png' },
      { id: 20, image: './images/markwins-beauty-collections-logo_invert.png' },
    ];

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = isMobile ? 10 : 10; 
  const totalPages = Math.ceil(brands.length / itemsPerPage);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
  };
  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleBrands = brands.slice(startIndex, startIndex + itemsPerPage);
  return (
    <div className="brand-gallery-container">
      <h4>Наши бренды</h4>
      <div className={`brand-gallery ${isMobile ? 'mobile' : ''}`}>
        {visibleBrands.map((brand) => (
          <div key={brand.id} className="brand-item">
            <img src={brand.image} alt={brand.name} />
          </div>
        ))}
      </div>
      {!isMobile && (
        <div className="pagination">
          <button onClick={handlePrevPage} disabled={currentPage === 1}>
            &lt; Назад
          </button>
          <span>{`Страница ${currentPage} из ${totalPages}`}</span>
          <button onClick={handleNextPage} disabled={currentPage === totalPages}>
            Вперед &gt;
          </button>
        </div>
      )}
    </div>
  );
};

export default BrandGallery;
