import Link from "next/link"

const Header: React.FC = () => {
    return (
        <header className="flex p-4 gap-8">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/product">Product</Link>
            <Link href="/docs">Docs</Link>
        </header>
    )
}

export default Header