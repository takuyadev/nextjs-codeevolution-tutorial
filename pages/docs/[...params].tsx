import type { NextPage } from "next"
import { useRouter } from "next/router"

const Docs: NextPage = () => {
    const router = useRouter();
    const param = router.query.params;
    return (
        <div>
            {param}
        </div>
    )
}

export default Docs