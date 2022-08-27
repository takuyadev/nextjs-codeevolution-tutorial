import { NextPage } from "next";
import { useEffect, useState } from "react";

interface Comment {
    id: number,
    text: string
}

const CommentsPage: NextPage = () => {
    const [comments, setComments] = useState([])
    const [comment, setComment] = useState('')

    useEffect(()=>{
        fetchComments()
    },[])

    const fetchComments = async () => {
        const response = await fetch('/api/comments')
        const data = await response.json()
        setComments(data)
    }

    const submitComment = async () => {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ comment }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
        fetchComments()
    }

    const modifyComment = async (commentId: number) => {
        const response = await fetch(`/api/comments/${commentId}`, {
            method: 'POST',
            body: JSON.stringify({ comment }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
        fetchComments()
    }

    const deleteComment = async (commentId: number) => {
        const response = await fetch(`/api/comments/${commentId}`, {
            method: 'DELETE'
        })
        const data = await response.json()
        console.log(data)
        fetchComments()
    }

    return (
        <div className="flex flex-col items-start gap-8">
            <div className="flex gap-8">
                <input className="border-2 border-gray-300 rounded-md"type="text" onChange={(e) => setComment(e.target.value)}></input>
                <button className="bg-slate-300 px-4 py-2"onClick={submitComment}>Submit Comment</button>
                <button className="bg-slate-300 px-4 py-2" onClick={fetchComments}>Load Comments</button>
            </div>
            {
                comments.map((comment: Comment) => (
                    <div key={comment.id}>
                        <div>
                            {comment.id} {comment.text}
                        </div>
                        <button className="bg-slate-300 px-4 py-2 hover:bg-gray-400" onClick={() => deleteComment(comment.id)}>Delete Comment</button>
                        <button className="bg-slate-300 px-4 py-2 hover:bg-gray-400" onClick={() => modifyComment(comment.id)}>Modify Comment</button>
                    </div>
                ))
            }
        </div>
    )
}

export default CommentsPage