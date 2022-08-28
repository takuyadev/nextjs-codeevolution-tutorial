import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import { useRouter } from 'next/router'

interface PostType {
    id: number,
    title: string
    body: string
}

interface Props {
    post: PostType
}

const Post: NextPage<Props> = ({ post }) => {
    const router = useRouter()
    if (router.isFallback) {
        return <h1>Loading...</h1>
    }

    return (
        <div>
            {post.id}
            {post.title}
            {post.body}
            {!post && <h1>not found</h1>}
        </div>
    )
}

export default Post

export const getStaticProps: GetStaticProps = async (context) => {
    const { params } = context

    const user = process.env.DB_USERS;
    const password = process.env.DB_PASSWORD
    console.log(user, password)
    
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params?.postId}`)
    const data = await response.json()

    if (!data.id) {
        return {
            notFound: true
        }
    }

    console.log(`Generating page for ${params?.postId}`)

    return {
        props: {
            post: data
        }
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()

    const paths =
        // data.map((post: { id: string }) => ({
        //     params: {
        //         postId: `${post.id}`
        //     }
        // }))

        [
            { params: { postId: '1' } },
            { params: { postId: '2' } },
            { params: { postId: '3' } },
        ]

    return {
        paths: paths,
        fallback: 'blocking'
    }
}

// false
// true
// blocking