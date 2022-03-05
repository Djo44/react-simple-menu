import React from "react";

const Button = ({ item, handleClick, categories }) => {
  return (
    <button onClick={() => handleClick(item)} className='bg-primary  hover:text-white hover:bg-secondary text-djole font-bold py-2 px-4 rounded '>
      {item}
    </button>
  );
};

export default Button;
