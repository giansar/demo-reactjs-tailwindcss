function StylingForms() {
    return (
        <div className={'bg-gray-50 min-h-screen flex items-center justify-center'}>
            <div className={'w-96'}>
                <h2 className={'w-full text-center text-2xl font-semibold'}>Create Your Account</h2>
                <p className={'text-center text-sm mb-8'}>Already Registered ? <a href={'/#'} className={'text-indigo-600 hover:text-indigo-500'}>Sign In</a></p>
                <div className={'bg-white py-8 px-6 shadow rounded-lg'}>
                    <form className={'mb-0 space-y-6'}>
                        <div>
                            <label for={'email'} className={'block text-sm font-medium text-gray-700'}>
                                Email Address
                            </label>
                            <div className={'mt-1'}>
                                <input id={'email'} name={'email'} type={'email'} autoComplete={'email'} required={true}/>
                            </div>
                        </div>
                        <div>
                            <label for={'password'} className={'block text-sm font-medium text-gray-700'}>
                                Password
                            </label>
                            <div className={'mt-1'}>
                                <input id={'password'} name={'password'} type={'password'} autoComplete={'current-password'} required={true}/>
                            </div>
                        </div>
                        <div>
                            <label for={'company-size'} className={'block text-sm font-medium text-gray-700'}>Company
                                Size</label>
                            <div className={'mt-1'}>
                                <select name={'company-size'} id={'company-size'}>
                                    <option value={''}>Please Select</option>
                                    <option value={'small'}>1 to 10 employees</option>
                                    <option value={'medium'}>11 to 50 employees</option>
                                    <option value={'large'}>50+ employees</option>
                                </select>
                            </div>
                        </div>
                        <div className={'flex items-center'}>
                            <input id={'terms-and-privacy'} name={'terms-and-privacy'} type={'checkbox'}/>
                            <label for={'terms-and-privacy'} className={'ml-2 block text-sm text-gray-900'}>
                                I agree to the&nbsp;
                                <a href={'/#'} className={'text-indigo-600 hover:text-indigo-500'}>Terms</a>
                                &nbsp;and&nbsp;
                                <a href={'/#'} className={'text-indigo-600 hover:text-indigo-500'}>Privacy Policy</a>
                            </label>
                        </div>
                        <div>
                            <button type={'submit'} className={'w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500'}>
                                Sign Up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default StylingForms