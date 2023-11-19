import React from 'react';

import Image from 'next/image';

import im from '../images/img2.jpeg';
import im2 from '../images/img1.jpeg';

function Profile() {

  return (

    <div className='border m-0 flex flex-col'>

      <Image

        src={im2}

        className='w-full h-[25vw] object-cover'

      />

      <div className='border flex pl-5'>

        <Image

          src={im}

          className='h-[150px] w-[150px] rounded-full object-cover border relative -top-[50px]'

        />

        <div className='pl-8'>

          <h1 className='text-[4vw] font-bold text-gray-700 p-2'>Pavan Bada♎✅</h1>

          <div className='flex gap-4 justify-around'>

            <div>

              <p className='font-medium text-[4vw] text-gray-700 border p-2 rounded-lg'>6336</p>

              <p className='text-[2vw]'>Followers</p>

            </div>

            <div>

              <p className='font-medium text-[4vw] text-gray-700 border p-2 rounded-lg'>246</p>

              <p className='text-[2vw]'>Following</p>

            </div>

          </div>

        </div>

      </div>

      <div className='pl-5'>

        <h3 className='text-[4vw]'>Co-Founder of PP INFOTECH</h3>

        <a href="https://www.linkedin.com/in/pavan-bada-a64a2b239/" className='text-[3vw] text-blue-500'>

        https://www.linkedin.com/in/pavan-bada-a64a2b239/

        </a>

        <div className='flex gap-3'>

          <div className='py-2 w-[18vw] border'>✡️660</div>

          <div className='py-2 w-[18vw] border'>👍15.0k</div>

          <div className='py-2 w-[18vw] border'>👁️57.8k</div>

          <div className='py-2 w-[18vw] border'>❤️26.0k</div>

        </div>
        <div style={{ marginBottom: '2rem' }}></div>

      </div>

      <div className='border w-fit text-[4vw] text-blue-500'>

        60 POSTS

      </div>
      <div style={{ marginBottom: '2rem' }}></div>

    </div>

  );

}

export default Profile;