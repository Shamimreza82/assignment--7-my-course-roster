import { useEffect } from "react";
import { useState } from "react";
import Cart from "../Cart/Cart";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Cards = () => {
  const [cardDataLoad, setCardDatalode] = useState([]);
  const [titleData, setTitleData] = useState ([]);
  const [totalPrice, setTotalPrice] = useState (0);
  const [creaditCount, setcreaditCount] = useState(0);
  const [creditHourRemaining, setCreditHourRemaining] = useState(20);


  useEffect(() => {
    fetch("data.json")
      .then((rsc) => rsc.json())
      .then((data) => setCardDatalode(data));
  }, []);


  const handleSelect =(courses) => {

    const nameFind =  titleData.find(nameFine => nameFine.title == courses.title); 
    if (nameFind) {
     return toast ("Already selected")
    }

    let creaditCount = courses.credit;
    titleData.forEach(countCreadit => {creaditCount = creaditCount + countCreadit.credit } )

    let count = courses.price
    titleData.forEach(countItem => {
      count = count + countItem.price
    })

    let remaining = 20; 
    const HourRemaining = remaining - creaditCount; 

    if (HourRemaining < 0) {
      return toast ("You have run out of credit hours.")
    }

    setCreditHourRemaining (HourRemaining)
    setcreaditCount (creaditCount)
    setTotalPrice(count);
    setTitleData ([...titleData, courses])
  }





  return (
    <div className="flex lg:w-[90%] m-auto flex-col-reverse lg:flex-row pb-4">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
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
            <span className="text-base font-bold text-gray-500">$ Price : {courses.price}</span>
            <span className="text-base font-bold text-gray-500">Credit : {courses.credit} hr</span>
          </div>
          <div className="card-actions justify-center">
            <button onClick={()=>handleSelect(courses)} className="btn bg-[#2F80ED] text-white w-full hover:text-[#2F80ED]">Select</button>
            <ToastContainer></ToastContainer>
          </div>
        </div>
      </div>
        ))
      }
      </div>
      <div className="lg:w-2/5 lg:ml-4 mb-5">
        <Cart 
        titleData ={titleData}
        totalPrice ={totalPrice}
        creaditCount = {creaditCount}
        creditHourRemaining = {creditHourRemaining}
        ></Cart>
      </div>
    </div>
  );
};

export default Cards;
