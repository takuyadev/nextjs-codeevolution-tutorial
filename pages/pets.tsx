import { NextPage } from "next";
import Image from "next/image";
const PetsPage: NextPage = () => {
    return (
        <div>
            {
                ['1', '2', '3', '4', '5'].map(path => {
                    return (
                        <div key={path}>
                            <Image src={`/img/${path}.jpg`} alt="pet" width={200} height={420}/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default PetsPage