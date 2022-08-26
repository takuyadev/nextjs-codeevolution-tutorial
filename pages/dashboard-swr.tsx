import { NextPage } from "next";
import useSWR from 'swr'

const fetcher = async () => {
    const response = await fetch('http://localhost:3000/dashboard')
    const data = await response.json()
    return data
}

const DashboardSWR: NextPage = () => {
    const { data, error } = useSWR('dashboard', fetcher)

    if (error) return <h1>An error has occured</h1>
    if (!data) return  <h1>Loading...</h1>

    return (
        <div>
             <p>Posts - {data.posts}</p>
            <p>Likes - {data.likes}</p>
            <p>Followers - {data.likes}</p>
            <p>Likes - {data.likes}</p>
        </div>
    )
}

export default DashboardSWR

