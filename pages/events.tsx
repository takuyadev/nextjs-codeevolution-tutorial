import { useState } from 'react'
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from 'next/router'

interface Event {
    id: number,
    title: string,
    date: string,
    category: string,
    description: string
}

interface Props {
    eventList: Event[]
}

const EventList: NextPage<Props> = ({ eventList }) => {

    const [events, setEvents] = useState(eventList)
    const router = useRouter()

    const fetchSportsEvents = async () => {
        const response = await fetch('http://localhost:3000/events?category=gaming')
        const data = await response.json()
        setEvents(data)
        router.push('/events?category=gaming', undefined, { shallow: true })
    }

    return (
        <div className="flex flex-col gap-8">
            <button className="bg-blue-500 m-12 rounded-lg p-4" onClick={fetchSportsEvents}>Gaming Events</button>
            <h1 className="text-3xl font-bold">List of events</h1>
            {
                events.map(event => (
                    <div className="pb-8 border-b-2 border-gray-500" key={event.id}>
                        <h2 className="font-bold mb-2">{event.id}. {event.title} {event.date} | {event.category}</h2>
                        <p>{event.description}</p>
                    </div>
                ))
            }
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { query } = context
    const { category } = query
    const queryString = category ? 'category=sports' : '';
    const response = await fetch(`http://localhost:3000/events?${queryString}`)
    const data = await response.json()

    return {
        props: {
            eventList: data
        }
    }
}

export default EventList