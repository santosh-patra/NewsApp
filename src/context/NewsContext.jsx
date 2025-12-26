import { createContext, useContext, useState } from "react";
import api from "../config/axios";



const NewsContext = createContext();


const NewsContextProvider = ({ children }) => {
    const [news, setNews] = useState([])
    const [loading, setLoading] = useState(false)

    const fetchNews = async (url = '/everything?q=india') => {


        setLoading(true)
        try {
            const response = await api.get(`${url}&apiKey=6d89567ccdd24b8b88ed3eb50090e173`)
            // console.log('fetchNewsresponse--->', response.data)
            setLoading(false)
 
            return response.data
        } catch (error) {
            console.log("Error on FetchNews Function--->", error)
            setLoading(false)

        }
    }

    const value = {
        news,
        setNews,
        fetchNews,
        loading
    }

    return (
        <NewsContext.Provider value={value}>
            {children}
        </NewsContext.Provider>
    )
}

const useNewsContext = () => {
    return useContext(NewsContext)
}
/* eslint-disable react-refresh/only-export-components */

export { NewsContextProvider, useNewsContext }