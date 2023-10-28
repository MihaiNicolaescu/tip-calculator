function Total({bill, tips}) {

    function calculateTotal(){
        return parseInt(bill) + parseFloat((bill * (tips / 100)));
    }

    return (
        <div className="Total flex items-center justify-center h-full">
            <p className="text-black-500 text-xl">Total price <strong>{calculateTotal()}</strong>$</p>
        </div>
    )
}

export default Total;