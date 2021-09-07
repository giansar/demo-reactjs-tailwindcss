function GlowingBackgroundGradientEffects() {
    return (
        <div className={'min-h-screen px-8 py-16 bg-black'}>
            <div className={'grid gap-8 items-start justify-center'}>
                <div className={'relative group'}>
                    <div className={'absolute bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg filter blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt -inset-0.5'}>
                    </div>
                    <button
                        className={'relative px-7 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600'}>
                    <span className={'flex items-center space-x-5'}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-600 transform -rotate-45" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"/>
                        </svg>
                        <span className={'pr-6 text-gray-100'}>Demo React JS and Tailwind CSS</span>
                    </span>
                        <span className={'pl-6 text-indigo-400 group-hover:text-gray-100 transition duration-200'}>See what's new &rarr;</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default GlowingBackgroundGradientEffects