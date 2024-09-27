const News = () => {
    return ( 
        <div className="bg-white w-full h-full">
            <div className="w-full items-center justify-center flex flex-col py-10">
                <h1 className="text-secondary text-4xl font-bold">Nyheter</h1>
                <div className="pt-4">
                    <div className="bg-black w-32 h-1"/>
                </div>
            </div>
            <div className="flex justify-center gap-4 px-20">
                <div className="bg-black w-1/3 h-96"></div>
                <div className="bg-black w-1/3 h-96"></div>
                <div className="bg-black w-1/3 h-96"></div>
            </div>
        </div>
     );
}
 
export default News;