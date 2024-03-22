import { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios'

const QueryContext = createContext()

export const QueryProvider = ({ children }) => {

    const [Queries, setQueries] = useState(false)

    const [isLoading, setIsLoading] = useState(true)

    async function GetQueries() {
        try {
            const response = await (await axios.get('http://localhost:4728/query')).data
            setQueries(response)
            setIsLoading(false)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        GetQueries()
    }, [])

    const data = { Queries, setQueries, isLoading }

    return (
        <QueryContext.Provider value={data}>
            {children}
        </QueryContext.Provider>
    )
}

export const useQuery = () => useContext(QueryContext)