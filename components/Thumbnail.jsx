
import { images } from "../next.config";
import Link from "next/link";

const Thumbnail = (({ result, redirect }) => {
    const BASE_URL = "https://image.tmdb.org/t/p/original/";
    const IMAGE_API = images.domains

    return (
        <div

            className="p-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 "
        >
            <Link href={`/${redirect}/${encodeURIComponent(result?.id)}`}>
                <a>
                    <div className="max-h-80">

                        <img
                            layout="responsive"
                            src={
                                `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
                                `${BASE_URL}${result.poster_path}` ||
                                "https://dummyimage.com/100x200/000000/fff.jpg&text=poster+unavailable"
                            }
                            height={1080}
                            width={1920}
                        />
                    </div>
                    <div className="p-2">
                        <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
                            {result.title || result.original_name}
                        </h2>

                    </div>
                </a>
            </Link>
        </div>
    );
});

export default Thumbnail;