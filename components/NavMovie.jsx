import requestsMovie from "../utils/requestsMovie";
import { useRouter } from "next/router";

const NavMovie = () => {
    const router = useRouter();
    let genre = router.query.genre;


    return (
        <nav>
            <div className="flex justify-start text-lg whitespace-nowrap space-x-10 sm:space-x-16 font-normal overflow-x-scroll scrollbar-hide md:whitespace-normal md:justify-center md:flex-wrap pt-5 ">
                {Object.entries(requestsMovie).map(([key, { title }]) => {
                    return (
                        <h2
                            onClick={() => router.push(`?genre=${key}`)}
                            key={key}
                            className={`first:pl-0 last:pr-0 cursor-pointer transition duration-100 text-white text-lg transform hover:scale-125 hover:text-orange-600 active:text-red-600 md:mb-2 ${key === genre
                                ? " text-orange-800 active:text-[#d85c27] font-extrabold text-xl transform scale-125 hover:text-orange-800"
                                : ""
                                }`}
                        >
                            {title}
                        </h2>
                    );
                })}
            </div>

        </nav>
    );
}

export default NavMovie;