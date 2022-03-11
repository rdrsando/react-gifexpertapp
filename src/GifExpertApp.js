import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  //const categories = ["One punch", "Samurai X", "Dragon Ball"];
  //   const [categories, setCategories] = useState([
  //     "One punch",
  //     "Samurai X",
  //     "Dragon Ball",
  //   ]);

  const [categories, setCategories] = useState(["One punch"]);

  //   const handleAdd = () => {
  //     // setCategories(["HunterX",...categories]);
  //     // setCategories([...categories, "HunterX"]);
  //     setCategories((cat) => [...cat, "HunterX"]);
  //   };

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      {/* <button onClick={handleAdd}>Agregar</button> */}

      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category}></GifGrid>
          // <li key={category}>{category}</li>
          //   return <li key={category}>{category}</li>;
        ))}
      </ol>
    </>
  );
};
