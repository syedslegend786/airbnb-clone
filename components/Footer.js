const Footer = () => {
    return (
        <div className="flex flex-col  pl-6 space-y-4 md:space-y-0 md:pl-0 md:flex-row md:justify-evenly md:items-center
        bg-gray-100
        ">
            <div className="space-y-2">
                <h1 className="font-semibold">Links</h1>
                <h1 className="cursor-pointer">Home</h1>
                <h1 className="cursor-pointer">About</h1>
                <h1 className="cursor-pointer">Map</h1>
                <h1 className="cursor-pointer">Places</h1>
            </div>
            <div className="space-y-2">
                <h1 className="font-semibold">Guid</h1>
                <h1 className="cursor-pointer">Places</h1>
                <h1 className="cursor-pointer">Map</h1>
                <h1 className="cursor-pointer">Locations</h1>
                <h1 className="cursor-pointer">Beaches</h1>
            </div>
            <div className="space-y-2">
                <h1 className="font-semibold">Connections</h1>
                <h1 className="cursor-pointer">syedslegend786@gmail.com</h1>
                <h1 className="cursor-pointer">about@gmail.com</h1>
                <h1 className="cursor-pointer">map@gmail.com</h1>
                <h1 className="cursor-pointer">places@gmail.com</h1>
            </div>
        </div>
    )
}

export default Footer
