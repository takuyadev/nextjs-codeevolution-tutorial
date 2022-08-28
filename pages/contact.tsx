import type { NextPage } from "next"
import { getSession } from 'next-auth/react'

const Contact: NextPage = ({ data }) => {
    return (
        <div>
            Contact - {data}
        </div>
    )
}

export default Contact

export async function getServerSideProps(context) {
    const session = await getSession(context)

    if (!session) {
        return {
            redirect: {
                destination: " /api/auth/signin?callbackUrl=http://localhost:3000/blog",
                permanent: false
            }
        }

    }
    return {
        props: {
            data: session ? 'List of 100 personalized blogs' : "List of free blogs"
        }
    }
}