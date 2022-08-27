import type { NextPage } from "next"
import Footer from "../components/footer"
import Head from "next/head"

const About: NextPage = () => {
    return (
        <>
            <Head>
                <title>About me</title>
                <meta name='description' content="I'm a gamer (hidden message)"/>
            </Head>
            <div>
                About
            </div>
        </>

    )
}


About.getLayout = function PageLayout(page) {
    return (
        <>
            {page}
            <Footer />
        </>
    )

}
export default About