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
    <div className="flex ">
      <div className="grid grid-cols-3">
      {
        cardDataLoad.map(courses => (
            <div key={courses.id} className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-center">
            <button className="btn bg-[#2F80ED] text-white w-full hover:text-[#2F80ED]">Select</button>
          </div>
        </div>
      </div>
        ))
      }
      </div>
      <div className="">
        <Cart></Cart>
      </div>
    </div>
  );
};

export default Cards;
