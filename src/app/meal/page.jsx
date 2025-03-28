import Meal from "@/components/Meal";
import React from "react";

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
