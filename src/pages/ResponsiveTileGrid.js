function ResponsiveTileGrid() {
    return (
        <div className={'grid place-items-center min-h-screen'}>
            <div className={'p-4 max-w-5xl grid gap-4 xs:grid-cols-2 xs:p-8 md:grid-cols-4'}>
                <h1 className={'text-4xl font-extrabold xs:col-span-2 xs:grid xs:gap-4 xs:grid-cols-2 md:col-span-3 md:text-5xl md:grid-cols-3'}>
                    <span className={'md:col-span-2'}>Grid Layout with Tailwind CSS</span>
                </h1>
                <p className={'xs:row-start-2 xs:col-start-2 xs:self-center md:col-start-1 md:col-span-2 md:pr-12 md:text-lg'}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, autem iste itaque labore minus
                    perspiciatis rem!
                </p>
                <div className={'h-16 bg-blue-500 xs:h-auto xs:square'}></div>
                <div className={'h-16 bg-blue-500 xs:h-auto xs:square'}></div>
                <div className={'h-16 bg-pink-500 xs:h-auto xs:square'}></div>
                <div className={'h-16 bg-blue-500 xs:h-auto xs:square md:col-start-2'}></div>
                <div className={'h-16 bg-pink-500 xs:h-auto xs:square'}></div>
                <div className={'h-16 bg-blue-500 xs:h-auto xs:square'}></div>
                <div className={'h-16 bg-blue-500 xs:h-auto xs:square'}></div>
                <div className={'h-16 bg-pink-500 xs:h-auto xs:square'}></div>
                <p className={'self-center md:text-lg md:col-span-2 md:text-center md:px-4'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
        </div>
    )
}

export default ResponsiveTileGrid;