const Topic = () => {
    return (
        <div className="bg-white flex flex-col items-center justify-center p-12">
            <div className="flex items-center max-w-4xl mx-auto bg-white p-6 rounded-lg">
                <div className="w-full">
                    <h2 className="text-5xl font-bold text-black mb-4">Topic</h2>
                </div>
            </div>
            <div className="flex flex-wrap justify-center mt-6">
                <div className="flex justify-center w-full">
                    <button className="bg-black text-white p-8 m-4 w-1/3 text-3xl">Graphic Design</button>
                    <button className="bg-black text-white p-8 m-4 w-1/3 text-3xl">Product Design</button>
                    <button className="bg-black text-white p-8 m-4 w-1/3 text-3xl">Illustration</button>
                </div>
                <div className="flex justify-center w-full">
                    <button className="bg-black text-white p-8 m-4 w-1/3 text-3xl">Films</button>
                    <button className="bg-black text-white p-8 m-4 w-1/3 text-3xl">Photography</button>
                    <button className="bg-black text-white p-8 m-4 w-1/3 text-3xl">Graphic Design</button>
                </div>
                <div className="flex justify-center w-full">
                   <button className="bg-black text-white p-8 m-4 w-1/3 text-3xl">Art & Culture</button>
                    <button className="bg-black text-white p-8 m-4 w-1/3 text-3xl">Graphic Design</button>
                    <button className="bg-black text-white p-8 m-4 w-1/3 text-3xl">Animation</button>
                </div>
            </div>
        </div>
    );
}



export default Topic;