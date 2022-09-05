import React from 'react'
import Head from "next/head";
import requestsMovie from "../../utils/requestsMovie";
import Results from '../../components/results';
import NavMovie from '../../components/NavMovie';
import Pagination from '../../components/Pagination';

const genreMovies = ({ results, page, genre }) => {
    return (
        <div>
            <Head>
                <title>BINGE</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavMovie />
            <div>
                <Results results={results} redirect="movie" />
            </div>
            <Pagination page={page} pages="500" section="genreMovies" genre={genre} />

        </div>
    )
}

export default genreMovies


export async function getServerSideProps(context) {
    let { genre, page } = context.query;
    if (page === undefined) page = 1;
    if (genre === undefined) genre = [0];

    const request = await fetch(
        `https://api.themoviedb.org/3${requestsMovie[genre]?.url || requestsMovie.fetchFamilyMovies.url}&page=${page}`
    ).then((res) => res.json());

    console.log(request)
    return {
        props: {
            results: request.results,
            page,
            genre
        },
    };

}