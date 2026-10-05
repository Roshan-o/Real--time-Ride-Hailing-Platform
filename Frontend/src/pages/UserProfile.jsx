import React, { useContext } from 'react';
import { UserDataContext } from '../Context/Usercontext';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserProfile = () => {
  const { user } = useContext(UserDataContext);
  const navigate = useNavigate();

  if (!user) {
    return <div className="h-screen w-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className='p-7 flex flex-col justify-between h-screen'>
      <div>
        <div className='flex items-center justify-between mt-4 mb-5'>
          <img className='w-12 ml-2' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="Uber" />
          <Link to='/home' className='flex items-center text-black font-medium text-base'>
            <i className="ri-arrow-left-line mr-1"></i>Back to Home
          </Link>
        </div>

        <div className='flex flex-col items-center mb-6'>
          <div className='h-20 w-20 bg-[#eeeeee] rounded-full flex items-center justify-center mb-4'>
            <i className="ri-user-3-line text-3xl text-gray-500"></i>
          </div>
          <h3 className='text-xl text-black font-medium capitalize'>
            {user.fullname?.firstname} {user.fullname?.lastname}
          </h3>
          <p className='text-base text-gray-500'>{user.email}</p>
        </div>

        <Link to='/user/logout' className='flex items-center justify-center text-white bg-[#27A27D] font-semibold rounded-lg px-4 py-2 border w-full text-lg'>
          <i className="ri-logout-box-r-line mr-2"></i>Logout
        </Link>
      </div>
    </div>
  );
};

export default UserProfile;
