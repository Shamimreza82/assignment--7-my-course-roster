const Cart = ({titleData}) => {
    console.log (titleData)
    return (
        <div>
             <h1 className="mt-2 pb-3 text-[#2F80ED] font-bold ">Credit Hour Remaining 7 hr</h1>
             <hr className="" />
             <h3 className="text-xl font-bold mt-2">Course Name</h3>
                {
                    titleData.map(title => <p>{title.title}</p>)
                }
        </div>
    );
};

export default Cart;