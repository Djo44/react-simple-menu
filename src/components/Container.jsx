import React from "react";
import Menu from "./Menu";
import Button from "./Button";
import { useState } from "react";
import data from "../data.json";

const Container = () => {
  const uniques = data.map((item) => item.category).filter((value, index, self) => self.indexOf(value) === index);
  const buttons = ["All", ...uniques];

  const [food, setFood] = useState(data);
  const [categories, setCategories] = useState(uniques);

  const showUniques = (category) => {
    if (category === "All") {
      setFood(data);
      console.log(food);
      console.log(category);
      return;
    }
    const newItems = data.filter((item) => item.category === category);

    setFood(newItems);
    console.log(food);
  };

  return (
    <section className='body-font bg-djole  min-h-screen '>
      <div className='container px-5 py-24 mx-auto'>
        <div className='flex flex-col text-center w-full mb-20'>
          <h1 className='text-4xl font-medium title-font mb-4 text-white tracking-widest'>OUR MENU</h1>
          <div className='h-2 w-20 bg-primary mx-auto mb-4'></div>
          <div className='flex flex-wrap gap-4 mx-auto content-center'>
            {buttons.map((item, index) => {
              return <Button key={index} item={item} handleClick={showUniques} categories={categories} />;
            })}
          </div>
        </div>

        <div className='flex flex-wrap -m-4'>
          {food.map((item) => {
            return <Menu key={item.id} {...item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Container;
