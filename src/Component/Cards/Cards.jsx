import { useEffect } from "react";
import { useState } from "react";
import Cart from "../Cart/Cart";

const Cards = () => {
  const [cardDataLoad, setCardDatalode] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((rsc) => rsc.json())
      .then((data) => setCardDatalode(data));
  }, []);

  return (
    <div className="flex lg:w-[90%] m-auto">
      <div className="grid grid-cols-3 gap-4">
      {
        cardDataLoad.map(courses => (
            <div key={courses.id} className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img className="w-full lg:p-4 rounded-md"
            src={courses.image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-lg">{courses.title}</h2>
          <p>{courses.short_description}</p>
          <div className="flex justify-between">
            <span className="text-base font-bold">$ Price: {courses.price}</span>
            <span className="text-base font-bold">Creadit:{courses.credit}hr</span>
          </div>
          <div className="card-actions justify-center">
            <button className="btn bg-[#2F80ED] text-white w-full hover:text-[#2F80ED]">Select</button>
          </div>
        </div>
      </div>
        ))
      }
      </div>
      <div className="lg:w-1/4">
        <Cart></Cart>
      </div>
    </div>
  );
};

export default Cards;
