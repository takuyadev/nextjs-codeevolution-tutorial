import { NextPage } from "next";
import { useState, useEffect } from "react";



// Client side data fetching

interface Dashboard {
    posts: number,
    likes: number,
    followers: number
    following: number 
}

const Dashboard: NextPage = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [dashboardData, setDashboardData] = useState<Dashboard | null>(null)

    useEffect(() => {
        const fetchDashboardData = async () => {
            const response = await fetch('http://localhost:3000/dashboard')
            const data = await response.json()
            setDashboardData(data)
            setIsLoading(false)
        }
        fetchDashboardData()
    }, [])

    if (isLoading) {
        return <h2>...Loading</h2>
    }
    return (
        <div>
            <h2>Dashboard</h2>
            {dashboardData &&
                <>
                    <p>Posts - {dashboardData.posts}</p>
                    <p>Likes - {dashboardData.likes}</p>
                    <p>Followers - {dashboardData.likes}</p>
                    <p>Likes - {dashboardData.likes}</p>
                </>
            }
        </div>
    )
}

export default Dashboard

