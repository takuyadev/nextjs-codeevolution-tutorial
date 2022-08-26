import { GetServerSideProps, NextPage } from "next"

interface Props {
    articles: any[]
}

interface Article {
    id: number,
    title: string,
    description: string,
    category: string
}

const NewsArticleList: NextPage<Props> = ({ articles }) => {
    return (
        <div>
            <h1>List of News Articles</h1>
            {
                articles.map((article: Article) => (
                    <article>
                        <h2>{article.title}</h2>
                        <h3>{article.category}</h3>
                        <p>{article.description}</p>
                    </article>
                ))
            }
        </div>
    )
}

export default NewsArticleList

export const getServerSideProps: GetServerSideProps = async () => {
    const response = await fetch('http://localhost:3000/news')
    const data = await response.json()

    return {
        props: {
            articles: data
        }
    }
}