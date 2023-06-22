import React, { useState } from 'react';

const Profile = () => {
    const [editProfile, setEditProfile] = useState(false);

    return (
        <section className="my-4 max-w-7xl mx-auto min-h-screen bg-gray-50 p-10 rounded-lg">
            <div className='text-2xl font-bold text-center underline'>Profile</div>
            <div className='flex flex-wrap gap-4 justify-between'>
                <div className='mt-4 text-xl'>
                    <div> <span className='font-bold'> Name:</span> Md. Azizul Haque Jany</div>
                    <div> <span className='font-bold'> Gender:</span> Male</div>
                    <div> <span className='font-bold'> Date of Birth:</span> 10 Jun 1989</div>
                    <div> <span className='font-bold'> Subscription:</span> Activated</div>
                </div>
                <div>
                    <button
                        onClick={() => setEditProfile(!editProfile)}
                        type="button"
                        className="inline-block bg-gray-200 ease hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-gray-500">
                        Edit Profile
                    </button>
                </div>
            </div>
            {/* Edit Form */}
            {
                editProfile && (
                    <>
                        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                            <form className="space-y-6" action="#" method="POST">
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
                                        <label htmlFor="male" className="block text-sm font-medium leading-6 text-gray-900">
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
                                        <label className='text-sm' htmlFor="female">Male</label>
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
                                        <label className='text-sm' htmlFor="other">Female</label>
                                    </div>
                                    {/* Others */}
                                    <div className="flex gap-2">
                                        <input
                                            id="other"
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
                                <div>
                                    <button
                                        type="submit"
                                        className="flex w-full justify-center rounded-md bg-gray-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Save
                                    </button>
                                </div>
                            </form>
                        </div>
                    </>
                )
            }
        </section >
    );
};

export default Profile;