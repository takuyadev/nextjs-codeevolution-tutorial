import { GetStaticProps, NextPage } from "next";
import User from "../components/user"

interface Props {
    users: any
}

const UserList: NextPage<Props> = ({ users }) => {
    return (
        <div>
            <h1 className="text-4xl font-bold">List of Users</h1>
            <User users={users}/>
        </div>
    )
}

export default UserList

export  const getStaticProps: GetStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    return {
        props: {
            users: data,
        }
    }
}