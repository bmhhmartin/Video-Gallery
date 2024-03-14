import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { videoFetch } from "../redux/video/videoSlice";
import Loading from "./Loading";

const VideoGallery = () => {

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(videoFetch())
    }, [])

    const {video, isLoading, isError, error} = useSelector((state)=>state.videos);

    let mainContent;

    if (isLoading) mainContent = <Loading/>
    if (!isLoading && isError) mainContent =  <div className="col-span-12">{error}</div>
    if (!isLoading && !isError && video.length === 0) mainContent = <div className="col-span-12">No Video Found</div>


    return (
        <section className="pt-12">
            <section className="pt-12">
                <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
                    {
                        video.map((item)=>(
                                <div key={item.id} className="col-span-12 sm:col-span-6 md:col-span-3 duration-300 hover:scale-[1.03]">
                                    <Link to={`videos/${item.id}`}>
                                        <div className="w-full flex flex-col">
                                            <div className="relative">
                                                <img src={item.thumbnail} className="w-full h-auto" alt="Some video title"/>
                                                <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">
                                                    12:10
                                                </p>
                                            </div>

                                            <div className="flex flex-row mt-2 gap-2">
                                                <img src={item.avatar} className="rounded-full h-6 w-6" alt="Learn with Sumit"/>
                                                <div clas="flex flex-col">
                                                    <p className="text-slate-900 text-sm font-semibold">
                                                        {item.title}
                                                    </p>
                                                    <p className="text-gray-400 text-xs mt-2 hover:text-gray-600">
                                                        {item.author}
                                                    </p>
                                                    <p className="text-gray-400 text-xs mt-1">
                                                        {item.views} . {item.date}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                        ))
                    }

                </div>
            </section>
        </section>
    );
};
export default VideoGallery;
