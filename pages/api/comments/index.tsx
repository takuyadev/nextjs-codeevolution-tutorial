import { comments } from "../../../data/comments";
import { getSession } from 'next-auth/react'

export default async function handler(req, res) {
    // Handles GET requests
    if (req.method === 'GET') {
        res.status(200).json(comments)
    }
    // Hanldes POST request

    else if (req.method === 'POST') {
        const session = await(getSession({ req }))

        if (!session) {
            res.status(401).json({ error: "Unauthorized User" })
        } else {
            // Set new data to push to previous data
            const comment = req.body.comment
            const newComment = {
                id: Date.now(),
                text: comment
            }

            // Add new data to previous object
            comments.push(newComment)

            // 201 == Created
            // Send new object with status of 201
            res.status(201).json(newComment)
        }

    }
}

