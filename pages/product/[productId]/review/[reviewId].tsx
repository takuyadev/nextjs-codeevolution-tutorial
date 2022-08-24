import type { NextPage, GetStaticProps } from "next";
import { NextRouter, useRouter } from "next/router";

const ReviewDetail: NextPage = () => {
    const router = useRouter();
    const {productId, reviewId} = router?.query;

    return (
        <div> Review {reviewId} for {productId}  </div>
    )
}


export default ReviewDetail
