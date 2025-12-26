import React from "react";
import Wrapper from "./Wrapper";
import { useNewsContext } from "../context/NewsContext";

const Category = ({className}) => {
    const categories = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology']

    const {setNews,fetchNews} = useNewsContext()
    const handleClick = async(event)=>{
        console.log("Value-->",event.target.value)
        const data = await fetchNews(`/everything?q=${event.target.value}`)
        setNews(data.articles)
    }
    return (
        <div className={`${className}`}>
            <Wrapper>
            <div className={` scrollbar-none max-w-full w-fit m-auto flex overflow-x-auto px-4 gap-4`}>
                {
                categories.map((category) => {
                    return (
                        <button onClick={handleClick} value={category} key={category} className="btn btn-primary">{category.toUpperCase()}</button>

                    )
                })
            }
            </div>
        </Wrapper>
        </div>
    );
};

export default Category;
