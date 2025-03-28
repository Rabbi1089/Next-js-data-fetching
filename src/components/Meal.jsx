"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const Meal = () => {
  const [search, setSearch] = useState("a");
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState("");

  const loadData = async (e) => {
    console.log("meal is", meals);
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );
      if (!res.ok) {
        setError("no data found");
      }
      const data = await res.json();
      setMeals(data.meals);
      setError("");
      console.log(meals);
    } catch (error) {
      console.log(error);
      setError("no data found");
    }
  };

  const handler = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    loadData();
  }, [search]);

  return (
    <>
      <div className="text-4xl flex p-6 justify-center gap-3">
        <input
          className="input"
          type="text"
          placeholder="Scarch here"
          onChange={handler}
        />
        <button onClick={() => loadData()} className=" btn btn-primary">
          Search
        </button>
      </div>
      {meals.length}
      <div className=" grid grid-cols-3 gap-6 border-2 border-amber-600 p-4">
        {Array.isArray(meals) || meals.length > 0 ? (
          meals?.map((meal) => (
            <div  key={meal.idMeal}>
            <Image src={meal?.strMealThumb} alt={meal?.strMealThumb} height={500} width={500}></Image>
              <p className=" border-amber-800">  Title : {meal.strMeal}</p>
              <p className=" border-amber-800">Title : {meal.strInstructions}</p>
            </div>
          ))
        ) : error ? (
          <p>No data found</p>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

export default Meal;
