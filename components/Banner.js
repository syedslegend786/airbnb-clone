import Image from "next/image"

const Banner = (props) => {
    console.log(props.cardData)
    return (
        <div className='h-[300px] lg:h-[350px] relative'>
            <Image
                layout="fill"
                objectFit={`cover`}
                src={`https://media.istockphoto.com/photos/winter-in-the-sequoias-picture-id1292624259?b=1&k=20&m=1292624259&s=170667a&w=0&h=WscmgT6QsmwxKfPhlOGbHQMSU8TFPakxQW7TNioKNSc=`}
                alt=''
            />
            <div className='flex flex-col justify-center items-center space-y-3 absolute top-1/2 left-1/2 -translate-x-[50%] '>
                <h1 className='whitespace-nowrap font-bold shadow-md text-red-400'>Not sure where to go? perfect</h1>
                <button className='text-red-400 shadow-md font-bold tracking-widest outline-none border-none capitalize  border bg-white border-black rounded-full py-3 px-4'>I am flexible!</button>
            </div>
        </div>
    )
}

export default Banner
