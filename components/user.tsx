import { NextPage } from "next";
import { UserTypes } from '../types'

interface Props {
    users: any
}

const User: NextPage<Props> = ({ users }) => {
    return (
        <div>
            {users.map((user: UserTypes) => {
                return <div key={user.id}>{user.name}</div>
            })}
        </div>
    )
}

export default User