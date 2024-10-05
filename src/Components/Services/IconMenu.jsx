import React from 'react';

// Category data with imported icons and SVGs
const categories = [
  { name: 'Taxi & Transportation', icon: <img src="/car.svg" alt="Taxi & Transportation" className="w-10 h-10" /> },
  { name: 'Education', icon: <img src="/education.svg" alt="Taxi & Transportation" className="w-10 h-10" /> },
  { name: 'Delivery', icon: <img src="/delivery.svg" alt="Taxi & Transportation" className="w-10 h-10" /> },
  { name: 'Fitness', icon: <img src="/fitness.svg" alt="Taxi & Transportation" className="w-10 h-10" /> },
  { name: 'Rental', icon: <img src="/rent.png" alt="Taxi & Transportation" className="w-10 h-10" /> },
  { name: 'Consultation', icon: <img src="/consultation.svg" alt="Taxi & Transportation" className="w-10 h-10" /> },
  { name: 'E-commerce',icon: <img src="/ecommerce.svg" alt="Taxi & Transportation" className="w-10 h-10" /> },
  { name: 'Freelancer', icon: <img src="/freelancer.png" alt="Taxi & Transportation" className="w-10 h-10" />},
  { name: 'Social Platform', icon: <img src="/social.png" alt="Taxi & Transportation" className="w-10 h-10" /> },
  { name: 'Real Estate', icon: <img src="/real.png" alt="Taxi & Transportation" className="w-10 h-10" /> },
];

const CategoryGrid = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col gap-10 items-center  justify-center">
      <h1 className='  
      text-5xl text-white font-bold  '>Services Provided To</h1>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 max-w-5xl">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-6 bg-[#171717] text-white rounded-lg shadow-md hover:animate-gradient transition duration-300 "
          >
            <div className="mb-3">{category.icon}</div>
            <div className="text-lg text-white font-semibold">{category.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;
