import Head from "next/head";

const Seasons = ({ data }) => {
    console.log(data)
    const BASE_URL = "https://image.tmdb.org/t/p/original";
    return (
        <div className="flex flex-col md:flex-row md:justify-around pt-5">
            <Head>
                <title>BINGE | {data.name}</title>
                <meta name="description" content={data.overview} />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="w-full md:h-[81vh] overflow-y-scroll scrollbar-hide md:w-4/5 text-white">
                <h2 className="text-3xl font-extrabold text-center underline">{data.name}</h2>
                <h2 className="text-2xl m-3 font-bold text-center">Number of episodes: {data.episodes.length}</h2>
                <div className="p-2 flex flex-wrap gap-3 items-center justify-center">
                    {data?.episodes?.map((episode) => (
                        <div
                            className="p-3 flex flex-col gap-2 rounded-md w-[300px] md:w-full"
                            key={episode?.episode_number}
                        >
                            <a className="text-2xl font-semibold text-center hover:text-slate-200 hover:font-bold ">
                                {episode?.episode_number}. {episode?.name}
                            </a>
                            <div className="lg:relative block">


                                {episode?.still_path && (
                                    <div>
                                        <img
                                            src={`${BASE_URL}${episode?.still_path}`}
                                            alt={episode?.name}
                                            height={1080}
                                            width={1920}
                                            layout="fill"
                                            className="block object-cover"
                                        />
                                    </div>
                                )}
                                <div className="flex flex-col lg:items-center justify-center gap-2 lg:absolute lg:bottom-0 lg:left-0 lg:right-0  lg:backdrop-blur-lg lg:max-h-full lg:overflow-auto lg:opacity-0 lg:translate-y-[95%] transition-transform ease-in-out duration-1000 hover:translate-y-0 hover:opacity-95 lg:p-2 ">
                                    <p className="font-normal text-white">{episode?.overview}</p>
                                    <div className="flex flex-col md:flex-row gap-5 justify-center items-center">
                                        <p>
                                            Release Date:{" "}
                                            <span className="font-medium">{episode?.air_date}</span>
                                        </p>
                                        <p>
                                            Runtime:{" "}
                                            <span className="font-medium">{episode?.runtime} minutes</span>
                                        </p>
                                        <p>
                                            Vote Average:{" "}
                                            <span className="font-medium bg-black p-1 rounded-full">{episode?.vote_average}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Seasons;

export async function getServerSideProps(context) {
    const { id, season } = context.query;
    const res = await fetch(
        `https://api.themoviedb.org/3/tv/${id}/season/${season}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
    );
    const data = await res.json();

    return {
        props: {
            id,
            season,
            data,
        },
    };
}