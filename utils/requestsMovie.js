
export default {

    fetchActionMovies: {
        title: "Action",
        url: `/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=28`,
    },
    fetchAdventureMovies: {
        title: "Adventure",
        url: `/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=12`,
    },
    fetchComedyMovies: {
        title: "Comedy",
        url: `/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=35`,
    },
    fetchFantasyMovies: {
        title: "Fantasy",
        url: `/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=14`,
    },
    fetchMysteryMovies: {
        title: "Mystery",
        url: `/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=9648`,
    },
    fetchSciFiMovies: {
        title: "Sci-Fi",
        url: `/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=878`,
    },
    fetchHistoryMovies: {
        title: "History",
        url: `/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=36`,
    },
    fetchHorrorMovies: {
        title: "Horror",
        url: `/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=27`,
    },
    fetchMusicMovies: {
        title: "Music",
        url: `/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=10402`,
    },
    fetchRomanceMovies: {
        title: "Romance",
        url: `/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=10749`,
    },
    fetchWesternMovies: {
        title: "Western",
        url: `/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=37`,
    },
    fetchThrillerMovies: {
        title: "Thriller",
        url: `/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=53`,
    },
    fetchAnimationMovies: {
        title: "Animation",
        url: `/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=16`,
    },
    fetchCrimeMovies: {
        title: "Crime",
        url: `/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=80`,
    },
    fetchDocumentaryMovies: {
        title: "Documentary",
        url: `/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=99`,
    },
    fetchDramaMovies: {
        title: "Drama",
        url: `/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=18`,
    },
    fetchFamilyMovies: {
        title: "Family",
        url: `/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=10751`,
    },

    fetchWarMovies: {
        title: "War and Politics",
        url: `/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=10752`,
    },

};