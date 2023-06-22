import React from 'react';

const Profile = () => {
    return (
        <section className="my-4 max-w-7xl mx-auto min-h-screen bg-gray-50 p-10 rounded-lg">
            <div className='text-2xl font-bold text-center underline'>Profile</div>
            <div className='mt-4 text-xl'>
                <div> <span className='font-bold'> Name:</span> Md. Azizul Haque Jany</div>
                <div> <span className='font-bold'> Gender:</span> Male</div>
                <div> <span className='font-bold'> Date of Birth:</span> 10 Jun 1989</div>
            </div>
        </section>
    );
};

export default Profile;