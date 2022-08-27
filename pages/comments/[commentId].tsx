import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import { comments } from "../../data/comments";

interface Comment {
    id: number,
    text: string
}

interface Props {
    comment: Comment[]
}

const CommentPage: NextPage<Props> = ({ comment }) => {
    return (
        <div>
            {comment[0].id} {comment[0].text}
        </div>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {
    // ! Don't do this code!
    // const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    // const data = await response.json()

    // ? Call locally instead.
    const { commentId } = context.params
    const comment = comments.filter(comment => comment.id === parseInt(commentId))
    return {
        props: {
            comment
        }
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths =
        // data.map((post: { id: string }) => ({
        //     params: {
        //         postId: `${post.id}`
        //     }
        // }))

        [
            { params: { commentId: '1' } },
            { params: { commentId: '2' } },
            { params: { commentId: '3' } },
        ]

    return {
        paths: paths,
        fallback: false
    }
}

export default CommentPage