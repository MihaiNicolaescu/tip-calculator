function Bill({bill, setBill}){
    return (
        <div className="Bill flex items-center justify-center h-full">
            <div className="w-[400px]">
                <div className="md:flex md:items-center mb-4">
                    <div className="md:w-2/4">
                        <label className="block text-black-500 font-bold md:text-right mb-1 md:mb-0 pr-4">Introdu suma de plata</label>
                    </div>
                    <div className="md:w-2/4">
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 hover:border-blue-300" type="number" name="bill" value={bill}
                        onChange={(event) => setBill(event.target.value)}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Bill;