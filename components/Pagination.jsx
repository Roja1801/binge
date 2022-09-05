import { useRouter } from "next/router";

import { FaLessThan, FaGreaterThan } from "react-icons/fa";

const Pagination = ({ section, page, pages }) => {
    const router = useRouter();
    let genre = router.query.genre;

    return (
        <div className="p-5 md:p-10 lg:px-20 xl:px-36 flex justify-center gap-7  w-100 text-white">
            <button
                className="flex items-center bg-[#d85c27] disabled:bg-opacity-25 p-1.5 rounded-md justify-center enabled:hover:font-bold disabled:text-slate-500 "
                onClick={() => router.push(`/${section}?genre=${genre}`)}
                {...(page == 1 ? { disabled: true } : {})}
            >

                First Page
            </button>
            <button
                className="flex items-center justify-center gap-1 enabled:hover:font-bold disabled:bg-opacity-25 disabled:text-slate-500 "
                onClick={() =>
                    router.push(`/${section}?genre=${genre}&page=${parseInt(page) - 1}`)
                }
                {...(page <= 1 ? { disabled: true } : {})}
            >
                <FaLessThan className="text-2xl p-1.5 rounded-md" />
            </button>
            <p className="text-xl">
                {page} / {pages}
            </p>
            <button
                className="flex gap-2 items-center justify-center enabled:hover:font-bold  disabled:text-slate-500"
                onClick={() =>
                    router.push(`/${section}?genre=${genre}&page=${parseInt(page) + 1}`)
                }
                {...(page == pages ? { disabled: true } : {})}
            >
                <FaGreaterThan className="text-2xl disabled:bg-opacity-25 p-1.5 rounded-md" />
            </button>
            <button
                className="flex items-center bg-[#d85c27] p-1.5 rounded-md justify-center enabled:hover:font-bold disabled:bg-opacity-25 disabled:text-slate-500 "
                onClick={() =>
                    router.push(`/${section}?genre=${genre}&page=${parseInt(pages)}`)
                }
                {...(page == pages ? { disabled: true } : {})}
            >
                Last Page
            </button>
        </div>
    );
};

export default Pagination;