import Meal from "@/components/Meal";
import React from "react";

export const metadata = {
  title: "Meal || Next Res",
  description: "Welcome to next res meal",
};


const MealPage = () => {
    
  return (
    <div className=" text-center">
      <h1 className=" text-4xl">Search your meal here</h1>
      <h1> meal loading...............</h1>
      <Meal />
    </div>
  );
};

export default MealPage;
