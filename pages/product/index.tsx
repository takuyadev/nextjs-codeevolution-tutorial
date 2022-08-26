import type { NextPage } from 'next'
import Link from 'next/link'


const Product: NextPage = () => {
    return (
        <div>
            <Link href="/product/1"><h1>Product 1</h1></Link>
            <Link href="/product/2"><h1>Product 2</h1></Link>
            <Link href="/product/3"><h1>Product 3</h1></Link>
        </div>
    )
}

export default Product