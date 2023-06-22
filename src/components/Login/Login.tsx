import React, { useState } from 'react';

const Login = () => {
    const [showSignupField, setShowSignupField] = useState(false);
    return (
        <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    {showSignupField ? <div>Sign Up To Your Account</div> : <div>Sign In To Your Account</div>}
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="#" method="POST">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Email
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                Password
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    {
                        showSignupField && (
                            <>
                                <div>
                                    <div className="flex items-center justify-between">
                                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                            Full Name
                                        </label>
                                    </div>
                                    <div className="mt-2">
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            autoComplete="Off"
                                            required
                                            className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div className='flex gap-4 items-center'>
                                    <div className="flex items-center justify-between">
                                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                            Gender
                                        </label>
                                    </div>
                                    {/* Male */}
                                    <div className="flex gap-2">
                                        <input
                                            id="male"
                                            name="gender"
                                            type="radio"
                                            autoComplete="current-password"
                                            required
                                            className="block"
                                        />
                                        <label className='text-sm' htmlFor="male">Male</label>
                                    </div>
                                    {/* Female */}
                                    <div className="flex gap-2">
                                        <input
                                            id="female"
                                            name="gender"
                                            type="radio"
                                            autoComplete="current-password"
                                            required
                                            className="block"
                                        />
                                        <label className='text-sm' htmlFor="male">Female</label>
                                    </div>
                                    {/* Others */}
                                    <div className="flex gap-2">
                                        <input
                                            id="male"
                                            name="gender"
                                            type="radio"
                                            autoComplete="current-password"
                                            required
                                            className="block"
                                        />
                                        <label className='text-sm' htmlFor="male">Others</label>
                                    </div>
                                </div>
                                {/* Birth Date */}
                                <div>
                                    <div>
                                        <div className="flex items-center justify-between">
                                            <label htmlFor="birtdate" className="block text-sm font-medium leading-6 text-gray-900">
                                                Birthdate
                                            </label>
                                        </div>
                                        <div className="mt-2">
                                            <input
                                                id="dob"
                                                name="date"
                                                type="date"
                                                required
                                                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    }
                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-gray-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-700 ease focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            {showSignupField ? <span>Sign Up</span> : <span>Sign In</span>}
                        </button>
                    </div>
                </form>
                <p className="mt-10 text-center text-sm text-gray-500">
                    Not a member?{' '}
                    <button onClick={() => setShowSignupField(!showSignupField)} type='button' className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                        {showSignupField ? <div>Sign In</div> : <div>Sign Up</div>}
                    </button>
                </p>
            </div>
        </div>
    );
};

export default Login;