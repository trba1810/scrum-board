import React from 'react';

const UserSettings = () => {
  return (
    <div className='mx-auto flex w-[500px] items-center space-x-4 rounded-xl bg-white p-6 shadow-md'>
      <div className='flex-shrink-0'>
        <img
          className='h-12 w-12'
          src='https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg'
          alt='ChitChat Logo'
        />
      </div>
      <div>
        <div className='text-xl font-medium text-black'>User Settings</div>
        <p className='text-gray-500'>Change your password or photo</p>
        <form className='mt-4'>
          <div className='mb-4 flex flex-col'>
            <label
              className='mb-2 text-sm font-medium text-gray-600'
              htmlFor='old-password'
            >
              Old Password
            </label>
            <input
              className='rounded-lg border border-gray-300 p-2'
              type='text'
              id='nickname'
            />
          </div>
          <div className='mb-4 flex flex-col'>
            <label
              className='mb-2 text-sm font-medium text-gray-600'
              htmlFor='password'
            >
              New Password
            </label>
            <input
              className='rounded-lg border border-gray-300 p-2'
              type='password'
              id='password'
            />
            <label
              className='mb-2 text-sm font-medium text-gray-600'
              htmlFor='repeat-password'
            >
              Repeat New Password
            </label>
            <input
              className='rounded-lg border border-gray-300 p-2'
              type='password'
              id='password'
            />
          </div>

          <div className='mb-4 flex flex-col'>
            <label
              className='mb-2 text-sm font-medium text-gray-600'
              htmlFor='photo'
            >
              Photo
            </label>
            <input
              className='rounded-lg border border-gray-300 p-2'
              type='file'
              id='photo'
            />
          </div>
          <button className='rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700'>
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserSettings;
