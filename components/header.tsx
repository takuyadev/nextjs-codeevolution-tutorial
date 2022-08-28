import Link from "next/link"
import { signIn, signOut, useSession } from "next-auth/react"

const Header: React.FC = () => {
    const { data: session, status } = useSession()
    console.log(session, status)

    return (
        <header className="flex p-4 gap-8">
            <Link href="/">Home</Link>
            <Link href="/comments">Comments</Link>
            <Link href="/about">About</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/product">Product</Link>
            <Link href="/docs">Docs</Link>
            <Link href="/pets">Pets</Link>
            <Link href="/posts">Posts</Link>
            <button onClick={() => signOut()} className="bg-red-200 p-4">Logout</button>
            <button onClick={() => signIn('github')} className="bg-green-200 p-4">Signin</button>
        </header>
    )
}

export default Header