import React from 'react';
import { useSelector } from 'react-redux';
import { auth } from '../../firebase';
import Nav from '../components/Nav';
import { selectUser } from '../features/userSlice';
import PlansScreen from './PlansScreen';

function ProfileScreen() {
  const user = useSelector(selectUser);

  return (
    <div className="h-screen text-white overflow-hidden">
      <Nav />
      <div className="flex flex-col mx-auto px-6 pt-[30%] max-w-[800px] md:pt-[10%] md:px-40">
        <h1 className="text-xl font-semibold mb-5 md:text-3xl">Edit Profile</h1>
        <div className="flex">
          <img
            className="h-[55px] md:h-[110px]"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          />
          <div className="text-white ml-[10px]">
            <h2 className="bg-stone-700 py-4 text-[15px] px-2 md:px-16 lg:px-32">{user.email}</h2>
            <div className="mt-5">
              <h3 className="pb-[10px] font-semibold text-sm">
                Plans (Current Plan: Premium)
              </h3>
              <p>Renewal Date: 23/11/2022</p>
              <div className='flex justify-between items-center border p-2 my-2 font-semibold'>
                <p className='text-sm'>Netflix Premium</p>
                <p className='text-sm px-4'>4K+HDR</p>
                <button className="py-[5px] px-1 text-white text-[10px] bg-red-600 cursor-pointer hover:bg-stone-700">Current Package</button>
              </div>
              {/* <PlansScreen/> Need Extension firebase for payment */}
              <button
                className="py-[10px] px-5 text-base mt-[1%] w-full bg-red-600 hover:bg-red-600/60 font-semibold cursor-pointer"
                onClick={() => auth.signOut()}
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
