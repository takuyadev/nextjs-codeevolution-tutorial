import { comments } from "../../../data/comments";

export default function handler(req: any, res: any) {
    // GET params in the URL request
    const { commentId } = req.query
    // Filter Comments to only receive queried comment
    const comment = comments.filter(comment =>  comment.id === parseInt(commentId))

    // Handle GET request for single comment
    if(req.method === "GET"){
        res.status(200).json(comment)
    } 

    // Modifying comment
    if (req.method === "POST") {
        const index = comments.findIndex(comment => comment.id === parseInt(commentId))
        comments[index].text = req.body.comment
        console.log(comments)
        res.status(200).json(comments)
    }

    //DELETE Request
    // Same request as submit
    else if (req.method === "DELETE"){
        const newComments = comments.splice(comments.findIndex(comment => comment.id === parseInt(commentId)), 1)
        res.status(200).json(newComments)
    }
}

