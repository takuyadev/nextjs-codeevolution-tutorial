import { NextPage, GetStaticProps } from "next";
import Link from "next/link"

interface Props {
    posts: any[]
}

interface PostType {
    id: number,
    title: string
}

const PostList: NextPage<Props> = ({ posts }) => {
    return (
        <div className="flex flex-col gap-8">
            <h1 className="text-3xl font-bold"> List of Posts </h1>
            {posts.map((post: PostType) => {
                return (
                    <div key={post.id} >
                        <Link href={`/posts/${post.id}`} passHref>
                            <div className="text-xl font-bold pb-2 text-slate-400" key={post.id}>
                                {post.id}. {post.title}
                            </div>
                        </Link>
                        <hr />
                    </div>
                )
            })}
        </div>
    )
}

export default PostList

export const getStaticProps: GetStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    return {
        props: {
            posts: data
        },
        revalidate: 10
    }
}