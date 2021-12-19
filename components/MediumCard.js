import Image from "next/image"

const MediumCard = ({ val }) => {

    return (
        <div className="
        cursor-pointer
         hover:scale-105
        transition-transform duration-300 ease-out">
            <div className="relative h-80 w-80">
                <Image
                    src={val.img}
                    alt=""
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl"
                />
            </div>
            <h1 className="text-sm font-semibold tracking-widest">{val.title}</h1>
        </div>
    )
}

export default MediumCard
