function Tips({tips, setTips, text}){
    return (
        <div className="Tips flex items-center justify-center">
            <div className="w-[400px]">
                <div className="md:flex md:items-center mb-4">
                    <div className="md:w-2/4">
                        <label className="block text-black-500 font-bold md:text-right mb-1 md:mb-0 pr-4">{text}</label>
                    </div>
                    <div className="md:w-2/4">
                        <select className="apperance-none bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 hover:border-blue-300" name="tips" value={tips} onChange={(event) => {setTips(event.target.value)}}>
                            <option value="10">10%</option>
                            <option value="15">15%</option>
                            <option value="20">20%</option>
                            <option value="25">25%</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tips;