import { GetServerSideProps, NextPage } from "next";

interface Props {
    articles: any[],
    category: string
}

interface Article {
    id: number,
    title: string,
    description: string,
    category: string
}

const AricleListByCategory: NextPage<Props> = ({ articles, category }) => {
    return (
        <div>
            <h1>Showing news for {category}</h1>
            {articles.map((article: Article) => (
                <h2 key={article.id}>{article.id} {article.title}</h2>
            ))}
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { params, req, res, query } = context
    console.log(query)
    // Accesssing cookies using next.js
    console.log(req.headers.cookie);
    const user = process.env.DB_USERS;
    const password = process.env.DB_PASSWORD

    console.log(user, password)
    res.setHeader('Set-Cookie', ['name=Vishwas'])

    const response = await fetch(`http://localhost:3000/news?category=${params?.category}`)
    const data = await response.json()

    return {
        props: {
            articles: data,
            category: params?.category
        }
    }
}

export default AricleListByCategory