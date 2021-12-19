import Image from "next/image"

const SmallCard = ({ val }) => {
    return (
        <div className="flex items-center space-x-3
        hover:scale-105 transition-all duration-300 ease-out
        cursor-pointer hover:bg-gray-100 hover:shadow-md
        ">
            <div className="relative h-20 w-20 ">
                <Image
                    src={val.img}
                    alt=""
                    objectFit="cover"
                    layout="fill"
                    className="rounded-md"
                />
            </div>
            <div>
                <h1 className="tracking-widest">{val.location}</h1>
                <h1 className="text-sm">{val.distance}</h1>
            </div>
        </div>
        // https://a0.muscache.com/im/pictures/2da67c1c-0c61-4629-8798-1d4de1ac9291.jpg?im_w=1440
    )
}

export default SmallCard
