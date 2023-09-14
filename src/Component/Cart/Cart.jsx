const Cart = ({titleData ,totalPrice, creaditCount, creditHourRemaining}) => {
    console.log (titleData)
    let count = 1;
    return (
        <div className="px-2">
             <div className="flex justify-center">
             <h1 className="mt-4 pb-4 text-[#2F80ED] font-bold ">Credit Hour Remaining {creditHourRemaining} hr</h1>
             </div>
             <hr />
             <h3 className="text-xl font-bold mt-2">Course Name</h3>
                {
                    titleData.map(title => <p className="bg-slate-100 mt-2 px-3 rounded-md text-sm">{count++}. {title.title}</p>)
                }
                <br />
                <hr />
            <h4 className="py-3 font-bold">Total Credit Hour: {creaditCount} </h4>
            <hr />
            <h5 className="mt-3 font-bold"> Total Price: {totalPrice} USD</h5>
        </div>
    );
};

export default Cart;