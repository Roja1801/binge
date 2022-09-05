import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from "next/router";
import Thumbnail from '../../components/Thumbnail';
import Link from 'next/link';


const Search = () => {
    const router = useRouter();
    const [state, setState] = useState("movie");
    const [redirect, setRedirect] = useState("movie");
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);



    useEffect(() => {

        if (query != "") {
            fetch(
                `https://api.themoviedb.org/3/search/${state}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1&query=${query}&include_adult=false`
            )
                .then((res) => res.json())
                .then((data) => {
                    if (!data.errors) {
                        setResults(data.results.slice(0, 12));
                    } else {
                        setResults([]);
                    }

                });
        }
    }, [query, state]);

    useEffect(() => {
        if (state == "movie") {
            setRedirect("movie");
        } else {
            setRedirect("shows");
        }
    }, [state]);

    const handleRedirect = () => {
        router.push(
            `/search/Results?query=${query}&state=${state}&redirect=${redirect}`
        );
    };

    return (
        <div>
            <Head>
                <title>BINGE</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div>
                <div className='flex text-white justify-center items-center gap pt-10'>

                    <input
                        type="text"
                        id="search"
                        placeholder={`Search`}
                        value={query}
                        onChange={(event) => setQuery(event.target.value)}
                        className="mt-5 py-2 px-5 text-slate-900 bg-slate-50 shadow-lg rounded-l-lg w-[75vw] md:w-[55vw] mb-2"
                    />
                    <button className=' bg-[#d85c27] text-center mt-5 py-2 px-5 mb-2 rounded-r-lg' onClick={handleRedirect}>Search</button>
                </div>
                <div className='text-white flex items-center justify-center gap-8 p-3 text-2xl'>
                    <button
                        onClick={() => setState("movie")}
                        className={`cursor-pointer ${state == "movie"
                            ? "font-bold underline"
                            : " text-slate-300"
                            }`} >Search Movies</button>

                    <button
                        onClick={() => setState("tv")}
                        className={`cursor-pointer ${state == "tv"
                            ? "font-bold underline"
                            : " text-slate-300"
                            }`} >Search Series</button>
                </div>
                {query != "" && (
                    <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
                        {results.length > 0 ? (
                            results.map((result) => (
                                <Link
                                    key={result.id}
                                    href={`/${redirect}/${encodeURIComponent(result?.id)}`}
                                >
                                    <a>
                                        <Thumbnail result={result} redirect={redirect} />
                                    </a>
                                </Link>
                            ))
                        ) : (
                            <h1 className=' text-white text-center font-semibold text-2xl p-4 justify-center md:text-right md:items-end'>No results found</h1>
                        )}

                    </div>
                )}
            </div>
        </div>
    )
}

export default Search
