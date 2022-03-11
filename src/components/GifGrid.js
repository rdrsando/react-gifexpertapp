import React from "react";
import { useFecthGifs } from "../hooks/useFecthGifs";
// import { getGifs } from "../helpers/getGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  // const [first, setfirst] = useState(0);

  const { data: images, loading } = useFecthGifs(category);

  // const [images, setImages] = useState([]);

  // useEffect(() => {
  //   // getGifs(category).then(imgs=> setImages(imgs));
  //   getGifs(category).then(setImages);
  // }, [category]);

  //   getGifs();
  return (
    <>
      <h3 className="animate__animated animate__flipInX">{category}</h3>
      {/* {loading ? "Cargando..." : "Fin de Carga"} */}
      {loading && <p className="animate__animated animate__flash">Loading</p>}
      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}

        {/* <ol>
        {images.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))} */}
        {/* {images.map((img) => (
          <li key={img.id}>{img.title}</li>
        ))} */}

        {/* <h3>{first}</h3> */}
        {/* <button onClick={() => setfirst(first + 1)}></button> */}
      </div>
    </>
  );
};
