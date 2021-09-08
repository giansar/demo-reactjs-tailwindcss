function BlurryAnimatedBackground() {
    return (
        <div className={'bg-gray-50 min-h-screen flex items-center justify-center px-16'}>
            <div className={'relative w-full max-w-lg'}>
                <div className={'absolute -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000'}></div>
                <div className={'absolute -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000'}></div>
                <div className={'absolute left-28 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-bounce'}></div>
                <div className={'m-8 relative space-y-4'}>
                    <div className={'p-5 bg-white rounded-lg flex items-center justify-between space-x-8'}>
                        <div className={'flex-1'}>
                            <div className={'h-4 w-48 bg-gray-300 rounded'}></div>
                        </div>
                        <div>
                            <div className={'h-6 w-24 bg-purple-300 rounded-lg'}></div>
                        </div>
                    </div>
                    <div className={'p-5 bg-white rounded-lg flex items-center justify-between space-x-8'}>
                        <div className={'flex-1'}>
                            <div className={'h-4 w-48 bg-gray-300 rounded'}></div>
                        </div>
                        <div>
                            <div className={'h-6 w-24 bg-purple-300 rounded-lg'}></div>
                        </div>
                    </div>
                    <div className={'p-5 bg-white rounded-lg flex items-center justify-between space-x-8'}>
                        <div className={'flex-1'}>
                            <div className={'h-4 w-48 bg-gray-300 rounded'}></div>
                        </div>
                        <div>
                            <div className={'h-6 w-24 bg-purple-300 rounded-lg'}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlurryAnimatedBackground