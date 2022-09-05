import Head from "next/head";

import Card from "../../components/Card";

const searchResults = ({ query, redirect, results }) => {
    return (
        <div>
            <Head>
                <title>BINGE</title>

                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h3 className="text-white text-center mb-5 font-semibold md:text-xl md:font-bold px-5 md:px-10 lg:px-20 xl:px-36 pt-5">
                Search results for "{query}"
            </h3>
            <div className="flex flex-wrap justify-center gap-5 text-center ">
                {results?.map((result) => (
                    <Card key={result.id} data={result} redirect={redirect} />
                ))}
            </div>
        </div>
    );
};

export default searchResults;

export async function getServerSideProps(context) {
    const { state, query, redirect } = context.query;
    const res = await fetch(
        `https://api.themoviedb.org/3/search/${state}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
    );
    const data = await res.json();
    const results = data.results;
    return {
        props: {
            results,
            redirect,
            query,
        },
    };
}