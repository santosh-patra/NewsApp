import { useEffect, useState } from "react"
import Wrapper from "./Wrapper"
import { useNewsContext } from "../context/NewsContext"

const Navbar = ({ className }) => {
    // const [searchValue, setSearchValue] = useState('')
    const { setNews, fetchNews } = useNewsContext()
    const searchNews = async (e) => {
        let timer = null;
        const searchValue = e.target.value
        if (!searchValue) return;
        clearTimeout(timer)
        timer = setTimeout(async () => {
            const data = await fetchNews(`/everything?q=${searchValue}`)
            setNews(data.articles)
        }, 1000);

    }


    return (
        <div className={`${className} bg-base-200`}>
            <Wrapper>
                <div className="navbar shadow-sm">
                    <div className="flex-1">
                        <a className="btn btn-ghost text-xl">Santosh News</a>
                    </div>
                    <div className="flex gap-2">
                        <input onChange={searchNews} type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="Tailwind CSS Navbar component"
                                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                </div>
                            </div>
                            <button className="btn btn-ghost btn-circle">
                                <div className="indicator">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /> </svg>
                                    <span className="badge badge-xs badge-primary indicator-item"></span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}

export default Navbar