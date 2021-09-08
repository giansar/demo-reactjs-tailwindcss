function InstagramStories() {
    return (
        <div className={'max-w-2xl mx-auto p-8'}>
            <h2 className={'sm:text-lg sm:leading-snug font-semibold tracking-wide uppercase text-fuchsia-600'}>introducing...</h2>
            <p className={'text-5xl lg:text-6xl leading-none font-extrabold text-gray-900 mb-8'}>Tailwind stories.</p>

            <ul className={'flex space-x-6'}>
                <li className={'flex flex-col items-center space-y-1'}>
                    <div className={'relative bg-gradient-to-tr from-yellow-400 to-fuchsia-600 p-1 rounded-full'}>
                        <a className={'block bg-white p-1 rounded-full transform transition hover:-rotate-6'} href={'/#'} onClick={event => event.preventDefault()}>
                            <img className={'h-24 w-24 rounded-full'} src={'https://placekitten.com/200/200'} alt={''}/>
                        </a>
                        <button className={'create-story'}>+</button>
                    </div>
                    <a href={'/#'} onClick={event => event.preventDefault()}>kucing one</a>
                </li>
                <li className={'flex flex-col items-center space-y-1'}>
                    <div className={'bg-gradient-to-tr from-yellow-400 to-fuchsia-600 p-1 rounded-full'}>
                        <a className={'block bg-white p-1 rounded-full transform transition hover:-rotate-6'} href={'/#'} onClick={event => event.preventDefault()}>
                            <img className={'h-24 w-24 rounded-full'} src={'https://placekitten.com/201/201'} alt={''}/>
                        </a>
                    </div>
                    <a href={'/#'} onClick={event => event.preventDefault()}>kucing too</a>
                </li>
                <li className={'flex flex-col items-center space-y-1'}>
                    <div className={'bg-gradient-to-tr from-yellow-400 to-fuchsia-600 p-1 rounded-full'}>
                        <a className={'block bg-white p-1 rounded-full transform transition hover:-rotate-6'} href={'/#'} onClick={event => event.preventDefault()}>
                            <img className={'h-24 w-24 rounded-full'} src={'https://placekitten.com/202/200'} alt={''}/>
                        </a>
                    </div>
                    <a href={'/#'} onClick={event => event.preventDefault()}>kucing gaa</a>
                </li>
                <li className={'flex flex-col items-center space-y-1'}>
                    <div className={'bg-gradient-to-tr from-yellow-400 to-fuchsia-600 p-1 rounded-full'}>
                        <a className={'block bg-white p-1 rounded-full transform transition hover:-rotate-6'} href={'/#'} onClick={event => event.preventDefault()}>
                            <img className={'h-24 w-24 rounded-full'} src={'https://placekitten.com/200/201'} alt={''}/>
                        </a>
                    </div>
                    <a href={'/#'} onClick={event => event.preventDefault()}>kucing pat</a>
                </li>
            </ul>
        </div>
    )
}

export default InstagramStories