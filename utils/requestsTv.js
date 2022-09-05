
export default {

    fetchActionShows: {
        title: "Action & Adventure",
        url: `/discover/tv?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=10759`,
    },
    fetchComedyShows: {
        title: "Comedy",
        url: `/discover/tv?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=35`,
    },


    fetchMysteryShows: {
        title: "Mystery",
        url: `/discover/tv?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=9648`,
    },
    fetchSciFiShows: {
        title: "Sci-Fi and Fantasy",
        url: `/discover/tv?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=10765`,
    },
    fetchWesternShows: {
        title: "Western",
        url: `/discover/tv?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=37`,
    },
    fetchAnimationShows: {
        title: "Animation",
        url: `/discover/tv?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=16`,
    },
    fetchCrimeShows: {
        title: "Crime",
        url: `/discover/tv?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=80`,
    },
    fetchDocumentaryShows: {
        title: "Documentary",
        url: `/discover/tv?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=99`,
    },
    fetchDramaShows: {
        title: "Drama",
        url: `/discover/tv?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=18`,
    },
    fetchFamilyShows: {
        title: "Family",
        url: `/discover/tv?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=10751`,
    },
    fetchKidsShows: {
        title: "Kids",
        url: `/discover/tv?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=10762`,
    },
    fetchNewsShows: {
        title: "News",
        url: `/discover/tv?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=10763`,
    },
    fetchWarShows: {
        title: "War and Politics",
        url: `/discover/tv?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=10768`,
    },
    fetchTalkShows: {
        title: "Talk",
        url: `/discover/tv?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=10767`,
    },
};