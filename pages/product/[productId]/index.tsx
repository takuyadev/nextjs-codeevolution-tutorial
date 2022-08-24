import type { NextPage } from "next";
import { useRouter } from 'next/router';

const ProductDetail: NextPage = () => {
    const router = useRouter();
    const productId: string | string[] | number | undefined = router.query.productId;

    const handleClick = () => {
        router.push('/product')
    }

    return (
        <div>
            <h1>Details about product {productId}</h1>
            <button onClick={handleClick}>Big Button</button>
        </div>
    )
}

export default ProductDetail