import React from "react";

const Menu = ({ title, category, price, img, desc }) => {
  return (
    <div className='p-4 lg:w-1/2  '>
      <div className='h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left'>
        <img alt='team' className='flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4 border-2 border-primary shadow-md shadow-primary' src={img} />
        <div className='flex-grow sm:pl-8'>
          <div className='flex justify-between border-b-2 border-dashed border-primary items-end tracking-wide'>
            <h2 className='title-font font-medium text-lg text-white capitalize'>{title}</h2>
            <h3 className='text-white text-lg font-bold'>{`$${price}`}</h3>
          </div>
          <p className='mb-4 mt-4 text-neutral-300'>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
